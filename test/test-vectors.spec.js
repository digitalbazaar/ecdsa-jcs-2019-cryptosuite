/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import {createSignCryptosuite, createVerifyCryptosuite} from '../lib/index.js';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {expect} from 'chai';
import jsigs from 'jsonld-signatures';
import {loader} from './documentLoader.js';

import * as testVectors from './test-vectors.js';

const {purposes: {AssertionProofPurpose}} = jsigs;

const documentLoader = loader.build();

describe('test vectors', () => {
  const {curveFixtures} = testVectors;
  for(const curveFixture of curveFixtures) {
    addTests(curveFixture);
  }
});

function addTests({curve, keyMaterial, signFixture, verifyFixture}) {
  let keyPair;
  before(async () => {
    keyPair = await EcdsaMultikey.from(keyMaterial);
    keyPair.controller = `did:key:${keyPair.publicKeyMultibase}`;
    keyPair.id = `${keyPair.controller}#${keyPair.publicKeyMultibase}`;
  });

  it(`should create ${curve} proof`, async () => {
    const unsigned = {...signFixture};
    delete unsigned.proof;

    const signer = keyPair.signer();
    const date = new Date(signFixture.proof.created);

    let error;
    let signed;
    try {
      const cryptosuite = createSignCryptosuite();
      signed = await jsigs.sign(unsigned, {
        suite: new DataIntegrityProof({cryptosuite, signer, date}),
        purpose: new AssertionProofPurpose(),
        documentLoader
      });
    } catch(e) {
      error = e;
    }
    expect(error).to.not.exist;
    // ECDSA implementation is pseudorandom, so proof value will not match
    const modified = {...signFixture};
    modified.proof = {
      ...signFixture.proof,
      proofValue: signed.proof.proofValue
    };
    expect(signed).to.deep.equal(modified);

    const cryptosuite = createVerifyCryptosuite();
    // ensure generated signed document verifies
    const result = await jsigs.verify(signed, {
      suite: new DataIntegrityProof({cryptosuite}),
      purpose: new AssertionProofPurpose(),
      documentLoader
    });
    expect(result.verified).to.be.true;
  });

  it(`should verify ${curve} signed fixture`, async () => {
    const cryptosuite = createVerifyCryptosuite();
    const result = await jsigs.verify(verifyFixture, {
      suite: new DataIntegrityProof({cryptosuite}),
      purpose: new AssertionProofPurpose(),
      documentLoader
    });
    expect(result.verified).to.be.true;
  });
}

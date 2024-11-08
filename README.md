# ECDSA JCS 2019 Data Integrity Cryptosuite _(@digitalbazaar/ecdsa-jcs-2019-cryptosuite)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/ecdsa-jcs-2019-cryptosuite/main.yml)](https://github.com/digitalbazaar/ecdsa-jcs-2019-cryptosuite/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/ecdsa-jcs-2019-cryptosuite)](https://codecov.io/gh/digitalbazaar/ecdsa-jcs-2019-cryptosuite)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/ecdsa-jcs-2019-cryptosuite.svg)](https://npm.im/@digitalbazaar/ecdsa-jcs-2019-cryptosuite)

> ECDSA JCS 2019 Data Integrity Cryptosuite.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

For use with https://github.com/digitalbazaar/jsonld-signatures v11.0 and above.

See also related specs:

* [Verifiable Credential Data Integrity](https://w3c.github.io/vc-data-integrity/)

## Security

TBD

## Install

- Browsers and Node.js 18+ are supported.

To install from NPM:

```
npm install @digitalbazaar/ecdsa-jcs-2019-cryptosuite
```

To install locally (for development):

```
git clone https://github.com/digitalbazaar/ecdsa-jcs-2019-cryptosuite.git
cd ecdsa-jcs-2019-cryptosuite
npm install
```

## Usage

The following code snippet provides a complete example of digitally signing
a verifiable credential using this library:

```javascript
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {createSignCryptosuite} from '@digitalbazaar/ecdsa-jcs-2019-cryptosuite';
import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;


// create the unsigned credential
const unsignedCredential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      AlumniCredential: 'https://schema.org#AlumniCredential',
      alumniOf: 'https://schema.org#alumniOf'
    }
  ],
  id: 'http://example.edu/credentials/1872',
  type: [ 'VerifiableCredential', 'AlumniCredential' ],
  issuer: 'https://example.edu/issuers/565049',
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: {
    id: 'https://example.edu/students/alice',
    alumniOf: 'Example University'
  }
};

// create the keypair to use when signing
const controller = 'https://example.edu/issuers/565049';
const keyPair = await EcdsaMultikey.from({
  '@context': 'https://w3id.org/security/multikey/v1',
  id: 'https://example.edu/issuers/565049#zDnaekGZTbQBerwcehBSXLqAg6s55hVEBms1zFy89VHXtJSa9',
  type: 'Multikey',
  controller: 'https://example.edu/issuers/565049',
  publicKeyMultibase: 'zDnaekGZTbQBerwcehBSXLqAg6s55hVEBms1zFy89VHXtJSa9',
  secretKeyMultibase: 'z42tqZ5smVag3DtDhjY9YfVwTMyVHW6SCHJi2ZMrD23DGYS3'
});

// export public key and add to document loader
const publicKey = await keyPair.export({publicKey: true, includeContext: true});
addDocumentToLoader({url: publicKey.id, document: publicKey});

// create key's controller document
const controllerDoc = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/multikey/v1'
  ],
  id: controller,
  assertionMethod: [publicKey]
};
addDocumentToLoader({url: controllerDoc.id, document: controllerDoc});

// create suite
const ecdsaJcs2019Cryptosuite = createSignCryptosuite();
const suite = new DataIntegrityProof({
  signer: keyPair.signer(), cryptosuite: ecdsaJcs2019Cryptosuite
});

// create signed credential
const signedCredential = await jsigs.sign(unsignedCredential, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

// results in the following signed VC
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    {
      "AlumniCredential": "https://schema.org#AlumniCredential",
      "alumniOf": "https://schema.org#alumniOf"
    },
    "https://w3id.org/security/data-integrity/v2"
  ],
  "id": "http://example.edu/credentials/1872",
  "type": [
    "VerifiableCredential",
    "AlumniCredential"
  ],
  "issuer": "https://example.edu/issuers/565049",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "https://example.edu/students/alice",
    "alumniOf": "Example University"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2023-03-01T21:29:24Z",
    "verificationMethod": "https://example.edu/issuers/565049#zDnaekGZTbQBerwcehBSXLqAg6s55hVEBms1zFy89VHXtJSa9",
    "cryptosuite": "ecdsa-jcs-2019",
    "proofPurpose": "assertionMethod",
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      {
        "AlumniCredential": "https://schema.org#AlumniCredential",
        "alumniOf": "https://schema.org#alumniOf"
      },
      "https://w3id.org/security/data-integrity/v2"
    ],
    "proofValue": "z3ZhAmn1zfd2fjp6z5qF16xsC3Z9osMVFY64tVx2H7oRhsZLwKwEUTRaQrhsHG8rD8uMtNowAjLJhmPgX1UcScYU6"
  }
}
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © 2023 Digital Bazaar

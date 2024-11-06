/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
/* Note: This file contains data generated from the vc-di-ecdsa specification
test vectors. */

/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable quotes */
export const curveFixtures = [{
  curve: 'P-256',
  keyMaterial: {
    "publicKeyMultibase": "zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP",
    "secretKeyMultibase": "z42twTcNeSYcnqg1FLuSFs2bsGH3ZqbRHFmvS9XMsYhjxvHN"
  },
  legacy: true,
  signFixture: {
    "@context": [
      "https://www.w3.org/ns/credentials/v2",
      "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
    "type": [
      "VerifiableCredential",
      "AlumniCredential"
    ],
    "name": "Alumni Credential",
    "description": "A minimum viable example of an Alumni Credential.",
    "issuer": "https://vc.example/issuers/5678",
    "validFrom": "2023-01-01T00:00:00Z",
    "credentialSubject": {
      "id": "did:example:abcdefgh",
      "alumniOf": "The School of Examples"
    },
    "proof": {
      "type": "DataIntegrityProof",
      "created": "2023-02-24T23:36:38Z",
      "verificationMethod": "did:key:zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP#zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP",
      "cryptosuite": "ecdsa-jcs-2019",
      "proofPurpose": "assertionMethod",
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://www.w3.org/ns/credentials/examples/v2"
      ],
      "proofValue": "z48fSpWLud2PXMmBjRnacU3oE4WMHX4J1hx7qjc2K31x1aoVfLPCcpEincvjUg8ptbDnrYgcytmSj51Uj2Ap3a7WB"
    }
  },
  verifyFixture: {
    "@context": [
      "https://www.w3.org/ns/credentials/v2",
      "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
    "type": [
      "VerifiableCredential",
      "AlumniCredential"
    ],
    "name": "Alumni Credential",
    "description": "A minimum viable example of an Alumni Credential.",
    "issuer": "https://vc.example/issuers/5678",
    "validFrom": "2023-01-01T00:00:00Z",
    "credentialSubject": {
      "id": "did:example:abcdefgh",
      "alumniOf": "The School of Examples"
    },
    "proof": {
      "type": "DataIntegrityProof",
      "cryptosuite": "ecdsa-jcs-2019",
      "created": "2023-02-24T23:36:38Z",
      "verificationMethod": "did:key:zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP#zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP",
      "proofPurpose": "assertionMethod",
      "proofValue": "zq6PrUMCtqY5obCSsrQxuFJdGffCDxvFuopdZiBPUBRTFEs1VVsBZi8YiEwVWgHYrXxoV93gBHqGDBtQLPFxpZxz"
    }
  }
}, /*{
  curve: 'P-384',
  keyMaterial: {
    "publicKeyMultibase": "z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ",
    "secretKeyMultibase": "z2fanyY7zgwNpZGxX5fXXibvScNaUWNprHU9dKx7qpVj7mws9J8LLt4mDB5TyH2GLHWkUc"
  },
  signedFixture: {
    "@context": [
      "https://www.w3.org/ns/credentials/v2",
      "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
    "type": [
      "VerifiableCredential",
      "AlumniCredential"
    ],
    "name": "Alumni Credential",
    "description": "A minimum viable example of an Alumni Credential.",
    "issuer": "https://vc.example/issuers/5678",
    "validFrom": "2023-01-01T00:00:00Z",
    "credentialSubject": {
      "id": "did:example:abcdefgh",
      "alumniOf": "The School of Examples"
    },
    "proof": {
      "type": "DataIntegrityProof",
      "cryptosuite": "ecdsa-jcs-2019",
      "created": "2023-02-24T23:36:38Z",
      "verificationMethod": "did:key:z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ#z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ",
      "proofPurpose": "assertionMethod",
      "proofValue": "zR3krc7pt9Dpn1PY2u8HWPePggtzAG2SuH2ZGNrzw8Ku3QrFLWgDTjS5mCWy65ShixJEtpMwfviAFfh5xTgd5FGN1sSbpPJ5djqSZQLqQkY8KLBPNswuqKtq3bS8f9vEHm8w"
    }
  }
}*/];
/* eslint-enable quotes */
/* eslint-enable quote-props */
/* eslint-enable max-len */

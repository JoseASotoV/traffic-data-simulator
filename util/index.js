const EC = require("elliptic").ec;
const cryptoHash = require("./crypto-hash");

const ec = new EC("secp256k1");

const verifySignature = ({ publicKey, data, signature }) => {
  const keyFromPublic = ec.keyFromPublic(publicKey, "hex");

  return keyFromPublic.verify(cryptoHash(data), signature);
};

const defineTrafficStatus = ({ segmentTraffic }) => {
  //calculate overall road segment condition, based on entries provided by vehicles
  return "LOW-TRAFFIC";
};

module.exports = { verifySignature, defineTrafficStatus, cryptoHash, ec };

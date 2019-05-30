const { ec, cryptoHash } = require("./util");

class Vehicle {
  constructor() {
    this.keyPair = ec.genKeyPair();
    this.address = this.keyPair
      .getPublic()
      .encode("hex")
      .substring(0, 30);
    this.averageSpeed = 10;
  }

  updateAddress() {
    this.keyPair = ec.genKeyPair();
    this.address = this.keyPair
      .getPublic()
      .encode("hex")
      .substring(0, 30);
  }

  updateSpeed(speed) {
    this.averageSpeed = speed;
  }
}

module.exports = Vehicle;

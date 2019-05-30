const fetch = require("node-fetch");
const _ = require("underscore");

class Street {
  constructor({ streetId }) {
    this.streetId = streetId;
    this.port = 3000 + parseInt(this.streetId.replace("street", ""));
    this.tempVehicles = [];
    this.currentVehicles = [];
    this.connectedStreets = [];
  }

  addStreet({ street }) {
    this.connectedStreets.push(street);
    return;
  }

  async addVehicle({ vehicle }) {
    this.tempVehicles.push(vehicle);
    return;
  }

  async moveVehicles() {
    if (this.currentVehicles.length <= 0) {
      return;
    }
    for (let i = 0; i < this.currentVehicles.length; i++) {
      //let rand = Math.floor(Math.random() * (this.connectedStreets.length + 1));
      let rand = Math.floor(Math.random() * this.connectedStreets.length);
      //let rand = 0;
      if (rand === this.connectedStreets.length) {
        this.addVehicle({ vehicle: this.currentVehicles[i] });
        continue;
      }

      this.connectedStreets[rand].addVehicle({
        vehicle: this.currentVehicles[i]
      });
    }
    return;
  }

  async setTempToCurrent() {
    await this.clearBlockchainData();
    this.currentVehicles = _.clone(this.tempVehicles);
    this.tempVehicles = [];
    if (this.currentVehicles.length > 0) {
      await this.sendVehicleDataToBlockchain();
    }
    return;
  }

  async clearBlockchainData() {
    for (let i = 0; i < this.currentVehicles.length; i++) {
      console.log(
        `removing vehicle: ${this.currentVehicles[i].address.substring(
          0,
          30
        )} from street: ${this.streetId}`
      );
      await this.deleteVehicleInfoAsync(this.currentVehicles[i].address);
    }
    return;
  }

  async deleteVehicleInfoAsync(address) {
    const url = `http://localhost:${this.port}/api/disconnect-vehicle`;
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({ address }),
      headers: { "Content-Type": "application/json" }
    });

    let data = await response.json();
    return data;
  }

  async setVehicleInfoAsync({ vehicleInfo }) {
    const url = `http://localhost:${this.port}/api/set-vehicle-conditions`;
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify(vehicleInfo),
      headers: { "Content-Type": "application/json" }
    });
    let data = await response.json();
    return data;
  }

  async createSegmentStatusAsync() {
    const url = `http://localhost:${this.port}/api/create-segment-status`;

    let response = await fetch(url, {
      method: "post"
    });
    let data = await response.json();
    return data;
  }

  async sendVehicleDataToBlockchain() {
    for (let i = 0; i < this.currentVehicles.length; i++) {
      //Updating address before sending the information to the Blockchain
      this.currentVehicles[i].updateAddress();
      console.log(
        `sending vehicle info: ${this.currentVehicles[i].address.substring(
          0,
          30
        )} in street: ${this.streetId}`
      );
      await this.setVehicleInfoAsync({ vehicleInfo: this.currentVehicles[i] });
    }

    console.log(`creating segment status for street: ${this.streetId}`);

    await this.createSegmentStatusAsync();

    return;
  }
}

module.exports = Street;

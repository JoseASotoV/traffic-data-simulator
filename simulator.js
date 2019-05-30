const Street = require("./street");
const Vehicle = require("./vehicle");
const fetch = require("node-fetch");

let street1 = new Street({ streetId: "street1" });
let street2 = new Street({ streetId: "street2" });
let street3 = new Street({ streetId: "street3" });
let street4 = new Street({ streetId: "street4" });
let street5 = new Street({ streetId: "street5" });
let street6 = new Street({ streetId: "street6" });
let street7 = new Street({ streetId: "street7" });
let street8 = new Street({ streetId: "street8" });
let street9 = new Street({ streetId: "street9" });
let street10 = new Street({ streetId: "street10" });
let street11 = new Street({ streetId: "street11" });
let street12 = new Street({ streetId: "street12" });
let street13 = new Street({ streetId: "street13" });
let street14 = new Street({ streetId: "street14" });
let street15 = new Street({ streetId: "street15" });
let street16 = new Street({ streetId: "street16" });
let street17 = new Street({ streetId: "street17" });
let street18 = new Street({ streetId: "street18" });
let street19 = new Street({ streetId: "street19" });
let street20 = new Street({ streetId: "street20" });
let street21 = new Street({ streetId: "street21" });
let street22 = new Street({ streetId: "street22" });
let street23 = new Street({ streetId: "street23" });
let street24 = new Street({ streetId: "street24" });
let street25 = new Street({ streetId: "street25" });
let street26 = new Street({ streetId: "street26" });
let street27 = new Street({ streetId: "street27" });
let street28 = new Street({ streetId: "street28" });
let street29 = new Street({ streetId: "street29" });
let street30 = new Street({ streetId: "street30" });
let street31 = new Street({ streetId: "street31" });
let street32 = new Street({ streetId: "street32" });
let street33 = new Street({ streetId: "street33" });
let street34 = new Street({ streetId: "street34" });
let street35 = new Street({ streetId: "street35" });
let street36 = new Street({ streetId: "street36" });
let street37 = new Street({ streetId: "street37" });
let street38 = new Street({ streetId: "street38" });
let street39 = new Street({ streetId: "street39" });
let street40 = new Street({ streetId: "street40" });
let street41 = new Street({ streetId: "street41" });
let street42 = new Street({ streetId: "street42" });

streets = [
  street1,
  street2,
  street3,
  street4,
  street5,
  street6,
  street7,
  street8,
  street9,
  street10,
  street11,
  street12,
  street13,
  street14,
  street15,
  street16,
  street17,
  street18,
  street19,
  street20,
  street21,
  street22,
  street23,
  street24,
  street25,
  street26,
  street27,
  street28,
  street29,
  street30,
  street31,
  street32,
  street33,
  street34,
  street35,
  street36,
  street37,
  street38,
  street39,
  street40,
  street41,
  street42
];

connectStreets();

let vehicles = createVehicles(20);
putVehiclesInStreets(vehicles, streets);

//let vehicle1 = new Vehicle();
//street1.addVehicle({ vehicle: vehicle1 });

start();

async function start() {
  for (let i = 0; i < 10; i++) {
    console.log("----------------------------------------");
    console.log(`block: ${i + 1}`);
    console.log("----------------------------------------");

    //moves vehicles From Current to Temp in other Street
    await moveVehicles();

    //change vehicle addresses so that they have different addresses every time they connect with a node
    //updateVehicleAddresses(vehicles);

    //sets Current position of vehicles
    //sends the vehicle information to the nodes
    // creates the segment status
    await setTempToCurrent();

    // console.log("Waiting for some time");

    console.log("Mining Data...");

    await mineData();

    printStreets();

    console.log("----------------------------------------");
  }
}

async function mineData() {
  let port = 3002;
  let url = `http://localhost:${port}/api/mine-data`;
  let url2 = `http://localhost:${port}/api/data-pool-map`;

  let response, data;

  do {
    response = await fetch(url2);
    data = await response.json();
  } while (Object.keys(data).length <= 0);

  response = await fetch(url);
  data = await response.json();
  return data;
}

function connectStreets() {
  street1.addStreet({ street: street2 });
  street1.addStreet({ street: street26 });

  street2.addStreet({ street: street3 });

  //street3.addStreet({ street: street1 });
  street3.addStreet({ street: street4 });
  street3.addStreet({ street: street28 });

  street4.addStreet({ street: street5 });

  street5.addStreet({ street: street6 });
  street5.addStreet({ street: street30 });

  street6.addStreet({ street: street7 });

  street7.addStreet({ street: street8 });
  street7.addStreet({ street: street32 });

  street8.addStreet({ street: street33 });

  street9.addStreet({ street: street25 });
  street9.addStreet({ street: street34 });

  street10.addStreet({ street: street9 });
  street10.addStreet({ street: street35 });

  street11.addStreet({ street: street10 });
  street11.addStreet({ street: street27 });

  street12.addStreet({ street: street11 });
  street12.addStreet({ street: street37 });

  street13.addStreet({ street: street12 });
  street13.addStreet({ street: street29 });

  street14.addStreet({ street: street13 });
  street14.addStreet({ street: street39 });

  street15.addStreet({ street: street14 });
  street15.addStreet({ street: street31 });

  street16.addStreet({ street: street15 });
  street16.addStreet({ street: street41 });

  street17.addStreet({ street: street18 });

  street18.addStreet({ street: street19 });
  street18.addStreet({ street: street36 });

  street19.addStreet({ street: street20 });

  street20.addStreet({ street: street21 });
  street20.addStreet({ street: street38 });

  street21.addStreet({ street: street22 });

  street22.addStreet({ street: street23 });
  street22.addStreet({ street: street40 });

  street23.addStreet({ street: street24 });

  street24.addStreet({ street: street42 });

  street25.addStreet({ street: street1 });

  street26.addStreet({ street: street9 });
  street26.addStreet({ street: street35 });

  street27.addStreet({ street: street3 });

  street28.addStreet({ street: street11 });
  street28.addStreet({ street: street37 });

  street29.addStreet({ street: street5 });

  street30.addStreet({ street: street13 });
  street30.addStreet({ street: street39 });

  street31.addStreet({ street: street7 });

  street32.addStreet({ street: street15 });
  street32.addStreet({ street: street41 });

  street33.addStreet({ street: street16 });

  street34.addStreet({ street: street17 });

  street35.addStreet({ street: street18 });

  street36.addStreet({ street: street10 });
  street36.addStreet({ street: street27 });

  street37.addStreet({ street: street20 });

  street38.addStreet({ street: street12 });
  street38.addStreet({ street: street29 });

  street39.addStreet({ street: street22 });

  street40.addStreet({ street: street14 });
  street40.addStreet({ street: street31 });

  street41.addStreet({ street: street24 });

  street42.addStreet({ street: street16 });
}

async function moveVehicles() {
  for (let i = 0; i < streets.length; i++) {
    const result = await streets[i].moveVehicles();
  }
  return;
}

async function setTempToCurrent() {
  for (let i = 0; i < streets.length; i++) {
    const result = await streets[i].setTempToCurrent();
  }
  return;
}

function printStreets() {
  streets.forEach(street => {
    if (
      street.currentVehicles !== undefined &&
      street.currentVehicles.length > 0
    ) {
      console.log(street.streetId);
    }
  });
}

function createVehicles(num) {
  let vehicles = [];

  for (let i = 0; i < num; i++) {
    vehicles.push(new Vehicle());
  }

  return vehicles;
}

function putVehiclesInStreets(vehicles, streets) {
  for (let i = 0; i < vehicles.length; i++) {
    let rand = Math.floor(Math.random() * streets.length);
    //let rand = Math.floor(Math.random() * 3);
    //let rand = 0;
    console.log("adding vehicle to street: ", rand + 1);
    streets[rand].addVehicle({ vehicle: vehicles[i] });
  }
  return;
}

function updateVehicleAddresses(vehicles) {
  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].updateAddress();
  }
  return;
}

// 35-3 Keys, values, entities, delete, seal, freeze

// propertis

const bottle = { color: 'yellow', hold: 'water', price: 50, isClean: true };


// get propertis keys  01
const key = Object.keys(bottle);
// console.log(key);
// ======================================= 

// get propertis value 02
const values = Object.values(bottle);
// console.log(values);
// =======================================

//  get propertis pairs 03
const pairs = Object.entries(bottle);
// console.log(pairs);
// =======================================


// can not delete propertis 04 

Object.seal(bottle);
// or
Object.freeze(bottle);
console.log(bottle);
// =======================================

// delete propertis 05
// if you want to delete should be hide Object.seal(bottle) && Object.freeze(bottle) otherwise delete did not work
delete bottle.color;
console.log(bottle);


// =======================================
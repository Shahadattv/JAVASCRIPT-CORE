//======================   modiul 30 && 31.1  ====================

// const variable  this is didn't change value

const name1 = 'omor sani';
// console.log(name);
// ====================================

// let variable this is any time can change his value
let name2 = 'omor sani';

name2 = 'mousomi';
// console.log(name2);
// ====================================

//   `  `  template string . this one use multiline string or  for daina mic value
const myNots = `  iam mojnu .${name2} i dont have any laily`;
// console.log(myNots);

// ====================================

// default parameter for function   &&& copy element from array bu ...
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;

}
const biggest = maxNumber();
// console.log(biggest);
// ====================================

// array function


// here x is a parameter 
const babu = x => x * x;
// here babu(5) . 5 ias parameter value
// console.log(babu(5));

// ====================================


//======================   modiul 31.2  ====================
//  Destructuring Object to extract values to variables

const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '01321348644', address: 'nowakhali', dress: 'silver' };

// const name3 = fish.name;
// const phone = fish.phone;
// const dress = fish.dress;
// const id = fish.id;

//  or
const { name, phone, dress, id, price } = fish;

// console.log(name, price, phone, dress, id);
// =================================================

// Array map to do one line loop magic
// map same for loop

// const numbers = [4, 6, 8, 10];
// const outPut = [];
// for (const number of numbers) {
//     const result = number * 2;
//     outPut.push(result)
// }
// console.log(outPut);

// or===============

// normal  by function
// const numbers = [4, 6, 8, 10];
// const outPut = [];

// // function  old
// // function doubleOld(number){
// //     return number*2;
// // }

// // arrow function
// const doubleIt = number => number * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
//     outPut.push(result)
// }
// console.log(outPut);


// or actual map
// const numbers = [4, 6, 8, 10];
// const outPut = numbers.map(babu => babu * 2);
// HERE BABU IS PARAMETER NAME
// console.log(outPut);

// forEach
const numbers = [4, 6, 8, 10];
// numbers.forEach(babu => console.log(babu));
// HERE BABU IS PARAMETER NAME

// FILTER
const numbers5 = [4, 6, 8, 10];
const outPut5 = numbers5.filter(babu => babu > 6);
// HERE BABU IS PARAMETER NAME
// console.log(outPut5);

// Find
const numbers6 = [4, 6, 8, 10];
const outPut6 = numbers6.filter(babu => babu == 6);
// HERE BABU IS PARAMETER NAME
console.log(outPut6);
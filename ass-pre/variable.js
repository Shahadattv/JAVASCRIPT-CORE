// variable =====01
var friend1 = ' babu, shadid, sogir';

// console.log(typeof(friend1));
// console.log(friend1);

// =========================

// variable =====02

var friend2 = 10;

// console.log(typeof(friend2));
// console.log(friend2);

// =========================
// variable =====03

var friend3 = 100;
var friend4 = 100;


// console.log(typeof(friend3 == friend4));
// console.log(friend3 == friend4);

// =========================
// variable = CONST=====04

const friend6 = 100;
const friend7 = 100;

// console.log(friend6, friend6);

// ==========================

// variable = LET=====04

let friend8 = 100;
friend8 = 'BABU';

// console.log(friend8);


// ==========================

// MATH========= ADD

// const num1 = 100;
// const num2 = 200;
// const num3 = 300;

// add

// const add = num1 + num2;
// console.log(add);

// minus
// const minus = num3 - num2;
// console.log(minus);

// multiply
// const multi = num1 * num3;
// console.log(multi);

// divition
// const div = num3 / num1;
// console.log(div);

// // precintise
// const per = 11 % 3;
// console.log(per);
// ======================================
const num4 = 100;
const num5 = 200;
const num6 = 300;
const num7 = 300;


// if equal
const big4 = num4 == num5;
// if not equal
// const big4 = num4 != num5;
// console.log(big4);

// if num4 is big >
// const big5 = num4 > num5;

// if num4 is big <
// const big5 = num4 < num5;
// console.log(big5);
// ==================================

// if two value 
// if ((num4 + num5 == num6) || num7) {
//     console.log("you are right");
// } else { console.log("you are wrong"); }


// ===================================

// var odd = 0;
// while (odd <= 19) {
//     var kk = odd / 2 != 0;
//     console.log(odd);
//     odd++
//     console.log(kk);

// worng

// }


// console.log()
// console.log()
// console.log()


// array==================

var names = ['babu', 'sogir', 'shahid', 'munna', 'arapat'];

names[4] = 'shahadat'
names.push("kkkkkkkkkkkkkkk")
names.pop()

// console.log(names);
// console.log(names.length);

// ===================================

// for loop
var names = ['babu', 'sogir', 'shahid', 'munna', 'arapat'];
for (const name of names) {
    // console.log(name);
}

// ===================================

//  three number multifly

function roni(num11, num12, num13) {
    const arap = num11 * num12 * num13;
    return arap;

}

const m = 10;
const n = 20;
const o = 30;
const total = roni(m, n, o);
// console.log(total);

// =================================


// object==================
var sobuj = {
    name: 'shahadat',
    id: 100,
    salary: 2000,
    name: 'sogir',
    id: 200,
    salary: 3000,
    name: 'shahid',
    id: 300,
    salary: 4000,
    name: 'arapat',
    id: 50,
    salary: 5000,
};

for (const name of sobuj) {
    console.log(name);
}
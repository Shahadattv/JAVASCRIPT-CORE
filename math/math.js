// math abslate

var number = -5;

var babu = Math.abs(number);
// console.log(babu);


// math.ceil

var number = 6.5;

var babu = Math.ceil(number);
// console.log(babu);

// math.floor

var number = 6.5;

var babu = Math.floor(number);
// console.log(babu);



// math.round

var number = 6.45;

var babu = Math.round(number);
// console.log(babu);


var number = 6.55;

var babu = Math.round(number);
// console.log(babu);

// math.random



var babu = Math.random() * 10;
// if you need use round its optional
var kk = Math.round(babu);
// console.log(kk);


// swap
var first = 1;
var second = 2;
// console.log(first, second);

var third = first;

first = second;
second = third;
// console.log(first, second);


// maximum variable
var babu = 100;
var sogir = 200;
var shahid = 300;
var big = Math.max(babu, sogir, shahid);

// console.log(big);

// maximum function

function munna(sogir, shahid) {
    if (sogir > shahid) {
        return sogir;
    } else { return shahid }
};
var kk = munna(100, 200);
// console.log(kk);



// array sum by variable
// var babu = [100, 200, 300, 400];

// var sum = 0;

// for (i = 0; i < babu.length; i++) {
//     var munna = babu[i];

//     sum = sum + munna;
// }
// console.log(sum);



// array sum by function

// function arap(arapat) {
//     var sum = 0;
//     for (i = 0; i < arapat.length; i++) {
//         var munna = arapat[i];

//         sum = sum + munna;
//     }
//     return sum;

// }
// var kk = [100, 200, 300, 400];
// var total = arap(kk);
// console.log(total);



// big element in the array

function arap(arapat) {
    var sum = 0;
    for (i = 0; i < arapat.length; i++) {
        var munna = arapat[i];

        if (sum > munna) {
            munna = sum
        }
    }
    return munna;

}
var kk = [100, 200, 300, 400];
var big = arap(kk);
// console.log(big);

// SMALL element in the array

// function small(number) {
//     let min = number[0];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;

// }
// var kk = [100, 200, 300, 400];
// var babu = small(kk);
// console.log(babu);


// REMOVE DUPLICATE VALUE ON ARRAY


var babu = ['babu', 'shahadat', 'sogir', 'shahid', 'babu', 'shahadat', 'sogir', 'shahid'];

function Remove(name) {

    var last = [];

    for (var i = 0; i < name.length; i++) {

        var element = name[i];
        // console.log(element);

        if (last.indexOf(element) == -1) {
            last.push(element);
        }

    }
    return last
}
var unique = Remove(babu);
// console.log(unique);



// array of object low price
const phones = [
    { name: 'nokia', price: 1000, strogr: 20 },
    { name: 'samsung', price: 2000, strogr: 20 },
    { name: 'oppo', price: 5000, strogr: 20 },
    { name: 'apple', price: 6000, strogr: 20 },
    { name: 'htc', price: 12000, strogr: 20 },
]

let lowprice = phones[0];

// for loop  new version
for (const phone of phones) {
    if (phone.price < lowprice) {
        lowprice = phone;
    }
}
// console.log(lowprice);


// total price

const products = [
    { name: 'nokia', price: 1000, strogr: 20 },
    { name: 'samsung', price: 2000, strogr: 20 },
    { name: 'oppo', price: 5000, strogr: 20 },
    { name: 'apple', price: 6000, strogr: 20 },
    { name: 'htc', price: 12000, strogr: 20 },
]

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);


// card total price

const card = [
    { name: 'nokia', price: 1000, strogr: 20, quantity: 1 },
    { name: 'samsung', price: 2000, strogr: 20, quantity: 2 },
    { name: 'oppo', price: 5000, strogr: 20, quantity: 3 },
    { name: 'apple', price: 6000, strogr: 20, quantity: 1 },
    { name: 'htc', price: 12000, strogr: 20, quantity: 3 },
]

let cardtotal = 0;

for (const product of card) {
    const producttotal = product.price * product.quantity;
    cardtotal = cardtotal + producttotal;
}
console.log(cardtotal);
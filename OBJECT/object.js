// 35-1 Module introduction Different way to Create Object

// using object literal
// 01 
const student = { name: 'sakib', job: 'cricket' };
// console.log(student);


// object constructor
// 02
const person = new Object();
// console.log(person);


// 03  create
const human = Object.create(student);
// console.log(human.name);

// 04 by class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
const babu = new People('shahadat', 29);
// console.log(babu);

// 05 by function

function man(name) {
    this.name = name;
};
const manus = new man('shahadat');
console.log(manus);

// ====================================
// ====================================
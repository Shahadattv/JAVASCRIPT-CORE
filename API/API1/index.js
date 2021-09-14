// Java Script Object Notation
// JSON

const user = { id: 11, name: "babu", job: "actor" };
// console.log(user);


//  call JSON USE STRINGIFY
const babu = JSON.stringify(user);
// console.log('json', babu);



//  call JSON USE parse
const munna = JSON.parse(babu);
console.log(munna);
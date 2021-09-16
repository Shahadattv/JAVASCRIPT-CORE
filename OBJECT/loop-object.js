// 35-4 Loop through an object using for in, for of, object entries
// Object.freeze(bottle)

const bottle = { color: 'yellow', hold: 'water', price: 50, isClean: true };

/*
for(let i=0: i<10; i++){};
=====
for(const num of number){};
use for ARRAY
===== 

for(const prop in bottle){};   
use for OBJECT
=====

*/

for (const prop in bottle) {
    // console.log(prop);
    // if need object  property value
    // console.log(prop, bottle[prop]);
};

// object entries
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);

};
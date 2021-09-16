// ========================================
// ========================================
//   this function need for my games
// ========================================
// ========================================


// 35-5 (advanced) Compare objects, referential integrity
// Compare objects


const first = { a: 1 };
const second = { a: 1 };

// 01 should only object position is same to same 
/*

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log("object are same");
} else {
    console.log('object are different');
};
*/

// =================================


// 02 by function compare object

function compareObject(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    for (const prop in object1) {
        if (object1[prop] !== object2[prop]) {
            return false;

        }

    }
    return true;

};

const first1 = { a: 1, b: 2, c: 3, };
const second1 = { c: 3, b: 2, a: 1 };
/*
// if see the object

console.log(JSON.stringify(first1));
console.log(JSON.stringify(second1));
*/
const finalCompare = compareObject(first1, second1);
console.log(finalCompare);
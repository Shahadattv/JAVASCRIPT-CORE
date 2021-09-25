// setTimeout asynchronous  time running only one time
// 37-6 setInterval and clearInterval with x++ and ++x


/*
console.log(' shahadat');

// by function 5000 is meli second
setTimeout(function() {
    console.log(' i doing coding');
}, 5000);

// by arrow function 4000 5000 is mili second
setTimeout(() => {
    console.log(' i doing coding java script');

}, 4000);

*/

// =============================
// =============================
// =============================

// setInterval asynchronous time running continue  didn't stop like  watch +++++++
// 37-6 setInterval and clearInterval with x++ and ++x
// condition use for stop steInterval otherwise this run continue

let second = 0;
const timeId = setInterval(() => {
    second++
    console.log(second);

    /*
    console.log(++second);
    start 1
    */

    /*
    console.log(second++);
    for start 0
    */

    if (second >= 10) {
        clearInterval(timeId);
    }
    // condition use for stop steInterval otherwise this run continue

}, 500);
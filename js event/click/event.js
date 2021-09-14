// button 3
function gbColorRed() {
    document.body.style.backgroundColor = 'red';
}



// button=4
const BLUE = document.getElementById('BG');

BLUE.onclick = babu;


function babu() {

    document.body.style.backgroundColor = 'blue';
}

// ==========================

// button=5
const GOLD = document.getElementById('BGKK');

GOLD.onclick = function() { document.body.style.backgroundColor = 'gold'; }

// ==========================

// button=6 
const kkk = document.getElementById('BGSS');

kkk.addEventListener('click', arap);

function arap() {
    document.body.style.backgroundColor = 'Violet';
}

// ==========================

// button=7

document.getElementById('sogir').addEventListener('click', function() {
    const p = document.getElementById('shahid');
    p.innerText = 'Are you know Shahadat';
})


// ==========================


// button=8 

document.getElementById('maru').addEventListener('click', function() {
    const s = document.getElementById('bithee');
    // for update button 7 p va
    const p = document.getElementById('shahid');
    p.innerText = s.value;
    s.value = '';


})


// ==========================


// comment
// part 01
document.getElementById('post').addEventListener('click', function() {
    // part 02
    const dd = document.getElementById('new-comment');
    // for update button 7 p va
    const ee = dd.value;
    // part 03 reate paragraph
    const p = document.createElement('p')
    p.innerText = dd.value;
    //    add comment
    const comment = document.getElementById('arapat');
    comment.appendChild(p);
    dd.value = "";


})


// <!-- delete event  modiul 24.6-->
document.getElementById('delete-btn').addEventListener('click', function() {

    document.getElementById('secret').style.display = 'none';
});

// focus INPUT FILD
document.getElementById('delete-confarm').addEventListener('focus', function() {

    document.body.style.backgroundColor = 'lightcoral';
});

// blur BG COLOR
document.getElementById('delete-confarm').addEventListener('blur', function() {
    document.body.style.backgroundColor = 'white';


});

// KEY DOWN
// document.getElementById('delete-confarm').addEventListener('keydown', function() {

//     // const deletebtn = document.getElementById('delete-btn'); 
//     // console.log("key down");

//     const deleteFild = document.getElementById('delete-confarm');
//     // console.log(deleteFild.value);

// });



// // KEY press
// document.getElementById('delete-confarm').addEventListener('keypress', function() {

//     const deleteFild = document.getElementById('delete-confarm');
//     console.log(deleteFild.value);

// });


// KEY up
document.getElementById('delete-confarm').addEventListener('keyup', function(event) {

    // const deleteFild = document.getElementById('delete-confarm');
    // console.log(deleteFild.value);
    const deletebtn = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deletebtn.removeAttribute('disabled');
    } else { deletebtn.setAttribute('disabled', true) }

});
// change
document.getElementById('delete-confarm').addEventListener('change', function() {

    const deleteFild = document.getElementById('delete-confarm');
    console.log(deleteFild.value);

});
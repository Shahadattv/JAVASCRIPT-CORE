//  CALL API URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    // .then(json => console.log(json))

// ======================================


//  use onclick button
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        // .then(json => console.log(json))
}
// ========================================

//  display data in HTML

function USER2() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const ul = document.getElementById('data');

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
        // console.log(user.name);
    }
}
// ============================================
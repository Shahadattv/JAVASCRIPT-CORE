//  LOAD FACK DATA  USER BY FUNCTION PARAMETER
function POST2() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
        // displayPost(data) is a function & parameter come from out side
}
// displayPost(data) is a function & parameter send inside the post
function displayPost(data) {
    const postContainer = document.getElementById('BABU');

    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post')
            // post is style class from html style
        div.innerHTML = `
        <h3>${post.title} </h3>
        <p> ${post.body}</p>

        `;
        postContainer.appendChild(div);


    }
}
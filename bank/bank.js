// const babu = document.getElementById('h1');
// babu.style.color = "red";

// submit button eventhandeler catch====01

document.getElementById('login-submit').addEventListener('click', function() {


    // catch email field & catch email field value ===============02
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // catch password field & catch password field value ===============03

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // email field value  & password field value  compaier ===========04

    if (userEmail == "shahadat" && userPassword == "babu") {
        // IF MATCHING OPEN NEW SITE
        window.location.href = '/babu.html';

    } else {
        console.log("we are sorry");
    }
});
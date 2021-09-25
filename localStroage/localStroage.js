// console.log('connected')
// 38-7 Dynamically set and read from local, session storage

// if you have any old data in localStorage that data display in UI
// this function call at last function
const displayLocalStorageCartData = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }

};


//   ===================

//   ========== start from hear==========================

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    // if (!name) is empty input value  function didn't work
    if (!name) {
        return;
    }
    //add display UI 
    displayProduct(name);

    //add to localStorage 
    addProductToCart(name);



    nameField.value = "";

};
//add display UI 


const displayProduct = name => {
    const ul = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);

};
// create card in localStorage
const getCart = () => {
    // check localStorage cart
    const cart = localStorage.getItem('cart');

    // if have cart
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        // if dont have cart and create empty object
        cartObj = {};
    }
    return cartObj;

};
//add to localStorage 
const addProductToCart = name => {
    const cart = getCart();
    // if any property have duplicate this count ++
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
    console.log(cartStringify);

};
// clear data
const placeOrder = () => {
    // clear data in display UI
    document.getElementById('product').textContent = '';

    // clear data in localStorage cart
    localStorage.removeItem("cart");
};


// ====================call from top function===========================
displayLocalStorageCartData();
// =======================


// if you need clear data  should clear from browser localStorage data
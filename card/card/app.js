// function total(isIncrease) {

//     const inputTotal = document.getElementById('case-case-inputField');
//     let totalQuantity = inputTotal.value;


//     if (isIncrease == true) {
//         totalQuantity = parseInt(totalQuantity) + 1;

//     } else if (totalQuantity > 0) {
//         totalQuantity = parseInt(totalQuantity) - 1;

//     }
//   //value change so call let
//     inputTotal.value = totalQuantity;

//     // add
//     const total = document.getElementById('case-total-Text');
//     total.innerText = totalQuantity * 59

// }

// document.getElementById('case-plus-Button').addEventListener('click', function() {
//     total(true);
// })

// document.getElementById('case-minus-Button').addEventListener('click', function() {
//     total(false);
// })



// =============================================
// for phone
function updateProductNumber(product, price, isIncrease) {
    // product is parameter 
    // price is parameter 

    const productInput = document.getElementById(product + '-inputField');
    // product+ is for catch element id r first name & '-inputField id name is same
    let productNumber = productInput.value;


    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;

    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    // value change so call let
    productInput.value = productNumber;

    // add
    const productTotal = document.getElementById(product + '-total-Text');
    // product+ is for catch element id r first name & '-inputField id name is same

    // total.innerText = totalQuantity * 59;
    // 59 will catch by parameter price
    productTotal.innerText = productNumber * price;
    //  total & tax part
    calculateTotal();


}
// total & tax part
function getInputValue(product) {
    const productInput = document.getElementById(product + '-inputField');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//  total & tax part
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //  update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// party phone

document.getElementById('phone-plus-Button').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
    //  'phone' catch by product+ 
    //  '1219' catch by price 
})

document.getElementById('phone-minus-Button').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
    //  'phone' catch by product+ 
    //  '1219' catch by price 
})


//   part case
document.getElementById('case-plus-Button').addEventListener('click', function() {
    updateProductNumber('case', 59, true);
    //  'case' catch by product+ 
    //  '59' catch by price 

})

document.getElementById('case-minus-Button').addEventListener('click', function() {
    updateProductNumber('case', 59, false);

    //  'case' catch by product+ 
    //  '59' catch by price 
})
/* ================================
    Project Name : simple shopping cart
    author : Safikur Rahman
    makes : Vanilla JavaScript
    Date : 03/10/2022
   ================================
*/

// Get Phone Plus and Minus Button With getElementById
const phonePlusBtn = document.getElementById('phone-plus');
const phoneMinusBtn = document.getElementById('phone-minus');
// console.log(phonePlusBtn);
// console.log(phoneMinusBtn);

// Update Phone Price 
function updateIphone11PriceIncreaseDecrease(product, isIncrease) {
    // Get phone input field
    const phoneInput = document.getElementById(product + '-input');
    // console.log(phoneInput);
    let phoneInputValue = phoneInput.value;
    // console.log(phoneInputValue);
    if (isIncrease) {
        phoneInputValue = parseInt(phoneInput.value) + 1;
    } else if (phoneInputValue > 0) {
        phoneInputValue = parseInt(phoneInput.value) - 1;
    };
    phoneInput.value = phoneInputValue;
    // Get Phone Current Price 
    const currentPhonePrice = document.querySelector('#phone-price');
    const phonePriceUpdate = phoneInputValue * 1219;
    currentPhonePrice.innerText = phonePriceUpdate;
}
// Handle Phone Plus Event Button Function
phonePlusBtn.addEventListener('click', function () {
    updateIphone11PriceIncreaseDecrease('phone', true);
    updateSubtotal();

});
// Handle Phone Minus Button Function
phoneMinusBtn.addEventListener('click', function () {
    updateIphone11PriceIncreaseDecrease('phone', false);
    updateSubtotal();
});


// Handle Phone Case 
// Get Case Plus and Minus Button With getElementById
const casePlusBtn = document.getElementById('case-plus');
const caseMinusBtn = document.getElementById('case-minus');
// console.log(casePlusBtn)
// console.log(caseMinusBtn)

// Update Case Price
function updateCasePriceIncreaseDecrease(product, isIncrease) {
    // Get Case input field
    const caseInput = document.getElementById(product + '-input');
    // console.log(caseInput);
    let caseInputValue = parseInt(caseInput.value);
    // console.log(caseInputValue);
    if (isIncrease) {
        caseInputValue = caseInputValue + 1;
    } else if (caseInputValue > 0) {
        caseInputValue = caseInputValue - 1;
    };
    caseInput.value = caseInputValue;

    // Get The Case Current Price
    const currentCasePrice = document.getElementById('case-price');
    // console.log(currentCasePrice);
    currentCasePrice.innerText = caseInputValue * 59;
}
// Handle Case Plus Event Button Function
casePlusBtn.addEventListener('click', function () {
    updateCasePriceIncreaseDecrease('case', true);
    updateSubtotal();
});
// Handle Case Minus Event Button Function
caseMinusBtn.addEventListener('click', function () {
    updateCasePriceIncreaseDecrease('case', false)
    updateSubtotal()
});

// Handle Subtotal Tax And Total Price 
function updateSubtotal() {
    const phoneInput = document.getElementById('phone-input');
    const caseInput = document.getElementById('case-input');
    // console.log(phoneInput);
    // console.log(caseInput);

    const phoneInputValue = parseInt(phoneInput.value) * 1219;
    const caseInputValue = parseInt(caseInput.value) * 59;
    const phoneCaseTotalPrice = phoneInputValue + caseInputValue;

    // Get SubTotal
    const subTotal = document.getElementById('sub-total').innerText = phoneCaseTotalPrice;
    const tax = subTotal / 100 * 10;
    document.querySelector('#tax-amount').innerText = tax;
    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice;

}
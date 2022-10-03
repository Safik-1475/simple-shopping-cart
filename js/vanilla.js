/* ================================
    Project Name : simple shopping cart
    author : Safikur Rahman
    makes : Vanilla JavaScript
    Date : 03/10/2022
   ================================
*/

// Get HTML Plus and Minus Button With getElementById
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
    updateIphone11PriceIncreaseDecrease('phone', true)

});

// Handle Phone Minus Button Function
phoneMinusBtn.addEventListener('click', function () {
    updateIphone11PriceIncreaseDecrease('phone', false)

});
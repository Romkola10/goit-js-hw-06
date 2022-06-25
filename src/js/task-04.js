const minusBtn = document.querySelector("button[data-action='decrement']");
const plusBtn = document.querySelector("button[data-action='increment']");
let counterValue = 0;

function minusBtnClick() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

function plusBtnClick() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

minusBtn.addEventListener('click', minusBtnClick);
plusBtn.addEventListener('click', plusBtnClick);
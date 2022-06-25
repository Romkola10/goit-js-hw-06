const inputForm = document.querySelector("#validation-input")
const lengthOfInput = document.querySelector('input[data-length]');

inputForm.addEventListener("blur", () => {
    if (lengthOfInput.value.length === Number(lengthOfInput.dataset.length)) {
        inputForm.classList.add("valid")
        inputForm.classList.remove("invalid")
    }
    else {
        inputForm.classList.add("invalid")
    }
})
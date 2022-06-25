const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}

function names(event) {
    const userInput = event.currentTarget.value;

    if (userInput === '') {
        refs.output.textContent = "Anonymous";
    }
    else {
        refs.output.textContent = userInput;
    }
}

refs.input.addEventListener("input", names);
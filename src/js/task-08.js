const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;

    const mail = formElem.email.value;
    const password = formElem.password.value;

    if (mail === '') {
        return alert("Введіть пошту!")
    }
    else if(password === '') {
        return alert("Введіть пароль!")
    }
    console.log({ mail, password })
    event.currentTarget.reset();
}

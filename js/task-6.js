const inputRef = document.querySelector('#validation-input');
const truLength = Number(inputRef.getAttribute('data-length'));
inputRef.addEventListener('blur', checkInputValue);

function checkInputValue(event) {
    if (event.target.value.length === truLength) {
        inputRef.setAttribute('class', 'valid');
    } else if (event.target.value.length === 0) {
        inputRef.classList.remove('valid', 'invalid');
    } else {
        inputRef.setAttribute('class', 'invalid');
    }
}

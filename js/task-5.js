const inputRef = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

inputRef.addEventListener('input', inputChange);

function inputChange(event) {
    const inputName = event.target.value;
    name.textContent = inputName ? inputName : 'незнакомец';
    console.log(event.target.value.length);
}

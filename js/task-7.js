const inputRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputRef.addEventListener('input', chengeSizeText);
console.dir(text);
function chengeSizeText(event) {
    text.style.fontSize = `${event.target.value}px`;
}

const items = document.querySelector('#categories');

console.log(`В списке ${items.children.length} категории.`);

document.querySelectorAll('.item').forEach((item) =>
    console.log(`Категория: ${item.querySelector('h2').textContent}
    Количество элементов: ${item.querySelectorAll('li').length}`)
);

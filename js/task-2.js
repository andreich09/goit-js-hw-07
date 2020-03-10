const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];

const addIngredients = (ingredient) => {
    const listRef = document.createElement('li');
    listRef.textContent = ingredient;
    return listRef;
};
const ingredientsCards = ingredients.map((ingredient) => addIngredients(ingredient));

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(...ingredientsCards);

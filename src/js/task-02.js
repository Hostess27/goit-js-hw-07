const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");
const nodesList = [];

ingredients.forEach((ingredientItem) => {
    const li = document.createElement("li");
    li.textContent = ingredientItem;
    nodesList.push(li);
});

ingredientsListRef.append(...nodesList);

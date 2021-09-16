const allCategories = document.querySelector("#categories");
console.log(`В списке ${allCategories.children.length} категории`);

const subCategory = document.querySelectorAll(".item");

subCategory.forEach((elem) => {
    const h2 = elem.querySelector("h2");
    const ul = elem.querySelector("ul");
    console.log(`Категория: ${h2.textContent}`);
    console.log(`Количество элементов: ${ul.children.length}`);
});


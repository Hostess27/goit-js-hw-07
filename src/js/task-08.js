const InputValue = () => (amountDiv = inputEl.value | 0);

const createBoxes = (amount) => {
    const sizeDiv = 30;
    const delta = 10;
    const divBoxes = new Array(amount).fill(0).map((elem, index) => {
        elem = document.createElement("div");
        elem.style.backgroundColor = `#${Math.random()
            .toString(16)
            .slice(3, 9)}`;
        elem.style.width = sizeDiv + delta * index + "px";
        elem.style.height = elem.style.width;
        return elem;
    });
    divBoxesEl.append(...divBoxes);
};

const destroyBoxes = () => {
    divBoxesEl.innerHTML = "";
};

const divBoxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input[type = 'number']");

let amountDiv = 0;
inputEl.addEventListener("blur", InputValue.bind(inputEl));

const boxPlus = document.querySelector('button[data-action="render"]');
const boxMinus = document.querySelector('button[data-action="destroy"]');

boxPlus.addEventListener("click", () => createBoxes(amountDiv));
boxMinus.addEventListener("click", destroyBoxes);

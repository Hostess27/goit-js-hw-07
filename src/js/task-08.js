const INITIAL = 30;
const controls = document.querySelector('[id="controls"]');
const input = controls.querySelector("input");
const boxPlus = controls.querySelector('button[data-action="render"]');
const boxMinus = controls.querySelector('button[data-action="destroy"]');
const divBoxesEl = document.querySelector('[id="boxes"]');

const itemSize = {
    value: INITIAL,
    increment() {
        this.value += 10;
    },
    reset() {
        this.value = INITIAL;
    },
};

const createBoxes = (amount) => {
    const arrayOfDiv = [];
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${itemSize.value}px`;
        div.style.height = `${itemSize.value}px`;
        div.style.backgroundColor = randomColor();
        itemSize.increment();
        arrayOfDiv.push(div);
    }

    divBoxesEl.append(...arrayOfDiv);
};

const callback = () => {
    createBoxes(Math.round(input.value));
};
const destroyBoxes = () => {
    divBoxesEl.innerHTML = "";
    itemSize.reset();
};
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};
boxPlus.addEventListener("click", callback);
boxMinus.addEventListener("click", destroyBoxes);

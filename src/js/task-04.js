const refs = {
    counterValue: document.querySelector("#value"),
    buttonDown: document.querySelector('button[data-action="decrement"]'),
    buttonUp: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.buttonDown.addEventListener("click", () => {
    counterValue -= 1;
    refs.counterValue.textContent = counterValue;
});

refs.buttonUp.addEventListener("click", () => {
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
});

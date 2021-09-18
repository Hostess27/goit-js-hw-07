const refs = {
    inputField: document.querySelector("#validation-input"),
};
const validClassName = "valid";
const invalidClassName = "invalid";
const inputValidLength = Number(refs.inputField.dataset.length);

refs.inputField.addEventListener("blur", (event) => {
    if (event.target.value.length >= inputValidLength) {
        refs.inputField.classList.remove(invalidClassName);
        refs.inputField.classList.add(validClassName);
    } else {
        refs.inputField.classList.remove(validClassName);
        refs.inputField.classList.add(invalidClassName);
    }
});

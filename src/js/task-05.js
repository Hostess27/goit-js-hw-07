const refs = {
    inputText: document.querySelector("#name-input"),
    userName: document.querySelector("#name-output"),
};

refs.inputText.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (refs.inputText.value === "") {
        refs.userName.innerHTML = `незнакомец`;
    } else {
        refs.userName.textContent = event.currentTarget.value;
    }
}
refs.userName.addEventListener("input", onInputRemove);

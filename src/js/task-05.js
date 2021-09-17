const refs = {
    inputText: document.querySelector("#name-input"),
    userName: document.querySelector("#name-output"),
}


refs.inputText.addEventListener("input", onInputChange)


function onInputChange(event){
console.log(event.currentTarget.value)
 refs.userName.textContent = event.currentTarget.value;
}

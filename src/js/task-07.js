const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");

slider.addEventListener("input", () => {
    const size = event.target.value;
    text.style.fontSize = size + "px";
});

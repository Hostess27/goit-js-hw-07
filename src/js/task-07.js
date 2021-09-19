const slider = document.getElementById('font-size-control');

slider.addEventListener('input', () => {
    const size = event.target.value;
    text.style.fontSize = size + "px";
});
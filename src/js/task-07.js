const slider = document.getElementById('font-size-control');

slider.addEventListener('input', () => {
    const size = slider.value;
    text.style.fontSize = size + "px";
});
const body = document.body;
const darkLightToggle = document.getElementById('darkModeToggle');
console.log(darkLightToggle)

darkLightToggle.addEventListener("change", () => {
     body.classList.toggle('dark-mode', this.checked);
});
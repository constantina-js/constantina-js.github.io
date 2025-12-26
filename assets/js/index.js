document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkLightToggle = document.getElementById('darkModeToggle');

    console.log(darkLightToggle); // now it will log the element

    darkLightToggle.addEventListener("change", function () {
        body.classList.toggle('dark-mode', this.checked);
    });
});
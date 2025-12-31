document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkLightToggle = document.getElementById('darkModeToggle');

    if (darkLightToggle) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            body.setAttribute("data-theme", "dark");
            darkLightToggle.checked = true;
        } else if (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.setAttribute("data-theme", "dark");
            darkLightToggle.checked = true;
        }

        darkLightToggle.addEventListener("change", () => {
            if (darkLightToggle.checked) {
                body.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                body.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            }
        });
    
    }

});
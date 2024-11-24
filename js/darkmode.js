document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Status speichern
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
    });

    // Status laden
    const savedDarkMode = localStorage.getItem("dark-mode") === "true";
    if (savedDarkMode) {
        document.body.classList.add("dark-mode");
    }
});

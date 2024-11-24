document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Klick-Event für den Button
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Status im Local Storage speichern
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
    });

    // Darkmode-Status beim Laden anwenden
    const savedDarkMode = localStorage.getItem("dark-mode") === "true";
    if (savedDarkMode) {
        document.body.classList.add("dark-mode");
    }
});

const switchButton = document.getElementById("switch-toggle");
const body = document.body;

// Check if the user's preference is stored in localStorage
const checkDarkMode = localStorage.getItem("darkMode");

// If dark mode was previously selected, apply it
if (checkDarkMode === "true") {
  body.classList.add('dark-mode');
}

switchButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');

    // Update the preference in localStorage based on the current state
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
});

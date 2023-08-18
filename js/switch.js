const switchButton = document.getElementById("switch-toggle");
const body = document.body;

switchButton.addEventListener("click", () => {
  body.classList.toggle('dark-mode');
});

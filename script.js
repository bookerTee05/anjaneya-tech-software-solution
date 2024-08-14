const nav_menu = document.querySelectorAll(".nav-menu");
const button_open = document.querySelector(".button_open");
const button_close = document.querySelector(".button_close");

function toggleButtons() {
  button_open.classList.toggle("active");
  button_close.classList.toggle("active");
}

button_open.addEventListener("click", () => {
  toggleButtons();
  nav_menu[0].classList.toggle("active");
});

button_close.addEventListener("click", () => {
  toggleButtons();
  nav_menu[0].classList.toggle("active");
});

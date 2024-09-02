// Menu

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

// Fade
const elementsToFadeInUpOnScroll = document.querySelectorAll("section");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}
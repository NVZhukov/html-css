const menuDropDown = document.querySelector(".dropdown__menu");
const burger = document.querySelector(".burger-menu");

function toggleMenu() {
  menuDropDown.classList.toggle("hidden-menu");
}

burger.addEventListener("click", toggleMenu);

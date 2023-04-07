// open menubar

let menuIcon = document.querySelector(".nav-menu .fa-solid,.fas");
let menu = document.querySelector(".nav-link-list");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

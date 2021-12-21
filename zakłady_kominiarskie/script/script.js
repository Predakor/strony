let menu = document.querySelector("nav");
let button = document.querySelector(".x-button");
let active = false;
button.addEventListener("click", toogleMenu);
function toogleMenu() {
  menu.classList.toggle("hidden");
  button.innerText = active ? "X" : "<";
  active ^= true;
}

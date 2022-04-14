const burgerMenuButton = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger-menu i");
const navBar = document.querySelector("nav");

burgerMenuButton.addEventListener("click", toggleBurgerMenu);

function toggleBurgerMenu() {
  if (navBar.style.transform === "translateY(-150%)") {
    navBar.style.transform = "translateY(0)";
    burgerIcon.classList.remove("fa-caret-down");
    burgerIcon.classList.add("fa-caret-up");
  } else {
    navBar.style.transform = "translateY(-150%)";
    burgerIcon.classList.remove("fa-caret-up");
    burgerIcon.classList.add("fa-caret-down");
  }
}

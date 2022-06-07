/* ---------- Navigation menu ---------- */

import { openMenu } from "./functionality/menu.js";
import { closeMenu } from "./functionality/menu.js";

const openMenuButton = document.querySelector(".open");
const closeMenuButton = document.querySelector(".close");
const navBar = document.querySelector("nav");

openMenuButton.addEventListener("click", () => {
  openMenu(navBar, openMenuButton, closeMenuButton);
});

closeMenuButton.addEventListener("click", () => {
  closeMenu(navBar, closeMenuButton, openMenuButton);
});

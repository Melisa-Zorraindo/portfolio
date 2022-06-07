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

/* ----------- Light mode switcher ---------- */

const switcherOn = document.querySelector(".fa-toggle-on");
const switcherOff = document.querySelector(".fa-toggle-off");
const body = document.querySelector("body");

switcherOn.addEventListener("click", () => {
  switcherOff.classList.remove("hidden");
  switcherOn.classList.add("hidden");
  body.classList.add("light");
});

switcherOff.addEventListener("click", () => {
  switcherOff.classList.add("hidden");
  switcherOn.classList.remove("hidden");
  body.classList.remove("light");
});

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

/* ---------- Dark / Light themes ---------- */

import { enableLightTheme } from "./functionality/themes.js";
import { disableLightTheme } from "./functionality/themes.js";

const toggleStatesBtn = document.querySelector("#switch-btn");
const switchOff = document.querySelector(".state-one");
const switchOn = document.querySelector(".state-two");

//save preference in local storage
let lightTheme = localStorage.getItem("lightTheme");
if (lightTheme === "enabled") {
  enableLightTheme(switchOn, switchOff);
}

//set themes
toggleStatesBtn.addEventListener("click", () => {
  lightTheme = localStorage.getItem("lightTheme");
  if (lightTheme !== "enabled") {
    enableLightTheme(switchOn, switchOff);
  } else {
    disableLightTheme(switchOn, switchOff);
  }
});

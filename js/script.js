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

const toggleStatesBtn = document.querySelector("#switch-btn");
const switchOff = document.querySelector(".state-one");
const switchOn = document.querySelector(".state-two");

function toggleStates() {
  switchOn.classList.toggle("on");
  switchOff.classList.toggle("off");
}

let lightTheme = localStorage.getItem("lightTheme");
if (lightTheme === "enabled") {
  enableLightTheme();
}

function enableLightTheme() {
  document.body.classList.add("light");
  localStorage.setItem("lightTheme", "enabled");
}

function disableLightTheme() {
  document.body.classList.remove("light");
  localStorage.removeItem("lightTheme");
}

toggleStatesBtn.addEventListener("click", toggleStates);
toggleStatesBtn.addEventListener("click", () => {
  lightTheme = localStorage.getItem("lightTheme");
  if (lightTheme !== "enabled") {
    enableLightTheme();
  } else {
    disableLightTheme();
  }
});

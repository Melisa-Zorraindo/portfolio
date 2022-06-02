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

/* ---------- Modal popups ---------- */
/* import { openModal } from "./functionality/modalpops.js";
import { closeModal } from "./functionality/modalpops.js";

const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const contact = document.querySelector("#contact");
const contactInfo = document.querySelector("#contact-info");
const contactClose = document.querySelector("#contact-close-btn");
const socials = document.querySelector("#socials");
const modalSocials = document.querySelector("#modal-socials");
const socialsClose = document.querySelectorAll("#socials-close-btn");

console.log(contactClose);

socials.addEventListener(
  "click",
  openModal(navBar, body, overlay, modalSocials)
);
contact.addEventListener(
  "click",
  openModal(navBar, body, overlay, contactInfo)
);

socialsClose.addEventListener(
  "click",
  closeModal(navBar, body, overlay, modalSocials)
);

contactClose.addEventListener(
  "click",
  closeModal(navBar, body, overlay, contactInfo)
); */

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
const socials = document.querySelector("#socials");
const modalSocials = document.querySelector("#modal-socials");
const closeModalsBtns = document.querySelectorAll(".close-modal");

socials.addEventListener("click", () => {
  openModal(navBar, body, overlay, modalSocials);
  //in case user clicks on other modal when previous still on display
  contactInfo.classList.remove("modal-popup");
  //display active link
  socials.classList.add("active");
  //remove active link from the other modal
  if (contact.classList.contains("active")) {
    contact.classList.remove("active");
  }
});

contact.addEventListener("click", () => {
  openModal(navBar, body, overlay, contactInfo);
  //in case user clicks on other modal when previous still on display
  modalSocials.classList.remove("modal-popup");
  //display active link
  contact.classList.add("active");
  //remove active link from the other modal
  if (socials.classList.contains("active")) {
    socials.classList.remove("active");
  }
});

closeModalsBtns.forEach((button) => {
  let buttonContainer = button.closest("div");
  button.addEventListener("click", () => {
    closeModal(navBar, body, overlay, buttonContainer);
    if (buttonContainer.classList.contains("socials-box")) {
      socials.classList.remove("active");
    } else if (buttonContainer.classList.contains("contact-box")) {
      contact.classList.remove("active");
    }
  });
}); */

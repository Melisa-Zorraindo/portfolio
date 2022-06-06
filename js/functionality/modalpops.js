/* export function openModal(navigation, body, overlay, modal) {
  //hide navigation on mobile when modals visible
  //remove active class from home link
  const browserWidth = window.innerWidth;
  let homelink = document.querySelector("#home-mobile");
  if (browserWidth <= 650) {
    navigation.style.transform = "translateY(-150%)";
    homelink.classList.remove("active");
  } else if (browserWidth > 650) {
    homelink = document.querySelector("#home-desktop");
    homelink.classList.remove("active");
  }

  //apply modal styles
  body.style.overflow = "hidden";
  overlay.classList.remove("hidden");
  modal.classList.add("modal-popup");
}

export function closeModal(navigation, body, overlay, modal) {
  //display navigation on mobile again
  //remove active class from home link
  const browserWidth = window.innerWidth;
  let homelink = document.querySelector("#home-mobile");
  if (browserWidth <= 650) {
    navigation.style.transform = "translateY(0)";
    homelink.classList.add("active");
  } else if (browserWidth > 650) {
    homelink = document.querySelector("#home-desktop");
    homelink.classList.add("active");
  }

  //remove modal styles
  body.style.overflow = "auto";
  overlay.classList.add("hidden");
  modal.classList.remove("modal-popup");
}
 */

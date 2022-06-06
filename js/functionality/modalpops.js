export function openModal(navigation, body, overlay, modal) {
  //hide navigation on mobile when modals visible
  const browserWidth = window.innerWidth;
  if (browserWidth <= 650) {
    navigation.style.transform = "translateY(-150%)";
  }

  //apply modal styles
  body.style.overflow = "hidden";
  overlay.classList.remove("hidden");
  modal.classList.add("modal-popup");
}

export function closeModal(navigation, body, overlay, modal) {
  //display navigation on mobile again
  const browserWidth = window.innerWidth;
  if (browserWidth <= 650) {
    navigation.style.transform = "translateY(0)";
  }

  //remove modal styles
  body.style.overflow = "auto";
  overlay.classList.add("hidden");
  modal.classList.remove("modal-popup");
}

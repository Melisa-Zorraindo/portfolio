export function openModal(navigation, body, overlay, modal) {
  navigation.style.transform = "translateY(-150%)";
  body.style.overflow = "hidden";
  overlay.classList.remove("hidden");
  modal.classList.add("modal-popup");
}

export function closeModal(navigation, body, overlay, modal) {
  navigation.style.transform = "translateY(0)";
  body.style.overflow = "auto";
  overlay.classList.add("hidden");
  modal.classList.remove("modal-popup");
}

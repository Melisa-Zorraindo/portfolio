export function openMenu(navBar, openMenuButton, closeMenuButton) {
  navBar.style.transform = "translateY(0)";
  openMenuButton.classList.add("hidden");
  closeMenuButton.classList.remove("hidden");
}

export function closeMenu(navBar, closeMenuButton, openMenuButton) {
  navBar.style.transform = "translateY(-150%)";
  closeMenuButton.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
}

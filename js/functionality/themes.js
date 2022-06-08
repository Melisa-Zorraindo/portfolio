export function enableLightTheme(buttonOn, buttonOff) {
  buttonOn.classList.add("on");
  buttonOff.classList.add("off");
  document.body.classList.add("light");
  localStorage.setItem("lightTheme", "enabled");
}

export function disableLightTheme(buttonOn, buttonOff) {
  buttonOn.classList.remove("on");
  buttonOff.classList.remove("off");
  document.body.classList.remove("light");
  localStorage.removeItem("lightTheme");
}

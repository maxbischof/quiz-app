export function get(selector) {
  return document.querySelector(selector)
}

export function getAll(selector) {
  return document.querySelectorAll(selector)
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
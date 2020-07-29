export function get(selector, target = document) {
  return target.querySelector(selector)
}

export function getAll(selector, target = document) {
  return target.querySelectorAll(selector)
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
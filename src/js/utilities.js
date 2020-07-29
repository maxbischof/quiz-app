export function get(selector, target = document) {
  return target.querySelector(selector)
}

export function getAll(selector, target = document) {
  return target.querySelectorAll(selector)
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createElement({
  type = 'div', 
  className = '', 
  target = document.body
}) {
  const el = document.createElement(type)
  el.className = className
  target.appendChild(el)
  return {el}
}
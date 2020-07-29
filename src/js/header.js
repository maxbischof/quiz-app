import {createElement, capitalizeFirstLetter} from './utilities'

export function header (title) {
  const {el} = createElement({type: 'header'})
  el.innerHTML = `<h1>${capitalizeFirstLetter(title)}</h1>`
}

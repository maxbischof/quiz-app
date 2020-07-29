import {createElement} from './utilities'

export function header (title) {
  const {el} = createElement({type: 'header'})
  el.innerHTML = `<h1>${title}</h1>`
}

import { card } from './card/card'
import { createElement } from '../utilities'

export function cards(cardsData) {
  const {el} = createElement({type: 'section'})
  
  cardsData.forEach((cardData) => {
    el.appendChild(card(cardData))
  })

  return el
}
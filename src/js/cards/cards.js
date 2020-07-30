import { card } from './card/card'
import { createElement } from '../utilities'

export function cards(cardsData, invertBookmark) {
  const {el} = createElement({type: 'section'})
  
  cardsData.forEach((cardData, index) => {
    el.appendChild(card(cardData, index, invertBookmark))
  })

  return el
}
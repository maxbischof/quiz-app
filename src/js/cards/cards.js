import { card } from './card/card'
import { createElement } from '../utilities'

export function cards(cardsData, invertBookmark) {
  const {el} = createElement({type: 'section'})
  
  console.log(cardsData)
  cardsData.forEach((cardData, index) => {
    el.appendChild(card(cardData, index, invertBookmark))
  })

  return el
}
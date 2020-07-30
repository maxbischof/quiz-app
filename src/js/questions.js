import {createElement} from './utilities'
import {cards} from './cards/cards'

export function questions (cardsData) {
  const {el} = createElement({type: 'main'})
  el.appendChild(cards(cardsData, el))
}
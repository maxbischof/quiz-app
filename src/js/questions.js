import {createElement} from './utilities'
import {cards} from './cards/cards'
import { invertBookmark } from '.'

export function questions (cardsData, invertBookmark) {
  const {el} = createElement({type: 'main'})
  el.appendChild(cards(cardsData, invertBookmark))
}

import {createElement} from './utilities'
import {addCards} from './cards/cards'

export function questions (cards) {
  const {el} = createElement({type: 'main'})
  addCards(cards, el)
}
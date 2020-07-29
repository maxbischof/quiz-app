import {createElement} from './utilities'
import {addCards} from './card'
import { get } from './utilities'
import arrowImg from '../../img/arrow.png'
import bookmarkButton from '../../img/bookmark.png'

export function questions (cards) {
  const {el} = createElement({type: 'main'})
  addCards(cards, el)
}
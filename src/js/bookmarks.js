import {addCards} from './card'
import {createElement} from './utilities'

export function bookmarks (cards) {
  const {el} = createElement({type: 'main'})
  const bookmarkedCards = cards.filter(card => card.bookmark)
  addCards(bookmarkedCards, el)
}

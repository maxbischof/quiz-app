import {cards} from './cards/cards'
import {createElement} from './utilities'

export function bookmarks (cardsData, invertBookmark) {
  const {el} = createElement({type: 'main'})
  const bookmarkedCards = cardsData.filter(card => card.bookmark)
  el.appendChild(cards(bookmarkedCards, invertBookmark))
}

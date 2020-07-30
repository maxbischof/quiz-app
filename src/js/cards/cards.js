import { addCard } from './card/card'

export function addCards(cards, target) {
  cards.forEach((card) => {
    addCard(card, target)
  })
}
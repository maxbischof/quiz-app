import { card } from './card/card'

export function addCards(cardsData, target) {
  cardsData.forEach((cardData) => {
    target.appendChild(card(cardData))
  })
}
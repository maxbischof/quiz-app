import { get } from '../../utilities'
import { getCards } from '../../index'
import Bookmark from './bookmark/bookmark'
import Answer from './answer/answer'
import Tags from './tags/tags'

export function card(cardData) {
  const card = document.createElement('section')
  const unsplashURL = 'https://source.unsplash.com/random' + '/' + Math.floor(Math.random() * 100)

  card.className = 'card mar-bot-30'
  card.appendChild(Bookmark())

  card.insertAdjacentHTML('beforeend', `
    <img
      class="card__img"
      src=${unsplashURL}
      alt="question_picture"
    />`)

  const cardText = document.createElement('div')
  cardText.className = 'card__txt pad-20'
  cardText.insertAdjacentHTML('beforeend', `<h2 class="card__h2">${cardData.question}</h2>`)

  cardText.appendChild(Answer(cardData.answer))
  cardText.appendChild(Tags(cardData.tags))
    
  card.appendChild(cardText)

  bookmarkCard(card, cardData)

  return card
}


export function showNewestCard (target) {
  const cards = getCards()
  addCard(cards[cards.length-1], target)
}

function bookmarkCard (cardSection, card) {
  const bookmarkButton = get('[data-js=\'bookmark__button\']', cardSection)
  if (card.bookmark === true) {
    bookmarkButton.classList.add('card__bookmark--active')
  } 
    
  bookmarkButton.addEventListener('click', () => {
    card.bookmark = !card.bookmark
    bookmarkButton.classList.toggle('card__bookmark--active')
  })
}
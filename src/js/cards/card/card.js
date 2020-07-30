import { get } from '../../utilities'
import { getCards } from '../../index'
import Bookmark from './bookmark/bookmark'
import Answer from './answer/answer'
import Tags from './tags/tags'

export function card(cardData, index, invertBookmark) {
  const card = document.createElement('section')
  const unsplashURL = 'https://source.unsplash.com/random' + '/' + Math.floor(Math.random() * 100)
  
  card.className = 'card mar-bot-30'
  card.appendChild(Bookmark(index, card.bookmark, invertBookmark))

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

  return card
}
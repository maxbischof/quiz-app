import { get } from './utilities'
import arrowImg from '../../img/arrow.png'
import bookmarkButton from '../../img/bookmark.png'

const cards = [
  {
    question: "What's the biggest animal in the world?",
    answer: 'The blue whale',
    tags: ['animals', 'nature', 'world record'],
  },
  {
    question: 'Which country is brie cheese originally from?',
    answer: 'France',
    tags: ['food', 'culture'],
  },
]

const pageQuestions = get('[data-js=\'questions\']')

export function card (target = pageQuestions) {
  target.innerHTML = ''
  if (target === pageQuestions) {
    addCards(cards, target)
  } else {
    addCards(cards.filter(card => card.bookmark), target)
  }
}

export function addCards(cards, target) {
  cards.forEach((card) => {
    addCard(card, target)
  })
}

function bookmarkCard (cardSection, card) {
  const bookmarkButton = cardSection.querySelector('[data-js=\'bookmark__button\']')
  if (card.bookmark === true) {
    bookmarkButton.classList.add('card__bookmark--active')
  } 
    
  bookmarkButton.addEventListener('click', () => {
    card.bookmark = !card.bookmark
    bookmarkButton.classList.toggle('card__bookmark--active')
  })
}

function addCard(card, target) {
  let cardSection = document.createElement('section')

  const unsplashURL = 'https://source.unsplash.com/random' + '/' + Math.floor(Math.random() * 100)

  cardSection.innerHTML = /*html*/ `
    <svg class="card__bookmark" data-js="bookmark__button" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512.019 512.019" style="enable-background:new 0 0 512.019 512.019;" xml:space="preserve">
    <path d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448
    c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781
    c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z"/>
    </svg>

    <img
      class="card__img"
      src=${unsplashURL}
      alt="question_picture"
    />

    <div class="card__txt pad-20">
      <h2 class="card__h2">
        ${card.question}
      </h2>

      <hr>
      <button class="card__button answer-button">
        Show answer 
        <img src=${arrowImg} alt="arrow">
      </button>

      <p class="card__p display-none answer-text">
        ${card.answer}
      </p>
      <hr>
      
      <h3>Tags</h3>
      <div class='tags'>
      </div>
    </div>
  `
  cardSection.className = 'card mar-bot-30'
  target.appendChild(cardSection)

  addTags(card.tags, cardSection)
  showAnswer(cardSection)
  bookmarkCard(cardSection, card)
}

function showAnswer(target) {
  const buttonAnswer = target.querySelector('.answer-button')
  const answer = target.querySelector('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.remove('display-none')
    buttonAnswer.classList.add('display-none')
  })
}

function addTags(tags, target) {
  const tagsSection = target.querySelector('.tags')
  tags?.forEach((tag) => {
    const span = document.createElement('span')
    span.className = 'card__tag pad-5'
    span.textContent = tag
    tagsSection.appendChild(span)
  })
}

export function saveCard (question, answer, tags) {
  cards.push({question, answer, tags})
}

export function showNewestCard (target) {
  addCard(cards[cards.length-1], target)
}

export default card

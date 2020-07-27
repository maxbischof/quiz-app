import {get} from './utilities'
import arrowImg from '../../img/arrow.png'

const cards = [
  {
    question: 'What\'s the biggest animal in the world?',
    answer: 'The blue whale',
    tags: ['animals', 'nature', 'world record']
  },
  {
    question: 'Which country is brie cheese originally from?',
    answer: 'France',
    tags: ['food', 'culture']
  }
]

function card () {
  const pageQuestions = get('.page__questions')
  addCards(cards, pageQuestions)
}

export function addCards (cards, target) {
  cards.forEach(card => {
    const cardSection = addCard(card, target)
    addTags(card.tags, cardSection)
    showAnswer(cardSection)
  })
}

function addCard (card, target) {
  let cardSection = document.createElement('section')
    
  cardSection.innerHTML = /*html*/ `
    <img
      class="card__img"
      src="https://source.unsplash.com/random"
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

  return cardSection
}

function showAnswer (target) {
  const buttonAnswer = target.querySelector('.answer-button')
  const answer = target.querySelector('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.remove('display-none')
    buttonAnswer.classList.add('display-none')
  })
}

function addTags (tags, target) {
  const tagsSection = target.querySelector('.tags')
    tags.forEach(tag => {
      const span = document.createElement('span')
      span.className = 'card__tag pad-5'
      span.textContent = tag
      tagsSection.appendChild(span)
    })
}

export default card
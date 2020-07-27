import {get} from './utilities'

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
  const buttonAnswer = get('.answer-button')
  const answer = get('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.remove('display-none')
    buttonAnswer.classList.add('display-none')
  })

  const pageQuestions = get('.page__questions')

  cards.forEach(card => {
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
        <button class="card__button answer-button">Show answer <img src="img/arrow.png" alt="arrow"></button>

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
    pageQuestions.appendChild(cardSection)

    addTags(card.tags, cardSection)
  })
}



function addTags (tags, section) {
  const tagsSection = section.querySelector('.tags')
    tags.forEach(tag => {
      const span = document.createElement('span')
      span.className = 'card__tag pad-5'
      span.textContent = tag
      tagsSection.appendChild(span)
    })
}

export default card
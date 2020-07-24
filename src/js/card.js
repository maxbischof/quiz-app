import {get} from './utilities'

function card () {
  const buttonAnswer = get('.answer-button')
  const answer = get('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.remove('display-none')
    buttonAnswer.classList.add('display-none')
  })
}

export default card
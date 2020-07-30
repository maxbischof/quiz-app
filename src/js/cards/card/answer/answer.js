import { createElement, get } from '../../../utilities'
import arrowImg from '../../../../../img/arrow.png'

function answer (answerText) {
  const {el} = createElement({type: 'div'})
  
  el.innerHTML = `
    <hr>
    <button class="card__button answer-button">
      Show answer 
      <img src=${arrowImg} alt="arrow">
    </button>

    <p class="card__p display-none answer-text">
      ${answerText}
    </p>
    <hr>`

  const answer = get('.answer-text', el)
  const answerButton = get('.answer-button', el)
    
  el.addEventListener('click', () => {
    answer.classList.toggle('display-none')
    answerButton.classList.toggle('display-none')
  })
    
  return el
}

export default answer
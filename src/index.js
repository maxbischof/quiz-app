const buttonAnswer = document.querySelector('.answer-button')
const answer = document.querySelector('.answer-text')

buttonAnswer.addEventListener('click', () => {
  answer.classList.remove('display-none')
  buttonAnswer.classList.add('display-none')
  console.log('click')
})


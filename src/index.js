const button = document.querySelector('.answer-button')
const answer = document.querySelector('.answer-text')

button.addEventListener('click', () => {
  answer.classList.remove('display-none')
  button.classList.add('display-none')
  console.log('click')
})

const toggleAnswer = () => {
  const button = document.querySelector('.answer-button')
  const answer = document.querySelector('.answer-text')

button.addEventListener('click', () => {
  answer.classList.remove('display-none')
  console.log('click')
})
}

document.addEventListener("DOMContentLoaded", toggleAnswer);


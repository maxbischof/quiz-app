import { get } from './utilities'
import { saveCard, showNewestCard } from './card'

function form() {
  const form = get("[data-js='form']")

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    saveCard(question.value, answer.value, tags.value.split(','))
    
    const pageCreate = get("[data-js='create']")
    form.classList.add('display-none')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'New card successfully created'
    h2.classList.add('feedback__text')
    pageCreate.appendChild(h2)

    showNewestCard(pageCreate)
    
    h2.scrollIntoView()
  })
}

export default form
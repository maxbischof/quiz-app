import { get } from './utilities'
import { saveCard } from './card'

function form() {
  const form = get("[data-js='form']")

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    saveCard(question.value, answer.value, tags.value.split(','))
  })
}

export default form
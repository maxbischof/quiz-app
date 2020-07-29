import { get } from './utilities'
import { showNewestCard } from './card'
import {createElement} from './utilities'
import { saveCard } from './index'

export function form () {
  const {el} = createElement({type: 'main'})
  el.innerHTML = /*html*/`<form data-js="form" action="/" class="pad-20">
  <h2>Add question</h2>
  <textarea
    class="create__input--big"
    type="text"
    id="question"
    name="question"
  ></textarea>

  <h2>Add answer</h2>
  <textarea
    class="create__input--big"
    type="text"
    id="answer"
    name="answer"
  ></textarea>
  <h2>Add tags</h2>
  <textarea
    class="create__input--small mar-bot-30"
    type="text"
    id="tags"
    name="tags"
  ></textarea>
  <span class="help__text">Seperate tags by comma</span>

  <input class="button" type="submit" value="Save question" />
</form>`

  const form = get("[data-js='form']")

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    saveCard(question.value, answer.value, tags.value.split(','))
    
    form.classList.add('display-none')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'New card successfully created'
    h2.classList.add('feedback__text')
    el.appendChild(h2)

    showNewestCard(el)
    
    h2.scrollIntoView()
  })
}
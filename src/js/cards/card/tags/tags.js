import { createElement } from '../../../utilities'

function tags (tagsData) {
  const {el} = createElement({type: 'div'})
  el.className = 'tags'
  
  el.insertAdjacentHTML('beforeend', '<h3>Tags</h3>')

  tagsData?.forEach((tag) => {
    const span = document.createElement('span')
    span.className = 'card__tag pad-5'
    span.textContent = tag
    el.appendChild(span)
  })

  return el
}

export default tags


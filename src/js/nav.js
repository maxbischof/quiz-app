import { get, getAll, capitalizeFirstLetter } from './utilities'
import { card } from './card'

function nav() {
  const buttons = getAll('.footer__icon')
  let currentPage = get('[data-js=\'questions\']')

  buttons.forEach(button => {
    const pageID = button.dataset.js
    const nextPage = get('[data-js=\'' + pageID + '\']')
    
    button.addEventListener('click', () => {
      currentPage = changePage(nextPage, currentPage)
      setTitle(capitalizeFirstLetter(pageID))
      setActiveFooterIcon(pageID, buttons)
      if(pageID === 'questions'){
        card()
      }
    })
  })
}

function changePage(nextPage, currentPage) {
  if (nextPage != currentPage) {
    nextPage.classList.remove('display-none')
    currentPage.classList.add('display-none')
    return nextPage
  }
}

function setTitle(title) {
  document.querySelector('h1').innerHTML = title
}

function setActiveFooterIcon (activeClass, buttons) {
  buttons.forEach(button => {
    button.classList.toggle('footer__icon--active', button.dataset.js===activeClass)
  })
}

export default nav

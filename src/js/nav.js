import { get, getAll } from './utilities'

function nav() {
  const buttons = getAll('.footer__icon')
  let currentPage = get('[data-js=\'questions\']')

  buttons.forEach(button => {
    const pageID = button.dataset.js
    const nextPage = get('[data-js=\'' + pageID + '\']')
    
    button.addEventListener('click', () => {
      currentPage = changePage(nextPage, currentPage)
      setTitle(capitalizeFirstLetter(pageID))
      setActiveFooterIcon('footer__icon--' + pageID)
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

function setActiveFooterIcon (activeClass) {
  const icons = getAll('.footer__icon')
  icons.forEach(icon => {
    icon.classList.toggle('footer__icon--active', icon.classList.contains(activeClass))
  })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default nav

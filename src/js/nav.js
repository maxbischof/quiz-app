import { get, getAll } from './utilities'

function nav() {
  const buttonQuestions = get('.footer__icon--questions')
  const buttonBookmarks = get('.footer__icon--bookmarks')
  const buttonCreate = get('.footer__icon--create')
  const buttonProfile = get('.footer__icon--profile')

  const pageQuestions = get('.page__questions')
  const pageBookmarks = get('.page__bookmarks')
  const pageCreate = get('.page__create')
  const pageProfile = get('.page__profile')

  let currentPage = pageQuestions

  buttonQuestions.addEventListener('click', () => {
    currentPage = changePage(pageQuestions, currentPage)
    setTitle('Questions')
    setActiveFooterIcon('footer__icon--questions')
  })

  buttonBookmarks.addEventListener('click', () => {
    currentPage = changePage(pageBookmarks, currentPage)
    setTitle('Bookmarks')
    setActiveFooterIcon('footer__icon--bookmarks')
  })

  buttonCreate.addEventListener('click', () => {
    currentPage = changePage(pageCreate, currentPage)
    setTitle('Create question')
    setActiveFooterIcon('footer__icon--create')
  })

  buttonProfile.addEventListener('click', () => {
    currentPage = changePage(pageProfile, currentPage)
    setTitle('Profile')
    setActiveFooterIcon('footer__icon--profile')
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

export default nav

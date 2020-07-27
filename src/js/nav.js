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
    changePage(pageQuestions)
    setTitle('Questions')
    setActiveFooterIcon('footer__icon--questions')
  })

  buttonBookmarks.addEventListener('click', () => {
    changePage(pageBookmarks)
    setTitle('Bookmarks')
    setActiveFooterIcon('footer__icon--bookmarks')
  })

  buttonCreate.addEventListener('click', () => {
    changePage(pageCreate)
    setTitle('Create question')
    setActiveFooterIcon('footer__icon--create')
  })

  buttonProfile.addEventListener('click', () => {
    changePage(pageProfile)
    setTitle('Profile')
    setActiveFooterIcon('footer__icon--profile')
  })

  function changePage(page) {
    if (page != currentPage) {
      page.classList.remove('display-none')
      currentPage.classList.add('display-none')
      currentPage = page
    }
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

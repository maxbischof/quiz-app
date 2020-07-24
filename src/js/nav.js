import {get} from './utilities'

function nav () {
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
  })

  buttonBookmarks.addEventListener('click', () => {
    changePage(pageBookmarks)
    setTitle('Bookmarks')
  })

  buttonCreate.addEventListener('click', () => {
    changePage(pageCreate)
    setTitle('Create question')
  })

  buttonProfile.addEventListener('click', () => {
    changePage(pageProfile)
    setTitle('Profile')
  })

  function setTitle (title) {
    document.querySelector('h1').innerHTML = title
  }

  function changePage (page) {
    if (page!=currentPage) {
      page.classList.remove('display-none')
      currentPage.classList.add('display-none')
      currentPage = page
    }
  }
}

export default nav
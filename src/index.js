const buttonAnswer = get('.answer-button')
const answer = get('.answer-text')

buttonAnswer.addEventListener('click', () => {
  answer.classList.remove('display-none')
  buttonAnswer.classList.add('display-none')
})

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
})

buttonBookmarks.addEventListener('click', () => {
  changePage(pageBookmarks)
})

buttonCreate.addEventListener('click', () => {
  changePage(pageCreate)
})

buttonProfile.addEventListener('click', () => {
  changePage(pageProfile)
})

function changePage (page) {
    page.classList.remove('display-none')
    currentPage.classList.add('display-none')
    currentPage = page
}

function get (selector) {
  document.querySelector(selector)
}
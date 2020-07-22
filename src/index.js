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
  pageQuestions.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageQuestions
})

buttonBookmarks.addEventListener('click', () => {
  pageBookmarks.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageBookmarks
})

buttonCreate.addEventListener('click', () => {
  pageCreate.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageCreate
})

buttonProfile.addEventListener('click', () => {
  pageProfile.classList.remove('display-none')
  currentPage.classList.add('display-none')
  currentPage = pageProfile
})

function get (selector) {
  document.querySelector(selector)
}
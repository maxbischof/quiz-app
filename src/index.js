const buttonAnswer = document.querySelector('.answer-button')
const answer = document.querySelector('.answer-text')

buttonAnswer.addEventListener('click', () => {
  answer.classList.remove('display-none')
  buttonAnswer.classList.add('display-none')
  console.log('click')
})

const buttonQuestions = document.querySelector('.footer__icon--questions')
const buttonBookmarks = document.querySelector('.footer__icon--bookmarks')
const buttonCreate = document.querySelector('.footer__icon--create')
const buttonProfile = document.querySelector('.footer__icon--profile')

const pageQuestions = document.querySelector('.page__questions')
const pageBookmarks = document.querySelector('.page__bookmarks')
const pageCreate = document.querySelector('.page__create')
const pageProfile = document.querySelector('.page__profile')
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
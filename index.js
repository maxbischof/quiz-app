"use strict";

var buttonAnswer = get('.answer-button');
var answer = get('.answer-text');
buttonAnswer.addEventListener('click', function () {
  answer.classList.remove('display-none');
  buttonAnswer.classList.add('display-none');
});
var buttonQuestions = get('.footer__icon--questions');
var buttonBookmarks = get('.footer__icon--bookmarks');
var buttonCreate = get('.footer__icon--create');
var buttonProfile = get('.footer__icon--profile');
var pageQuestions = get('.page__questions');
var pageBookmarks = get('.page__bookmarks');
var pageCreate = get('.page__create');
var pageProfile = get('.page__profile');
var currentPage = pageQuestions;
buttonQuestions.addEventListener('click', function () {
  changePage(pageQuestions);
  setTitle('Questions');
});
buttonBookmarks.addEventListener('click', function () {
  changePage(pageBookmarks);
  setTitle('Bookmarks');
});
buttonCreate.addEventListener('click', function () {
  changePage(pageCreate);
  setTitle('Create question');
});
buttonProfile.addEventListener('click', function () {
  changePage(pageProfile);
  setTitle('Profile');
});

function setTitle(title) {
  document.querySelector('h1').innerHTML = title;
}

function changePage(page) {
  page.classList.remove('display-none');
  currentPage.classList.add('display-none');
  currentPage = page;
}

function get(selector) {
  return document.querySelector(selector);
}
"use strict";

var buttonAnswer = document.querySelector('.answer-button');
var answer = document.querySelector('.answer-text');
buttonAnswer.addEventListener('click', function () {
  answer.classList.remove('display-none');
  buttonAnswer.classList.add('display-none');
  console.log('click');
});
var buttonQuestions = document.querySelector('.footer__icon--questions');
var buttonBookmarks = document.querySelector('.footer__icon--bookmarks');
var buttonCreate = document.querySelector('.footer__icon--create');
var buttonProfile = document.querySelector('.footer__icon--profile');
var pageQuestions = document.querySelector('.page__questions');
var pageBookmarks = document.querySelector('.page__bookmarks');
var pageCreate = document.querySelector('.page__create');
var pageProfile = document.querySelector('.page__profile');
var currentPage = pageQuestions;
buttonQuestions.addEventListener('click', function () {
  pageQuestions.classList.remove('display-none');
  currentPage.classList.add('display-none');
  currentPage = pageQuestions;
});
buttonBookmarks.addEventListener('click', function () {
  pageBookmarks.classList.remove('display-none');
  currentPage.classList.add('display-none');
  currentPage = pageBookmarks;
});
buttonCreate.addEventListener('click', function () {
  pageCreate.classList.remove('display-none');
  currentPage.classList.add('display-none');
  currentPage = pageCreate;
});
buttonProfile.addEventListener('click', function () {
  pageProfile.classList.remove('display-none');
  currentPage.classList.add('display-none');
  currentPage = pageProfile;
});
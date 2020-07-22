"use strict";

var buttonAnswer = document.querySelector('.answer-button');
var answer = document.querySelector('.answer-text');
buttonAnswer.addEventListener('click', function () {
  answer.classList.remove('display-none');
  buttonAnswer.classList.add('display-none');
  console.log('click');
});
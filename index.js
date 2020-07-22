"use strict";

var button = document.querySelector('.answer-button');
var answer = document.querySelector('.answer-text');
button.addEventListener('click', function () {
  answer.classList.remove('display-none');
  button.classList.add('display-none');
  console.log('click');
});
'use strict';

const checkBtn = document.querySelector('.check');
const scoreEle = document.querySelector('.score');
const messageEle = document.querySelector('.message');
const highScoreEle = document.querySelector('.highScore');
const numberEle = document.querySelector(".number");
const bodyEl = document.querySelector('body');
// scoreEle.textContent = localStorage.getItem("score");

let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = getLocalStorage("score");
let lcScore = getLocalStorage("high-score");

function guess() {
  checkBtn.addEventListener('click', guessNumber);
  scoreEle.textContent = getLocalStorage("score");
  highScoreEle.textContent = lcScore !== null
    ? getLocalStorage("high-score") : 0;
}
function displayMessage(message) {
  messageEle.innerText = message;
}
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
function getLocalStorage(key) {
  return localStorage.getItem(key)
}
function guessNumber() {
  let inputValue =
    Number(document.querySelector('.guess').value);

  if (!inputValue) {
    displayMessage('숫자를 넣으세요!!');
  } else if (secNumber === inputValue) {
    let highScore = localStorage.getItem("high-score");
    displayMessage('맞추었어요. 🏆');
    setLocalStorage("high-score", score > highScore ? score : highScore);
    setBackground('#60b238', '30rem');
    numberEle.textContent = secNumber;
    highScoreEle.textContent = getLocalStorage("high-score");
  } else {
    setMessageAndScore(inputValue, 1);
  }
}

function setBackground(color, width) {
  bodyEl.style.backgroundColor = color;
  numberEle.style.width = width;
}

function setMessageAndScore(inputValue, point) {
  if (score > 1) {
    displayMessage(secNumber < inputValue ? 'too high' : 'too low');
    score -= point;
    setLocalStorage("score", score)
    scoreEle.innerText = score;
  } else {
    displayMessage('게임에서 졌어요!!!')
    scoreEle.textContent = 0;
  }
}

function again() {
  localStorage.setItem("score", "20");
  score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;
  messageEle.textContent = 'Start guessing...';
  scoreEle.textContent = score;
  numberEle.textContent = "?";
  document.querySelector('.guess').value = "";
  console.log(secNumber, typeof secNumber);
  setBackground('#222', '15rem');
  // location.reload();
}

guess();

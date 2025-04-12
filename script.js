'use strict';
// PROJECT 1

const randomNum = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

/*************************
FUNCTIONS
*************************/
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const backgroundTransition = color => {
  document.querySelector('body').style.backgroundColor = color;
};
const widthChange = width => {
  document.querySelector('.number').style.width = width;
};
const scoreManipulation = score => {
  document.querySelector('.score').textContent = score;
};

const clickHandler = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    randomNum.textContent = secretNumber;
    displayMessage('✔️ Correct Number');
    backgroundTransition('#60b347');
    widthChange('30rem');

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🔥 You Lost the Game');
      scoreManipulation(0);
    }
  }
};

const reloadHandler = () => {
  backgroundTransition('#222');
  widthChange('15rem');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  randomNum.textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  scoreManipulation(score);
  guess = document.querySelector('.guess').value = '';
};

/*************************
EVENT LISTENER (CHECK)
*************************/
const buttonClick = document.querySelector('.check');
buttonClick.addEventListener('click', clickHandler);

/*************************
EVENT LISTENER 2 (RELOAD)
*************************/
const reload = document.querySelector('.again');
reload.addEventListener("click", reloadHandler)
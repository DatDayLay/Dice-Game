"use strict";
const subDiv1 = document.querySelector(".sub-div1");
const subDiv2 = document.querySelector(".sub-div2");
const currentPlayer0 = document.getElementById("lilscore-0");
const currentPlayer1 = document.getElementById("lilscore-1");
const btnRoll = document.querySelector(".btn2");
const dice = document.getElementById("#dice");
const one = document.querySelector(".dice-1");
const two = document.querySelector(".dice-2");
const three = document.querySelector(".dice-3");
const four = document.querySelector(".dice-4");
const five = document.querySelector(".dice-5");
const six = document.querySelector(".dice-6");
const bigscore0 = document.getElementById("bigscore-0");
const bigscore1 = document.getElementById("bigscore-1");
const lilscore1 = document.querySelector(".lilscore1");
const lilscore2 = document.querySelector(".lilscore2");
const hold = document.querySelector(".btn3");
const newGame = document.querySelector(".btn1");

const scores = [0, 0];
let activePlayer = 0;

bigscore0.textContent = 0;
bigscore1.textContent = 0;

let currentScore = 0;
// const roll = Math.trunc(Math.random() * 6) + 1;

const switchPlayer = function () {
  lilscore1.textContent = currentScore;
  lilscore2.textContent = currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  subDiv1.classList.toggle("player-active");
  subDiv2.classList.toggle("player-active");
};

let playing = true;
const activeRoll = btnRoll.addEventListener("click", function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    // score1el.textContent = roll;
    if (roll <= 6) {
      if (roll === 1) {
        one.classList.remove("dice");
        two.classList.add("dice2");
        three.classList.add("dice3");
        four.classList.add("dice4");
        five.classList.add("dice5");
        six.classList.add("dice6");
        currentScore = 0;
        lilscore1.textContent = currentScore;
        lilscore2.textContent = currentScore;

        activePlayer = activePlayer === 0 ? 1 : 0;
        // if (activePlayer === 0) {
        //   activePlayer = activePlayer;
        // } else {
        //   activePlayer = 1;
        //   activePlayer = activePlayer;
        // }
        subDiv1.classList.toggle("player-active");
        subDiv2.classList.toggle("player-active");
      }
      if (roll === 2) {
        two.classList.remove("dice2");
        one.classList.add("dice");

        three.classList.add("dice3");
        four.classList.add("dice4");
        five.classList.add("dice5");
        six.classList.add("dice6");
        currentScore += roll;
        // lilscore1.textContent = currentScore;
        document.getElementById(`lilscore-${activePlayer}`).textContent =
          currentScore;
      }
      if (roll === 3) {
        three.classList.remove("dice3");
        two.classList.add("dice2");
        one.classList.add("dice");

        four.classList.add("dice4");
        five.classList.add("dice5");
        six.classList.add("dice6");
        currentScore += roll;
        // lilscore1.textContent = currentScore;
        document.getElementById(`lilscore-${activePlayer}`).textContent =
          currentScore;
      }
      if (roll === 4) {
        four.classList.remove("dice4");
        three.classList.add("dice3");
        two.classList.add("dice2");
        one.classList.add("dice");

        five.classList.add("dice5");
        six.classList.add("dice6");
        currentScore += roll;
        // lilscore1.textContent = currentScore;
        document.getElementById(`lilscore-${activePlayer}`).textContent =
          currentScore;
      }
      if (roll === 5) {
        five.classList.remove("dice5");
        three.classList.add("dice3");
        two.classList.add("dice2");
        one.classList.add("dice");

        four.classList.add("dice4");

        six.classList.add("dice6");
        currentScore += roll;
        // lilscore1.textContent = currentScore;
        document.getElementById(`lilscore-${activePlayer}`).textContent =
          currentScore;
      }
      if (roll === 6) {
        six.classList.remove("dice6");
        three.classList.add("dice3");
        two.classList.add("dice2");
        one.classList.add("dice");

        four.classList.add("dice4");
        five.classList.add("dice5");
        currentScore += roll;
        // lilscore1.textContent = currentScore;
        document.getElementById(`lilscore-${activePlayer}`).textContent =
          currentScore;
      }
      // current.textContent = roll;
      // currentAdd = current.textContent = roll;

      // current.textContent = currentAdd + roll;
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    //things that will happen
    //1. add current score to big score of active player
    //2. check if big score of active player is equal to or above 100
    //3. if it is active player wins
    //4. if it's not then switch to next player

    scores[activePlayer] += currentScore;

    document.getElementById(`bigscore-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.subdiv-${activePlayer}`)
        .classList.add("player-winner");

      document
        .querySelector(`.subdiv-${activePlayer}`)
        .classList.remove("player-active");
      six.classList.add("dice6");
      three.classList.add("dice3");
      two.classList.add("dice2");
      one.classList.add("dice");

      four.classList.add("dice4");
      five.classList.add("dice5");
    } else {
      switchPlayer();
    }
    //after clicking hold and switching players the current score of active player reverts to 0
    currentScore = 0;
    lilscore1.textContent = currentScore;
    lilscore2.textContent = currentScore;
  }
});

newGame.addEventListener("click", function () {
  currentScore = 0;
  bigscore0.textContent = 0;
  bigscore1.textContent = 0;
  lilscore1.textContent = 0;
  lilscore2.textContent = 0;
  subDiv1.classList.remove("player-winner");
  subDiv2.classList.remove("player-winner");
  subDiv1.classList.add("player-active");
  subDiv2.classList.remove("player-active");
  playing = true;
  bigscore0.textContent = 0;
  bigscore1.textContent = 0;
  // six.classList.add("dice6");
  // three.classList.add("dice3");
  // two.classList.add("dice2");
  // one.classList.add("dice");

  // four.classList.add("dice4");
  // five.classList.add("dice5");
});

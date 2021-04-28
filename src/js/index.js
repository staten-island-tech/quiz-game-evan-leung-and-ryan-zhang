console.log("Activated");
import { questions } from "./questions.js";
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const scoreboardID = document.getElementById("scoreboard");

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");

startbutton.addEventListener("click", startGame);
let quizScore = 0;

function startGame() {
  startbutton.classList.add("remove");
  container.classList.remove("remove");
}

buttons.addEventListener("click", scoreKeeper, nextQuestion);

function scoreKeeper(e) {
  if ((e.target.parent = correctAnswers)) {
    quizScore++;
    scoreboardID.innerText = quizScore;
  } else {
    quizScore;
    scoreboardID.innerText = quizScore;
  }
}

function nextQuestion(theQuestion, answer1, answer2, answer3, answer4) {
  htmlButtons = document.querySelector(".container");
  console.log(htmlButtons);
}

console.log("Activated");
import { questions } from "./questions.js";
const startbutton = document.getElementById("startbtn");
const container = document.getElementById("container");
const question = document.getElementById("question");
const scoreboardID = document.getElementById("scoreboard");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

const buttons = [button1, button2, button3, button4];

let quizScore = 0;
let questionNumber = -1;
let totalQuestions = 4;

startbutton.addEventListener("click", startGame);

function startGame() {
  startbutton.classList.add("remove");
  container.classList.remove("remove");
  nextQuestion();
}

function changeQuestion(qNumber) {
  endGame();
  question.innerText = questions[qNumber].theQuestion;
  button1.innerText = questions[qNumber].answer1;
  button2.innerText = questions[qNumber].answer2;
  button3.innerText = questions[qNumber].answer3;
  button4.innerText = questions[qNumber].answer4;
  buttons.forEach(function (button) {
    button.addEventListener("click", scoreKeeper);
  });
}

function scoreKeeper() {
  console.log(event.target.value); // Trouble Shooting
  console.log(questions[questionNumber].answer); // Trouble Shooting
  if (event.target.value == questions[questionNumber].answer) {
    quizScore++;
    scoreboardID.innerText = quizScore;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  questionNumber++;
  console.log(questionNumber); // Trouble Shooting
  changeQuestion(questionNumber);
}

function endGame() {
  if (questionNumber >= 4) {
    container.classList.add("remove");
  } else {
  }
}

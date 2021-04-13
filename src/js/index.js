console.log("Activated");

const questionID = document.getElementById("question");
const buttonsID = document.getElementById("buttons");
const startButton = document.getElementById("startbtn");
const container1ID = document.getElementById("container1");
let questionIndex, questionOrder;

startButton.addEventListener("click", gameStart);

function gameStart() {
  questionIndex = 0;
  questionOrder = questions.sort();
  startButton.classList.add("remove");
  container1ID.classList.remove("remove");
  displayNextQuestion;
}

function displayQuestion(question) {
  questionID.innerText = question.question;
}

function displayNextQuestion() {
  displayQuestion(questionOrder[questionIndex]);
}

const questions = [
  {
    question: "Question 1",
    answers: [
      { text: "An Answer", correct: false },
      { text: "Another Answer", correct: true },
      { text: "Another Answer", correct: false },
      { text: "Another Answer", correct: false },
    ],
  },
];

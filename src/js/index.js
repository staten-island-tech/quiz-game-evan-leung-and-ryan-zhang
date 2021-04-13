console.log("Activated");
const buttons1ID = document.getElementById("buttons1");
const buttons2ID = document.getElementById("buttons2");
const buttons3ID = document.getElementById("buttons3");
const buttons4ID = document.getElementById("buttons4");
const startButton = document.getElementById("startbtn");
const nextButton = document.getElementById("submitbtn");
const containerID = document.getElementById("container");

const btn11ID = document.getElementById("btn11");
const btn12ID = document.getElementById("btn12");
const btn13ID = document.getElementById("btn13");
const btn14ID = document.getElementById("btn14");
const btn21ID = document.getElementById("btn21");
const btn22ID = document.getElementById("btn22");
const btn23ID = document.getElementById("btn23");
const btn24ID = document.getElementById("btn24");
const btn31ID = document.getElementById("btn31");
const btn32ID = document.getElementById("btn32");
const btn33ID = document.getElementById("btn33");
const btn34ID = document.getElementById("btn34");
const btn41ID = document.getElementById("btn41");
const btn42ID = document.getElementById("btn42");
const btn43ID = document.getElementById("btn43");
const btn44ID = document.getElementById("btn44");

startButton.addEventListener("click", gameStart);

let quizscore = 0;

function gameStart() {
  startButton.classList.add("remove");
  containerID.classList.remove("remove");
}

btn11ID.addEventListener("click", question1correct);
btn12ID.addEventListener("click", question1wrong);
btn13ID.addEventListener("click", question1wrong);
btn14ID.addEventListener("click", question1wrong);

function question1correct() {
  quizscore++;
  buttons1ID.classList.add("remove");
  console.log(quizscore);
}

function question1wrong() {
  quizscore;
  buttons1ID.classList.add("remove");
  console.log(quizscore);
}

btn21ID.addEventListener("click", question2wrong);
btn22ID.addEventListener("click", question2wrong);
btn23ID.addEventListener("click", question2correct);
btn24ID.addEventListener("click", question2wrong);

function question2correct() {
  quizscore++;
  buttons2ID.classList.add("remove");
  console.log(quizscore);
}

function question2wrong() {
  quizscore;
  buttons2ID.classList.add("remove");
  console.log(quizscore);
}

btn31ID.addEventListener("click", question3wrong);
btn32ID.addEventListener("click", question3wrong);
btn33ID.addEventListener("click", question3correct);
btn34ID.addEventListener("click", question3wrong);

function question3correct() {
  quizscore++;
  buttons3ID.classList.add("remove");
  console.log(quizscore);
}

function question3wrong() {
  quizscore;
  buttons3ID.classList.add("remove");
  console.log(quizscore);
}

btn41ID.addEventListener("click", question4wrong);
btn42ID.addEventListener("click", question4wrong);
btn43ID.addEventListener("click", question4wrong);
btn44ID.addEventListener("click", question4correct);

function question4correct() {
  quizscore++;
  buttons4ID.classList.add("remove");
  console.log(quizscore);
}

function question4wrong() {
  quizscore;
  buttons4ID.classList.add("remove");
  console.log(quizscore);
}

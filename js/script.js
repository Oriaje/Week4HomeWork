var currentPage;
// declaring the vairables for the quiz questions
const questions = [
  {
    id: "question-1",
    text: "How to code",
    options: ["Try this option", "How to try", "option3", "answer"],
    answer: "answer",
  },
  {
    id: "question-1",
    text: "How to code 1",
    options: ["Try this option", "How to try", "option3", "answer"],
    answer: "answer",
  },
  {
    id: "question-2",
    text: "How to code 2",
    options: ["Try this option", "How to try", "option3", "answer"],
    answer: "answer",
  },
  {
    id: "question-3",
    text: "How to code 3",
    options: ["Try this option", "How to try", "option3", "answer"],
    answer: "answer",
  },
];
// declaring the variables
var currentQuestionIndex = 0;
var timerClock;
var totalTime = 60;
const timePenalty = 10;
//setting the function
function getQuestion(index) {
  const question = questions[index];

  let html = `<div id="${question.answer}" class="question-container">
    <p class="question-title">${question.text}</p>
    <ul class="question-options">`;

  question.options.map((option, index) => {
    html += `<li onclick="questionOptionSelected('${option}')">${
      index + 1
    } ${option}</li>`;
  });

  return html;
}

function questionOptionSelected(option) {
  console.log(option);

  ++currentQuestionIndex;

  if (currentQuestionIndex < questions.length) {
    let questionContainer = document.getElementById("question-section-content");

    let html = getQuestion(currentQuestionIndex);

    const isCorrect = option == questions[currentQuestionIndex].answer;

    const questionResponse = isCorrect ? "Correct!" : "Wrong!!";
    html += ` </ul>
    <div class="answer-container">
    <p>${questionResponse}</p>
    </div>
    </div>`;

    questionContainer.innerHTML = html;

    if (!isCorrect) {
      totalTime = totalTime - timePenalty;
    }
  }
}

function startQuiz() {
  const welcomeSection = document.getElementById("welcome-section");
  welcomeSection.style.display = "none";

  document.getElementById("question-sections").style.display = "block";

  let questionContainer = document.getElementById("question-section-content");

  questionContainer.innerHTML = getQuestion(currentQuestionIndex);

  timerClock = setInterval(() => {
    let clock = document.getElementById("clock");

    totalTime = totalTime - 1;
    clock.innerHTML = totalTime;
  }, 1000);
}

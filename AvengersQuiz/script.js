const quizData = [
  {
    question: "Which Avenger is known for wielding a vibranium shield?",
    a: "Iron Man",
    b: "Thor",
    c: "Hawkeye",
    d: "Captain America",
    e: "none of the above",
    correct: "d",
  },
  {
    question: "What is Thor's hammer called?",
    a: "Mjolnir",
    b: "Stormbreaker",
    c: "Excalibur",
    d: "Gungnir",
    e: "none of the above",
    correct: "a",
  },
  {
    question: "Which Avenger was originally a spy working for S.H.I.E.L.D.??",
    a: " Vision",
    b: "Black Widow",
    c: "Scarlet Witch",
    d: "War Machine",
    e: "none of the above",
    correct: "b",
  },
  {
    question: "What is the name of the alien race that Thanos is a part of?",
    a: "Skrulls",
    b: "Kree",
    c: "Chitauri",
    d: "Asgardians",
    e: "none of the above",
    correct: "c",
  },

  {
    question: "What is the name of the AI that helps Tony Stark in his suit?",
    a: "Jarvis",
    b: "Friday",
    c: "Edith",
    d: "Alice",
    e: "none of the above",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});

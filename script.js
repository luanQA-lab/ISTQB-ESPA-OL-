const categories = document.querySelectorAll(".card:not(.amount)");
const amountButtons = document.querySelectorAll(".amount");

const categoriesContainer = document.getElementById("categories");
const amountSelector = document.getElementById("amountSelector");
const quizContainer = document.getElementById("quiz");

const questionText = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const menuBtn = document.getElementById("menuBtn");
const counter = document.getElementById("counter");

let allQuestions = [];
let remainingQuestions = [];
let currentQuestion = null;
let currentIndex = 0;
let totalQuestions = 0;
let selectedCategory = null;

categories.forEach(card => {
  card.addEventListener("click", () => {
    selectedCategory = card.dataset.category;
    categoriesContainer.classList.add("hidden");
    amountSelector.classList.remove("hidden");
  });
});

amountButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    loadQuestions(selectedCategory, parseInt(btn.dataset.amount));
  });
});

async function loadQuestions(category, amount) {
  const response = await fetch(`data/${category}.json`);
  allQuestions = await response.json();

  shuffle(allQuestions);

  totalQuestions = Math.min(amount, allQuestions.length);
  remainingQuestions = allQuestions.slice(0, totalQuestions);

  currentIndex = 0;

  amountSelector.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  showNextQuestion();
}

function showNextQuestion() {
  feedback.textContent = "";
  feedback.className = "";
  nextBtn.classList.add("hidden");

  if (remainingQuestions.length === 0) {
    returnToMenu();
    return;
  }

  currentIndex++;
  counter.textContent = `Pregunta ${currentIndex} / ${totalQuestions}`;

  currentQuestion = remainingQuestions.shift();

  // TEXTO
  questionText.textContent = currentQuestion.question;

  // IMAGEN (opcional)
  if (currentQuestion.image) {
    questionImage.src = currentQuestion.image;
    questionImage.classList.remove("hidden");
  } else {
    questionImage.classList.add("hidden");
    questionImage.src = "";
  }

  answersContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option, btn));
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selected, selectedBtn) {
  if (selected === currentQuestion.correct) {
    feedback.textContent = "✅ Respuesta correcta";
    feedback.className = "correct";
    selectedBtn.style.backgroundColor = "#e6ffe8";

    document.querySelectorAll(".answer")
      .forEach(a => a.classList.add("disabled"));

    nextBtn.classList.remove("hidden");
  } else {
    feedback.textContent = "❌ Incorrecto, intentá nuevamente";
    feedback.className = "incorrect";
    selectedBtn.style.backgroundColor = "#ffe6e6";
  }
}

nextBtn.addEventListener("click", showNextQuestion);

menuBtn.addEventListener("click", returnToMenu);

function returnToMenu() {
  quizContainer.classList.add("hidden");
  amountSelector.classList.add("hidden");
  categoriesContainer.classList.remove("hidden");

  questionText.textContent = "";
  questionImage.classList.add("hidden");
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  counter.textContent = "";

  allQuestions = [];
  remainingQuestions = [];
  currentQuestion = null;
  currentIndex = 0;
  totalQuestions = 0;
  selectedCategory = null;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.getElementById("backBtn").onclick = () => {
  showMainMenu();
};


function showMainMenu() {  quizContainer.classList.add("hidden");
  amountSelector.classList.add("hidden");
  categoriesContainer.classList.remove("hidden");
}
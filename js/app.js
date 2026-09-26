import { createQuiz, validateQuestions } from "./quiz.js";
import { renderApp, showMessage } from "./ui.js";

const container = document.querySelector("#app");
const progress = document.querySelector("#progresso");

async function start() {
  try {
    const response = await fetch("data/questions.json");
    if (!response.ok) throw new Error("Não foi possível carregar as questões.");
    const questions = await response.json();
    const validation = validateQuestions(questions);
    if (!validation.valid) throw new Error(validation.message);
    const quiz = createQuiz(questions);
    renderApp(container, progress, quiz);
    container.addEventListener("change", (event) => {
      if (event.target.name === "alternativa") quiz.selectAlternative(event.target.value);
    });
    container.addEventListener("click", (event) => handleAction(event, quiz));
  } catch (error) {
    progress.textContent = "Conteúdo indisponível";
    container.innerHTML = `<p class="mensagem erro" role="alert">Não foi possível iniciar o quiz: ${error.message} Execute a aplicação por um servidor estático local.</p>`;
  }
}

function handleAction(event, quiz) {
  const action = event.target.dataset.action;
  if (!action) return;
  if (action === "confirmar") {
    const result = quiz.confirmAnswer();
    if (!result.ok) return showMessage(container, result.message);
  }
  if (action === "avancar") quiz.advance();
  if (action === "reiniciar") {
    const state = quiz.getState();
    const hasProgress = state.status !== "resultado" && (state.currentIndex > 0 || state.responses.length > 0);
    if (hasProgress && !window.confirm("Deseja reiniciar? Suas respostas e sua pontuação serão apagadas.")) return;
    quiz.restart();
  }
  renderApp(container, progress, quiz);
}

start();

export function renderApp(container, progress, quiz) {
  const state = quiz.getState();
  if (state.status === "resultado") return renderResult(container, progress, quiz);
  const question = quiz.getCurrentQuestion();
  progress.textContent = `Questão ${state.currentIndex + 1} de 10`;
  const response = state.responses.at(-1);
  container.innerHTML = `
    <p class="questao-numero">Questão ${state.currentIndex + 1}</p>
    <h2 id="enunciado">${escapeHtml(question.enunciado)}</h2>
    <fieldset class="alternativas" aria-labelledby="enunciado" ${state.status === "feedback" ? "disabled" : ""}>
      ${question.alternativas.map((alternative) => `<label class="alternativa"><input type="radio" name="alternativa" value="${escapeHtml(alternative.id)}" ${state.selectedId === alternative.id ? "checked" : ""} /><span>${escapeHtml(alternative.texto)}</span></label>`).join("")}
    </fieldset>
    <p id="mensagem" class="mensagem ${state.status === "feedback" ? (response.correct ? "correta" : "incorreta") : ""}" aria-live="assertive"></p>
    <div class="acoes">
      ${state.status === "respondendo" ? '<button type="button" data-action="confirmar">Confirmar resposta</button>' : '<button type="button" data-action="avancar">Próxima questão</button>'}
      <button type="button" class="secundario" data-action="reiniciar">Reiniciar quiz</button>
    </div>`;
  if (state.status === "feedback") document.querySelector("#mensagem").textContent = response.correct ? "Resposta correta! Muito bem." : "Resposta incorreta. Continue praticando!";
}

export function showMessage(container, message) {
  const target = container.querySelector("#mensagem");
  if (target) { target.className = "mensagem erro"; target.textContent = message; }
}

function renderResult(container, progress, quiz) {
  const result = quiz.getResult();
  progress.textContent = "Quiz concluído";
  container.innerHTML = `<h2>Seu resultado</h2><ul class="resultado-lista"><li>Acertos: ${result.correct}</li><li>Erros: ${result.wrong}</li><li>Percentual de acertos: ${result.percentage}%</li></ul><div class="acoes"><button type="button" data-action="reiniciar">Reiniciar quiz</button></div>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

import { createQuiz, validateQuestions } from "../js/quiz.js";

let failures = 0;
function assert(condition, message) {
  if (!condition) { failures += 1; throw new Error(message); }
}
function makeQuestions() {
  return Array.from({ length: 10 }, (_, index) => ({
    id: `q${index + 1}`,
    enunciado: `Questão ${index + 1}`,
    alternativas: ["a", "b", "c", "d"].map((id) => ({ id, texto: `Alternativa ${id}` })),
    alternativaCorretaId: "a"
  }));
}
function answerAndAdvance(quiz, answer = "a") {
  assert(quiz.selectAlternative(answer).ok, "A alternativa deveria ser selecionável.");
  assert(quiz.confirmAnswer().ok, "A resposta deveria ser confirmável.");
  return quiz.advance();
}
function run(name, callback) {
  try { callback(); console.log(`✓ ${name}`); }
  catch (error) { console.error(`✗ ${name}: ${error.message}`); }
}

run("rejeita dados inválidos", () => {
  const invalid = makeQuestions(); invalid[0].alternativas.pop();
  assert(!validateQuestions(invalid).valid, "Questão com menos de quatro alternativas deve ser inválida.");
  invalid[0] = makeQuestions()[0]; invalid[1].id = invalid[0].id;
  assert(!validateQuestions(invalid).valid, "IDs de questão duplicados devem ser inválidos.");
  invalid[1].id = "q2"; invalid[0].alternativaCorretaId = "inexistente";
  assert(!validateQuestions(invalid).valid, "A alternativa correta deve existir na questão.");
});
run("exige seleção e bloqueia alteração após confirmação", () => {
  const quiz = createQuiz(makeQuestions());
  assert(!quiz.confirmAnswer().ok, "Não deve confirmar sem seleção.");
  quiz.selectAlternative("a"); quiz.confirmAnswer();
  assert(!quiz.selectAlternative("b").ok, "Não deve alterar resposta confirmada.");
});
run("avança apenas após confirmação", () => {
  const quiz = createQuiz(makeQuestions());
  assert(!quiz.advance().ok, "Não deve avançar sem confirmação.");
  answerAndAdvance(quiz, "b");
  assert(quiz.getState().currentIndex === 1, "Deve avançar para a segunda questão.");
});
run("calcula resultado para 7 acertos", () => {
  const quiz = createQuiz(makeQuestions());
  for (let index = 0; index < 10; index += 1) answerAndAdvance(quiz, index < 7 ? "a" : "b");
  const result = quiz.getResult();
  assert(result.correct === 7 && result.wrong === 3 && result.percentage === 70, "Resultado 7/3/70 esperado.");
  assert(quiz.getState().status === "resultado", "A décima questão deve levar ao resultado.");
});
run("reinicia e zera a tentativa", () => {
  const quiz = createQuiz(makeQuestions());
  answerAndAdvance(quiz);
  quiz.restart();
  const state = quiz.getState();
  assert(state.currentIndex === 0 && state.responses.length === 0 && state.status === "respondendo", "Reinício deve zerar o estado.");
});

if (failures > 0) process.exitCode = 1;

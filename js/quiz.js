export const TOTAL_QUESTIONS = 10;

export function validateQuestions(questions) {
  if (!Array.isArray(questions) || questions.length !== TOTAL_QUESTIONS) {
    return { valid: false, message: "O quiz precisa conter exatamente 10 questões." };
  }
  const questionIds = new Set();
  for (const question of questions) {
    if (!question?.id || !question.enunciado?.trim() || !Array.isArray(question.alternativas)) {
      return { valid: false, message: "Uma questão está incompleta." };
    }
    if (questionIds.has(question.id) || question.alternativas.length !== 4) {
      return { valid: false, message: "Cada questão precisa ter quatro alternativas e um ID único." };
    }
    questionIds.add(question.id);
    const alternativeIds = new Set(question.alternativas.map((alternative) => alternative?.id));
    if (alternativeIds.size !== 4 || [...alternativeIds].some((id) => !id?.trim()) || !alternativeIds.has(question.alternativaCorretaId)) {
      return { valid: false, message: "Cada questão precisa ter uma única alternativa correta válida." };
    }
    if (question.alternativas.some((alternative) => !alternative.texto?.trim())) {
      return { valid: false, message: "Todas as alternativas precisam ter texto." };
    }
  }
  return { valid: true };
}

export function createQuiz(questions) {
  const validation = validateQuestions(questions);
  if (!validation.valid) throw new Error(validation.message);

  let state = createInitialState();
  const snapshot = () => ({ ...state, responses: state.responses.map((response) => ({ ...response })) });
  const currentQuestion = () => questions[state.currentIndex];

  function createInitialState() {
    return { currentIndex: 0, selectedId: null, responses: [], status: "respondendo" };
  }

  function selectAlternative(alternativeId) {
    if (state.status !== "respondendo" || !currentQuestion().alternativas.some((item) => item.id === alternativeId)) {
      return { ok: false, message: "Não é possível selecionar esta alternativa agora." };
    }
    state = { ...state, selectedId: alternativeId };
    return { ok: true };
  }

  function confirmAnswer() {
    if (state.status !== "respondendo") return { ok: false, message: "A resposta já foi confirmada." };
    if (!state.selectedId) return { ok: false, message: "Selecione uma alternativa antes de confirmar." };
    const question = currentQuestion();
    const correct = question.alternativaCorretaId === state.selectedId;
    state = {
      ...state,
      status: "feedback",
      responses: [...state.responses, { questionId: question.id, selectedId: state.selectedId, correct }]
    };
    return { ok: true, correct };
  }

  function advance() {
    if (state.status !== "feedback") return { ok: false, message: "Confirme a resposta antes de avançar." };
    if (state.currentIndex === TOTAL_QUESTIONS - 1) {
      state = { ...state, status: "resultado" };
      return { ok: true, finished: true };
    }
    state = { ...state, currentIndex: state.currentIndex + 1, selectedId: null, status: "respondendo" };
    return { ok: true, finished: false };
  }

  function getResult() {
    const correct = state.responses.filter((response) => response.correct).length;
    return { correct, wrong: TOTAL_QUESTIONS - correct, percentage: (correct / TOTAL_QUESTIONS) * 100 };
  }

  function restart() { state = createInitialState(); return snapshot(); }

  return { getState: snapshot, getCurrentQuestion: currentQuestion, selectAlternative, confirmAnswer, advance, getResult, restart };
}

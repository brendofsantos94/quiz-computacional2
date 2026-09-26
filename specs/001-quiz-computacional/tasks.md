# Tarefas: Quiz Computacional

**Entrada**: Artefatos de design em `/specs/001-quiz-computacional/`.

**Pré-requisitos**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md),
[data-model.md](./data-model.md), [contrato de dados](./contracts/contrato-dados-questoes.md) e
[quickstart.md](./quickstart.md).

**Testes**: Incluídos porque a constituição exige verificação objetiva e o plano define testes de
lógica no navegador.

**Organização**: As tarefas estão agrupadas por história de usuário para permitir incrementos
independentes e testáveis.

## Fase 1: Preparação

**Objetivo**: Criar a estrutura estática, sem dependências externas.

- [X] T001 Criar `css/`, `js/`, `data/` e `tests/` na raiz do repositório conforme `specs/001-quiz-computacional/plan.md`.
- [X] T002 [P] Criar o esqueleto semântico, em PT-BR, da página em `index.html` com regiões para quiz, feedback, resultado e ações.
- [X] T003 [P] Criar os estilos-base responsivos em `css/styles.css`, incluindo layout utilizável a partir de 320 px.
- [X] T004 [P] Criar `tests/test-runner.html` para carregar e exibir os testes de lógica no navegador.

---

## Fase 2: Fundação Compartilhada

**Objetivo**: Definir dados válidos e os limites entre apresentação, dados e lógica.

**⚠️ CRÍTICO**: Esta fase deve estar concluída antes das histórias de usuário.

- [X] T005 Criar `data/questions.json` com exatamente 10 questões em PT-BR, cada uma com `id`, `enunciado`, quatro alternativas e `alternativaCorretaId`, conforme `specs/001-quiz-computacional/contracts/contrato-dados-questoes.md`.
- [X] T006 [P] Criar a interface de apresentação em `js/ui.js` para renderizar estados e emitir eventos sem conter regras de pontuação ou validação de dados.
- [X] T007 Criar o módulo de domínio inicial em `js/quiz.js` com a estrutura dos estados `respondendo`, `feedback` e `resultado`, sem persistência após recarregamento.
- [X] T008 Criar o ponto de composição em `js/app.js` para carregar `data/questions.json` por servidor estático, validar o conteúdo antes do início, exibir mensagem de falha de carregamento e conectar `js/quiz.js` a `js/ui.js`.

**Checkpoint**: Fundação pronta — as histórias podem usar o mesmo contrato de dados e separação de camadas.

---

## Fase 3: História de Usuário 1 — Responder uma questão (Prioridade: P1) 🎯 MVP

**Objetivo**: Permitir que o estudante responda uma questão por vez, receba feedback e avance sem
retornar a questões confirmadas.

**Teste independente**: Iniciar o quiz, selecionar uma alternativa, confirmar, conferir feedback e
avançar; tentar confirmar sem seleção e retornar a uma questão já confirmada.

### Testes da História de Usuário 1

- [X] T009 [US1] Escrever em `tests/quiz-logic.test.js` testes para rejeitar questões sem exatamente quatro alternativas, com identificadores duplicados ou sem uma alternativa correta válida.
- [X] T010 [US1] Escrever em `tests/quiz-logic.test.js` testes para seleção única, bloqueio de confirmação sem seleção e transição de `respondendo` para `feedback`.
- [X] T011 [US1] Escrever em `tests/quiz-logic.test.js` testes para registrar resposta confirmada, bloquear alteração e permitir somente avanço sequencial.

### Implementação da História de Usuário 1

- [X] T012 [US1] Implementar em `js/quiz.js` a validação das questões: enunciado não vazio, quatro alternativas, IDs únicos e `alternativaCorretaId` pertencente à questão.
- [X] T013 [US1] Implementar em `js/quiz.js` seleção de uma alternativa, confirmação imutável e cálculo de correção por comparação com `alternativaCorretaId`.
- [X] T014 [US1] Implementar em `js/quiz.js` as transições `respondendo → feedback → respondendo`, impedindo avanço sem confirmação e retorno a questão confirmada.
- [X] T015 [US1] Implementar em `js/ui.js` a visualização de uma questão com enunciado, exatamente quatro alternativas, botão de confirmação e ação de avanço.
- [X] T016 [US1] Implementar em `js/ui.js` mensagens em PT-BR para resposta correta, incorreta, ausência de seleção e conteúdo de questões inválido.
- [X] T017 [US1] Integrar os eventos e renderizações do fluxo P1 em `js/app.js` e `index.html`.

**Checkpoint**: O MVP permite responder, confirmar, receber feedback e avançar pelas questões de forma sequencial.

---

## Fase 4: História de Usuário 2 — Consultar o resultado final (Prioridade: P2)

**Objetivo**: Apresentar acertos, erros e percentual após a décima questão.

**Teste independente**: Criar uma tentativa conhecida com 7 respostas corretas e confirmar que o
resultado apresenta 7 acertos, 3 erros e 70%.

### Testes da História de Usuário 2

- [X] T018 [US2] Adicionar em `tests/quiz-logic.test.js` casos para cálculo de acertos, erros e percentual de uma tentativa completa com 0, 7 e 10 acertos.
- [X] T019 [US2] Adicionar em `tests/quiz-logic.test.js` caso que exige a transição de `feedback` para `resultado` somente após a décima questão confirmada.

### Implementação da História de Usuário 2

- [X] T020 [US2] Implementar em `js/quiz.js` a derivação do resultado: `acertos`, `erros = 10 - acertos` e `percentualAcertos = (acertos ÷ 10) × 100`.
- [X] T021 [US2] Implementar em `js/quiz.js` a transição da última questão para o estado `resultado` após o feedback.
- [X] T022 [US2] Implementar em `js/ui.js` a tela de resultado com quantidade de acertos, quantidade de erros e percentual de acertos.
- [X] T023 [US2] Integrar a exibição do resultado ao avanço após a décima questão em `js/app.js`.

**Checkpoint**: Uma tentativa completa apresenta resultado correto e mensurável.

---

## Fase 5: História de Usuário 3 — Reiniciar a prática (Prioridade: P3)

**Objetivo**: Reiniciar a qualquer momento, solicitando confirmação quando houver progresso a perder.

**Teste independente**: Reiniciar uma tentativa em andamento, cancelar e confirmar; reiniciar após o
resultado e verificar o estado inicial.

### Testes da História de Usuário 3

- [X] T024 [US3] Adicionar em `tests/quiz-logic.test.js` testes para reinício confirmado que zera índice, seleção, respostas, acertos e erros.
- [X] T025 [US3] Adicionar em `tests/quiz-logic.test.js` teste que mantém o estado inalterado quando o reinício em andamento é cancelado.

### Implementação da História de Usuário 3

- [X] T026 [US3] Implementar em `js/quiz.js` a restauração do estado inicial após reinício confirmado, preservando o estado quando o pedido for cancelado.
- [X] T027 [US3] Implementar em `js/ui.js` a ação de reinício e uma confirmação compreensível em PT-BR antes de descartar uma tentativa em andamento.
- [X] T028 [US3] Integrar a ação de reinício em `js/app.js` para os estados de resposta, feedback e resultado.

**Checkpoint**: Reinício confirmado começa nova tentativa sem resíduos; cancelamento preserva a tentativa atual.

---

## Fase 6: Acabamento e Verificação Transversal

**Objetivo**: Garantir qualidade visual, acessibilidade básica e conformidade com o roteiro de validação.

- [X] T029 [P] Revisar `css/styles.css` para garantir foco visível, contraste mínimo de 4,5:1, áreas de toque confortáveis e leitura em smartphone e desktop.
- [X] T030 [P] Revisar `index.html` e `js/ui.js` para garantir rótulos claros, operação por teclado, controles semanticamente associados e mensagens de feedback perceptíveis por tecnologias assistivas.
- [X] T031 Executar e corrigir os testes em `tests/test-runner.html`, cobrindo validação, confirmação, navegação, pontuação e reinício.
- [ ] T032 Executar todos os cenários de `specs/001-quiz-computacional/quickstart.md` em desktop e largura de 320 px e corrigir desvios nos arquivos afetados.
- [X] T033 Revisar `index.html`, `css/styles.css`, `js/`, `data/questions.json` e `tests/` para remover código não utilizado e confirmar que não foram adicionadas dependências, backend, banco de dados ou autenticação.
- [ ] T034 Realizar e registrar em `specs/001-quiz-computacional/quickstart.md` um teste de usabilidade com ao menos 10 estudantes representativos, medindo a conclusão de uma tentativa e a localização do resultado sem orientação externa.
- [ ] T035 Executar e registrar em `specs/001-quiz-computacional/quickstart.md` 20 avanços consecutivos no navegador-alvo, verificando feedback e próxima questão em até 1 segundo.

---

## Dependências e Ordem de Execução

### Dependências entre fases

- Fase 1 não possui dependências.
- Fase 2 depende da Fase 1 e bloqueia as histórias.
- US1 (P1) depende da Fase 2.
- US2 (P2) depende do fluxo e das respostas confirmadas da US1.
- US3 (P3) depende do estado do quiz criado na US1 e do resultado da US2.
- Fase 6 depende das histórias selecionadas estarem concluídas.

### Oportunidades de paralelismo

- T002, T003 e T004 podem ser realizados em paralelo após T001.
- T006 pode ser desenvolvido em paralelo com T005 após a estrutura estar disponível.
- T009 a T011, T018/T019 e T024/T025 são sequenciais porque atualizam o mesmo arquivo de testes.
- T029 e T030 podem ser realizados em paralelo após as histórias.

## Exemplo de Paralelismo: Preparação

```text
T002: Esqueleto da interface em index.html
T003: Estilos base em css/styles.css
T004: Página de testes em tests/test-runner.html
```

Essas tarefas afetam arquivos distintos e não possuem dependências entre si após T001.

## Estratégia de Implementação

### MVP primeiro

1. Concluir as Fases 1 e 2.
2. Concluir a US1 e executar seu teste independente.
3. Demonstrar o fluxo de responder, feedback e avanço sequencial antes de incluir resultado e reinício.

### Entrega incremental

1. US1 entrega a prática essencial.
2. US2 acrescenta o resumo de desempenho ao fim da tentativa.
3. US3 acrescenta nova tentativa controlada.
4. A Fase 6 valida responsividade, acessibilidade e os cenários ponta a ponta.

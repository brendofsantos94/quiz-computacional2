# Especificação da Funcionalidade: Quiz Computacional

**Referência da funcionalidade**: `001-quiz-computacional`

**Criada em**: 2026-09-26

**Status**: Rascunho

**Entrada**: Aplicação educacional para prática de conhecimentos básicos de Computação por meio de
10 questões de múltipla escolha, com feedback, resultado e reinício.

## Esclarecimentos

### Sessão 2026-09-26

- P: Depois de confirmar uma resposta, o estudante poderá voltar a questões anteriores? → R:
  Navegação somente para frente; respostas confirmadas não podem ser revisitadas.
- P: Em quais momentos o estudante poderá reiniciar o quiz? → R: A qualquer momento, com confirmação
  antes de apagar o progresso atual.

## Cenários de Usuário e Testes *(obrigatório)*

### História de Usuário 1 — Responder uma questão (Prioridade: P1)

Como estudante, quero visualizar uma questão de Computação por vez, escolher uma alternativa e
confirmar minha resposta, para praticar o conteúdo e saber imediatamente se acertei.

**Por que esta prioridade**: É o fluxo educacional essencial; sem ele, o quiz não entrega prática
nem feedback ao estudante.

**Teste independente**: Pode ser testada iniciando um quiz, selecionando uma alternativa, confirmando
a resposta e verificando o feedback antes de avançar.

**Cenários de aceitação**:

1. **Dado** que o estudante inicia um quiz, **Quando** a primeira questão é exibida, **Então** ele
   visualiza um enunciado e exatamente quatro alternativas.
2. **Dado** que uma questão é exibida, **Quando** o estudante seleciona uma alternativa e confirma,
   **Então** recebe feedback indicando se a resposta está correta ou incorreta.
3. **Dado** que o estudante ainda não confirmou uma resposta, **Quando** tenta avançar, **Então** a
   aplicação não exibe a próxima questão e solicita a confirmação de uma alternativa.
4. **Dado** que o feedback de uma resposta foi exibido, **Quando** o estudante avança, **Então** a
   aplicação mostra a próxima questão ainda não respondida, sem oferecer retorno a questões
   confirmadas.

---

### História de Usuário 2 — Consultar o resultado final (Prioridade: P2)

Como estudante, quero ver o resumo do meu desempenho ao concluir o quiz, para identificar como fui
na prática.

**Por que esta prioridade**: O resultado transforma as respostas individuais em uma visão clara do
desempenho ao final da atividade.

**Teste independente**: Pode ser testada concluindo as 10 questões com uma combinação conhecida de
respostas corretas e incorretas e conferindo os totais e o percentual apresentados.

**Cenários de aceitação**:

1. **Dado** que o estudante confirmou a décima questão, **Quando** avança após receber o feedback,
   **Então** visualiza a quantidade de acertos, a quantidade de erros e o percentual de acertos.
2. **Dado** que o estudante acertou 7 das 10 questões, **Quando** consulta o resultado final,
   **Então** a aplicação informa 7 acertos, 3 erros e 70% de acertos.

---

### História de Usuário 3 — Reiniciar a prática (Prioridade: P3)

Como estudante, quero reiniciar o quiz após ver o resultado, para realizar uma nova tentativa.

**Por que esta prioridade**: Permite a repetição da prática sem exigir cadastro ou uma nova sessão
manual.

**Teste independente**: Pode ser testada concluindo o quiz, escolhendo reiniciar e verificando que a
primeira questão é exibida sem respostas ou pontuação da tentativa anterior.

**Cenários de aceitação**:

1. **Dado** que o resultado final está visível, **Quando** o estudante escolhe reiniciar o quiz,
   **Então** a aplicação exibe a primeira das 10 questões e zera o progresso e a pontuação anteriores.
2. **Dado** que o estudante está respondendo uma questão, **Quando** escolhe reiniciar e confirma o
   descarte do progresso, **Então** a aplicação exibe a primeira questão e zera respostas, progresso
   e pontuação da tentativa atual.
3. **Dado** que o estudante está respondendo uma questão, **Quando** escolhe reiniciar e cancela a
   confirmação, **Então** a aplicação preserva a questão atual e todo o progresso da tentativa.

### Casos de Borda

- O que acontece se uma questão não tiver exatamente quatro alternativas ou não tiver uma única
  alternativa correta? A questão não pode ser disponibilizada no quiz.
- Como a aplicação lida com confirmação sem alternativa selecionada? A confirmação não é concluída e
  o estudante recebe orientação para selecionar uma alternativa.
- Como a aplicação lida com tentativa de alterar uma resposta após a confirmação? A resposta da
  questão permanece registrada para preservar a consistência do feedback e da pontuação.
- Como a aplicação lida com tentativa de retornar a uma questão confirmada? A navegação não permite
  retorno; o estudante prossegue somente para a próxima questão ou para o resultado final.
- Como a aplicação lida com a última questão? Após seu feedback, o próximo avanço apresenta o resumo
  final, sem uma décima primeira questão.
- Como a aplicação lida com reinício durante uma tentativa? Ela solicita confirmação antes de
  descartar respostas, progresso e pontuação; se o estudante cancelar, a tentativa é preservada.

## Requisitos *(obrigatório)*

### Requisitos Funcionais

- **RF-001**: A aplicação DEVE disponibilizar um quiz com exatamente 10 questões iniciais sobre
  conhecimentos básicos de Computação.
- **RF-002**: A aplicação DEVE exibir somente uma questão por vez durante a tentativa do estudante.
- **RF-003**: Cada questão DEVE apresentar um enunciado e exatamente quatro alternativas
  selecionáveis.
- **RF-004**: Cada questão DEVE possuir exatamente uma alternativa correta.
- **RF-005**: A aplicação DEVE permitir que o estudante selecione uma única alternativa por questão
  antes de confirmá-la.
- **RF-006**: A aplicação DEVE exigir a confirmação da resposta selecionada antes de permitir o
  avanço para a próxima questão.
- **RF-007**: Após a confirmação, a aplicação DEVE informar claramente se a resposta é correta ou
  incorreta antes que o estudante possa avançar.
- **RF-008**: A aplicação DEVE registrar cada resposta confirmada e calcular automaticamente os
  acertos e erros da tentativa.
- **RF-009**: Após a confirmação e o avanço a partir da décima questão, a aplicação DEVE apresentar
  a quantidade de acertos, a quantidade de erros e o percentual de acertos.
- **RF-010**: O percentual de acertos DEVE ser calculado como `(acertos ÷ 10) × 100` e apresentado
  sem ambiguidade ao estudante.
- **RF-011**: A aplicação DEVE permitir o reinício do quiz a qualquer momento. Durante uma tentativa
  em andamento, DEVE solicitar confirmação antes de apagar respostas, progresso e pontuação; se a
  confirmação for cancelada, DEVE preservar a tentativa atual.
- **RF-012**: A primeira versão NÃO DEVE exigir cadastro, autenticação ou identificação do estudante.
- **RF-013**: A aplicação DEVE impedir a disponibilização de questões que não atendam aos requisitos
  de quatro alternativas e uma única resposta correta.
- **RF-014**: Após uma resposta ser confirmada, a aplicação DEVE permitir somente o avanço para a
  próxima questão ainda não respondida ou, após a última questão, para o resultado final; não DEVE
  permitir retorno a questões confirmadas.
- **RF-015**: Os controles de alternativa, confirmação, avanço e reinício DEVEM ser utilizáveis por
  teclado, ter foco visível, possuir rótulos claros e apresentar feedback que possa ser percebido
  por tecnologias assistivas; textos e controles devem manter contraste mínimo de 4,5:1.

### Entidades Principais

- **Questão**: Item de prática composto por enunciado, quatro alternativas e a identificação de uma
  única alternativa correta.
- **Alternativa**: Opção selecionável vinculada a uma questão, que pode ou não ser a resposta correta.
- **Tentativa de quiz**: Conjunto temporário das respostas confirmadas, do progresso e dos resultados
  de um estudante ao responder as 10 questões.
- **Resultado**: Resumo da tentativa com quantidade de acertos, quantidade de erros e percentual de
  acertos.

## Critérios de Sucesso *(obrigatório)*

### Resultados Mensuráveis

- **CS-001**: Em teste com as 10 questões, 100% das questões exibidas apresentam exatamente quatro
  alternativas e uma única alternativa correta.
- **CS-002**: Um estudante consegue iniciar, responder, confirmar e avançar pelas 10 questões em uma
  única tentativa sem precisar de cadastro ou autenticação.
- **CS-003**: Em testes com combinações conhecidas de respostas, as quantidades de acertos e erros e
  o percentual exibidos correspondem a 100% das respostas confirmadas.
- **CS-004**: Após cada confirmação, o estudante recebe feedback de correção antes de ter acesso à
  próxima questão em 100% das tentativas testadas.
- **CS-005**: Ao reiniciar, 100% das tentativas testadas retornam à primeira questão com zero
  respostas confirmadas, zero acertos e zero erros.
- **CS-006**: Pelo menos 90% dos participantes de um teste de usabilidade conseguem concluir uma
  tentativa e localizar o resultado sem orientação externa. O teste DEVE envolver ao menos 10
  estudantes representativos do público-alvo, cada um realizando uma tentativa individual.
- **CS-007**: Em 20 avanços consecutivos executados no navegador-alvo, o feedback e a próxima
  questão devem ser apresentados em até 1 segundo após a ação do estudante.

## Premissas

- As 10 questões iniciais permanecem fixas durante uma tentativa e tratam de conhecimentos básicos
  de Computação adequados ao público estudantil.
- O estudante utiliza o quiz individualmente; não há comparação entre estudantes, ranking ou
  histórico de tentativas nesta primeira versão.
- O percentual é exibido como valor percentual exato para uma base de 10 questões, sem necessidade
  de arredondamento adicional.
- A tentativa existe apenas enquanto o quiz está em uso; preservação de progresso após fechar ou
  recarregar não faz parte desta versão.
- A funcionalidade não depende de cadastro, autenticação ou integração com serviços externos.
- A aplicação é executada por um servidor estático local simples quando necessário para a leitura do
  JSON; se o carregamento falhar, ela informa ao estudante que o conteúdo não está disponível.

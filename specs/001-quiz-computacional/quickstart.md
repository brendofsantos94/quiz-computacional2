# Guia de Validação: Quiz Computacional

## Pré-requisitos

- Navegador moderno em desktop ou smartphone.
- Arquivos organizados conforme o [plano](./plan.md).
- Servidor estático local simples para servir a raiz do projeto; não é necessário backend, banco de
  dados ou autenticação. A aplicação não deve ser validada por abertura direta do arquivo HTML.

## Execução

1. Iniciar um servidor estático na raiz do projeto e abrir seu endereço local no navegador.
2. Confirmar que a primeira questão apresenta enunciado e quatro alternativas.
3. Selecionar uma alternativa, confirmar, conferir o feedback e avançar em cada questão.
4. Após a décima questão, avançar para consultar o resultado final.

## Cenários ponta a ponta

| Cenário | Ações | Resultado esperado |
|---|---|---|
| Estrutura | Percorrer as 10 questões. | Cada questão tem quatro alternativas e uma resposta correta conforme o [contrato](./contracts/contrato-dados-questoes.md). |
| Confirmação | Tentar avançar sem selecionar e confirmar. | O avanço é bloqueado e há orientação ao estudante. |
| Feedback | Confirmar uma resposta correta e uma incorreta. | O feedback correto aparece antes do avanço. |
| Navegação | Confirmar e avançar. | A próxima questão aparece sem retorno à confirmada. |
| Pontuação | Concluir com 7 acertos. | Mostra 7 acertos, 3 erros e 70%. |
| Reinício | Reiniciar durante tentativa, cancelar e depois confirmar. | Cancelar preserva o estado; confirmar zera e retorna à primeira questão. |
| Responsividade | Executar em 320 px e desktop. | Controles e textos permanecem utilizáveis. |
| Acessibilidade básica | Percorrer controles por teclado e observar foco, rótulos e feedback. | Todos os controles são alcançáveis, possuem foco visível e o feedback é perceptível por tecnologias assistivas. |
| Desempenho | Executar 20 avanços consecutivos no navegador-alvo. | Feedback e próxima questão aparecem em até 1 segundo em cada avanço. |
| Usabilidade | Observar ao menos 10 estudantes realizando uma tentativa sem orientação. | Pelo menos 90% concluem a tentativa e localizam o resultado. |

## Falha de carregamento de dados

Se `data/questions.json` não puder ser carregado ou não atender ao contrato, a aplicação deve impedir
o início da tentativa e informar claramente que o conteúdo não está disponível corretamente.

## Testes de lógica

Executar a página de testes no navegador e verificar aprovação dos testes de validação de questões,
confirmação, pontuação, avanço, bloqueio de retorno e reinício. Os casos seguem o
[modelo de dados](./data-model.md).

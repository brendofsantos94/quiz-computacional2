# Contrato de Dados das Questões

## Finalidade

Definir o formato de `data/questions.json`, separando conteúdo de lógica e garantindo as regras do
quiz.

## Estrutura

O arquivo contém uma lista com exatamente 10 objetos. Cada objeto possui `id`, `enunciado`,
`alternativas` e `alternativaCorretaId`.

```json
[
  {
    "id": "q1",
    "enunciado": "Texto da questão",
    "alternativas": [
      { "id": "a", "texto": "Alternativa A" },
      { "id": "b", "texto": "Alternativa B" },
      { "id": "c", "texto": "Alternativa C" },
      { "id": "d", "texto": "Alternativa D" }
    ],
    "alternativaCorretaId": "b"
  }
]
```

## Regras de validação

1. A lista DEVE ter exatamente 10 questões com identificadores únicos.
2. Cada questão DEVE ter enunciado não vazio e exatamente quatro alternativas.
3. Os identificadores de alternativas DEVEM ser únicos dentro da questão.
4. `alternativaCorretaId` DEVE apontar para uma das quatro alternativas.
5. Se uma regra falhar, o quiz NÃO DEVE iniciar e DEVE informar claramente que o conteúdo não está
   disponível corretamente.

## Contrato de interação

- Em `respondendo`, o estudante seleciona uma alternativa e confirma a resposta.
- Em `feedback`, a resposta confirmada permanece registrada e só é permitido avançar.
- Em `resultado`, são exibidos acertos, erros, percentual e a opção de reiniciar.
- Reinício durante uma tentativa requer confirmação; confirmar zera o estado e cancelar o preserva.

# Modelo de Dados: Quiz Computacional

## Questão

| Campo | Tipo conceitual | Regras |
|---|---|---|
| `id` | texto único | Obrigatório e único entre as 10 questões. |
| `enunciado` | texto | Obrigatório e não vazio. |
| `alternativas` | lista | Contém exatamente quatro alternativas. |
| `alternativaCorretaId` | texto | Corresponde a uma alternativa da própria questão. |

Uma questão é inválida se faltar campo obrigatório, tiver número diferente de quatro alternativas,
tiver identificadores duplicados ou apontar para alternativa inexistente.

## Alternativa

| Campo | Tipo conceitual | Regras |
|---|---|---|
| `id` | texto | Obrigatório e único dentro da questão. |
| `texto` | texto | Obrigatório e não vazio. |

## Tentativa de Quiz

| Campo | Tipo conceitual | Regras |
|---|---|---|
| `indiceQuestaoAtual` | inteiro | Inicia em 0 e avança uma vez por confirmação. |
| `respostaSelecionadaId` | texto ou vazio | Pode mudar antes da confirmação. |
| `respostasConfirmadas` | lista | Máximo de 10 entradas, uma por questão. |
| `estado` | enumeração | `respondendo`, `feedback` ou `resultado`. |

### Transições de estado

```text
respondendo --selecionar--> respondendo
respondendo --confirmar resposta válida--> feedback
feedback --avançar (questões restantes)--> respondendo
feedback --avançar (última questão)--> resultado
respondendo/feedback/resultado --reiniciar confirmado--> respondendo (índice 0, dados zerados)
```

Não há retorno a uma questão confirmada. Uma confirmação sem resposta não altera o estado e mostra
orientação ao estudante.

## Resposta Confirmada

| Campo | Tipo conceitual | Regras |
|---|---|---|
| `questaoId` | texto | Referência a uma questão respondida uma única vez. |
| `alternativaSelecionadaId` | texto | Deve pertencer à questão referenciada. |
| `correta` | booleano | Calculado na confirmação. |

## Resultado

| Campo | Fórmula / regra |
|---|---|
| `acertos` | Quantidade de respostas com `correta = true`. |
| `erros` | `10 - acertos`. |
| `percentualAcertos` | `(acertos ÷ 10) × 100`. |

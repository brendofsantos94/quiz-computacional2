# Plano de Implementação: Quiz Computacional

**Branch**: `001-quiz-computacional` | **Data**: 2026-09-26 | **Especificação**: [spec.md](./spec.md)

## Resumo

Criar uma aplicação web estática com HTML5, CSS3 e JavaScript puro. As 10 questões serão lidas de
um JSON local; a apresentação, os dados e a lógica de domínio serão separados. A interface será
responsiva para desktop e smartphone, sem backend, banco de dados, autenticação ou frameworks.

## Contexto Técnico

**Linguagem/Versão**: HTML5, CSS3 e JavaScript ECMAScript para navegadores modernos.

**Dependências principais**: Nenhuma dependência de produção.

**Armazenamento**: `data/questions.json`; estado temporário somente em memória.

**Testes**: Testes unitários da lógica no navegador, validação dos dados JSON e roteiro manual
ponta a ponta.

**Plataforma-alvo**: Navegadores modernos em desktop e smartphone. A aplicação é servida por um
servidor estático local simples, sem backend; isso permite o carregamento confiável de
`data/questions.json` pelo navegador.

**Tipo de projeto**: Aplicação web estática de página única.

**Metas de desempenho**: Em 20 avanços consecutivos, feedback e próxima questão devem aparecer em
até 1 segundo; a interface deve permanecer utilizável a partir de 320 px de largura.

**Restrições**: Sem backend, banco de dados, autenticação, cadastro, framework frontend ou
dependência desnecessária. Navegação somente para frente após confirmação; reinício exige confirmação
quando houver tentativa em andamento.

**Escopo**: Uma tela de quiz, uma tela de resultado, 10 questões, quatro alternativas por questão,
uma resposta correta, pontuação automática e reinício. Não inclui histórico, ranking, persistência
após recarregamento ou integração externa.

## Verificação da Constituição

*GATE: aprovado antes da pesquisa e reavaliado após o design.*

| Princípio | Evidência no plano | Situação |
|---|---|---|
| Interface simples para estudantes | Uma questão por vez, feedback claro e responsividade. | Aprovado |
| Código sustentável | Estrutura distinta para apresentação, dados e lógica. | Aprovado |
| Quatro alternativas e uma correta | Contrato JSON e validação antes do início. | Aprovado |
| Feedback e pontuação automática | Máquina de estados e resultado derivado de respostas confirmadas. | Aprovado |
| Simplicidade | Padrões nativos e nenhuma dependência de produção. | Aprovado |
| Verificação objetiva | Testes de lógica, validação de dados e roteiro ponta a ponta. | Aprovado |
| Português brasileiro | Documentação, textos e comentários em PT-BR. | Aprovado |

Não há violações nem exceções de complexidade.

## Estrutura do Projeto

### Documentação desta funcionalidade

```text
specs/001-quiz-computacional/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── contrato-dados-questoes.md
└── tasks.md                 # gerado por $speckit-tasks
```

### Código-fonte (raiz do repositório)

```text
index.html                   # estrutura da interface
css/styles.css               # estilos responsivos
js/app.js                    # inicialização e coordenação
js/quiz.js                   # regras, estado, validações e pontuação
js/ui.js                     # renderização e eventos
data/questions.json          # 10 questões locais
tests/quiz-logic.test.js     # testes unitários
tests/test-runner.html       # execução de testes no navegador
```

**Decisão de estrutura**: `index.html`, `css/` e `js/ui.js` formam a apresentação;
`data/questions.json` contém os dados; `js/quiz.js` concentra a lógica do domínio; e `js/app.js`
apenas conecta as camadas.

## Acompanhamento de Complexidade

Nenhuma exceção à constituição é necessária.

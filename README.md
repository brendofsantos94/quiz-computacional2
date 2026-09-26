# Quiz Computacional

Aplicação educacional para praticar conhecimentos básicos de Computação com questões de múltipla
escolha. O projeto foi desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks frontend ou
backend.

## Funcionalidades

- Apresenta 10 questões, uma por vez.
- Exibe exatamente quatro alternativas por questão, com uma única resposta correta.
- Exige a confirmação da resposta antes de permitir o avanço.
- Informa imediatamente se a resposta está correta ou incorreta.
- Calcula automaticamente acertos, erros e percentual ao final do quiz.
- Impede o retorno a questões já confirmadas.
- Permite reiniciar a tentativa; durante o quiz, solicita confirmação antes de descartar o progresso.
- Mantém o conteúdo das questões em um arquivo JSON local.
- Oferece layout responsivo, foco visível e controles utilizáveis por teclado.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro (ES Modules)
- JSON local para as questões

## Estrutura do Projeto

```text
.
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos responsivos
├── data/
│   └── questions.json      # 10 questões do quiz
├── js/
│   ├── app.js              # Inicialização e integração
│   ├── quiz.js             # Regras, estado e pontuação
│   └── ui.js               # Renderização da interface
└── tests/
    ├── quiz-logic.test.js  # Testes da lógica do quiz
    └── test-runner.html    # Execução de testes no navegador
```

## Como Executar

Como as questões são carregadas de um arquivo JSON local, execute a aplicação por um servidor
estático na raiz do projeto.

Com Python instalado:

```powershell
python -m http.server 8765
```

Depois, abra [http://127.0.0.1:8765](http://127.0.0.1:8765) no navegador.

> Não abra somente o arquivo `index.html` pelo explorador de arquivos: alguns navegadores bloqueiam
> o carregamento de JSON nesse modo.

## Testes

Com o Node.js instalado, execute:

```powershell
npm test
```

Os testes verificam validação de questões, confirmação de respostas, navegação sequencial, cálculo
da pontuação e reinício do quiz.

Também é possível abrir `tests/test-runner.html` pelo servidor estático e consultar os resultados no
console do navegador.

## Critérios de Qualidade

- Todo texto voltado a estudantes está em português brasileiro.
- Cada questão respeita o contrato de quatro alternativas e uma resposta correta.
- Não há cadastro, autenticação, banco de dados ou integração externa nesta versão.
- O estado da tentativa é temporário e é perdido ao recarregar a página.

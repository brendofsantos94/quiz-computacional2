# Pesquisa Técnica: Quiz Computacional

## Decisões

### Aplicação estática com padrões nativos

**Decisão**: Usar HTML5, CSS3 e JavaScript puro, sem framework ou biblioteca de produção.

**Justificativa**: O fluxo é linear e não requer serviços remotos. Padrões nativos permitem execução
direta no navegador e atendem ao princípio de dependências mínimas.

**Alternativas consideradas**: Framework frontend e biblioteca de componentes. Foram descartados por
adicionarem configuração e dependências sem benefício necessário.

### Questões em JSON local validado

**Decisão**: Manter as 10 questões em `data/questions.json` e validar cada registro antes de iniciar.

**Justificativa**: Separa conteúdo de código e impede a exibição de dados que violem as regras de
quatro alternativas e uma única resposta correta.

**Alternativas consideradas**: Questões declaradas na interface e serviço remoto. A primeira mistura
dados e lógica; a segunda exige infraestrutura fora do escopo.

### Estado temporário e fluxo linear

**Decisão**: Manter em memória a questão atual, as respostas confirmadas e a pontuação, com estados
`respondendo`, `feedback` e `resultado`.

**Justificativa**: Representa a confirmação obrigatória, bloqueia retorno a questões confirmadas e
descarta os dados ao recarregar, conforme a especificação.

**Alternativas consideradas**: Persistência local e navegação livre. Foram descartadas por ampliarem
o escopo e contradizerem a regra de navegação sequencial.

### Responsividade e verificação sem ferramentas externas

**Decisão**: Usar layout fluido e pontos de quebra mínimos no CSS; executar testes isolados da lógica
no navegador e complementar com validação ponta a ponta.

**Justificativa**: A tela possui poucos elementos e as regras são determinísticas, portanto não
exigem biblioteca visual ou infraestrutura de testes adicional.

**Alternativas consideradas**: Biblioteca de estilos, testes apenas manuais ou suíte externa. Foram
descartadas por adicionarem dependências ou não atenderem à verificação objetiva.

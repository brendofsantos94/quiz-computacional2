<!--
Relatório de Impacto da Sincronização
- Mudança de versão: 1.0.0 → 1.1.0
- Princípios modificados: nenhum.
- Seções adicionadas: IX. Português (Brasil) como Idioma Padrão dos Arquivos.
- Seções removidas: nenhuma.
- Pendências: nenhuma.
-->

# Constituição do Quiz Computacional

## Princípios Fundamentais

### I. Interface Centrada no Estudante
A interface DEVE ser simples, direta e apropriada para estudantes. Cada interação do quiz DEVE ter
rótulos claros, conteúdo legível e uma próxima ação evidente. Isso reduz confusões evitáveis e
mantém a atenção na aprendizagem.

### II. Código Sustentável
O código DEVE ser organizado por responsabilidade, legível e de fácil manutenção. Nomes, limites
entre módulos e comentários, quando necessários, DEVEM tornar o comportamento do quiz
compreensível sem depender de contexto oculto. Isso permite a evolução segura da aplicação.

### III. Exatamente Quatro Alternativas
Cada questão apresentada pela aplicação DEVE conter exatamente quatro alternativas selecionáveis.
Os dados e a lógica de renderização das questões DEVEM rejeitar ou impedir questões que não
cumpram esse contrato, mantendo o formato da avaliação consistente.

### IV. Uma Única Resposta Correta
Cada questão DEVE identificar exatamente uma alternativa correta. A validação dos dados da questão
DEVE rejeitar questões sem resposta correta ou com mais de uma resposta correta. Isso garante que
feedback e pontuação sejam inequívocos.

### V. Feedback Imediato da Resposta
Após o estudante responder a uma questão, a aplicação DEVE informar se a resposta está correta. O
feedback DEVE ser exibido antes que o estudante avance a partir daquela resposta. Isso apoia o
aprendizado por meio de correção oportuna.

### VI. Pontuação Automática
A aplicação DEVE calcular automaticamente a pontuação do estudante a partir das respostas
registradas e das alternativas corretas definidas. A inserção ou o cálculo manual da pontuação não
é permitido no fluxo normal do quiz, evitando erros aritméticos e de consistência.

### VII. Simplicidade e Dependências Mínimas
O projeto DEVE priorizar a implementação mais simples que atenda ao requisito declarado e DEVE
evitar dependências, exceto quando forneçam um benefício claro e necessário. Complexidade ou
dependências adicionadas DEVEM ser justificadas na documentação ou na revisão pertinente.

### VIII. Verificação Objetiva
Cada mudança funcional DEVE ser verificável por testes automatizados ou critérios de aceitação
explícitos e objetivos. A verificação DEVE cobrir o comportamento relevante, incluindo restrições
das questões, feedback e pontuação quando afetados, para que a correção seja reproduzível.

### IX. Português (Brasil) como Idioma Padrão dos Arquivos
Arquivos destinados à leitura humana — incluindo documentação, especificações, textos exibidos ao
usuário e comentários — DEVEM usar português brasileiro por padrão. Identificadores técnicos e
formatos externos obrigatórios PODEM permanecer no idioma exigido. Outro idioma exige necessidade
explícita do projeto ou instrução explícita.

## Regras de Questões e Interação

As definições de questões DEVEM incluir enunciado, exatamente quatro alternativas e uma alternativa
correta. A aplicação DEVE impedir que o estudante selecione mais de uma resposta por questão e
DEVE manter estado suficiente para fornecer feedback e calcular a pontuação final com precisão.

## Fluxo de Desenvolvimento

As mudanças DEVEM preservar os princípios fundamentais. Antes de uma mudança ser considerada
concluída, seu autor DEVE confirmar a verificação objetiva e registrar qualquer decisão justificada
de dependência ou complexidade. Revisões DEVEM verificar a validade dos dados das questões, o
feedback ao estudante, a pontuação automática e a acessibilidade da interface sempre que essas
áreas forem alteradas.

## Governança

Esta constituição orienta as decisões de produto e desenvolvimento do Quiz Computacional e prevalece
sobre práticas informais conflitantes. Emendas DEVEM documentar a mudança proposta, sua justificativa
e seu efeito sobre funcionalidades existentes; elas entram em vigor somente após a atualização desta
constituição.

O versionamento segue o versionamento semântico: MAJOR para alterações incompatíveis de governança,
MINOR para princípios ou seções novos ou materialmente ampliados e PATCH para esclarecimentos que
preservem o significado da governança. Todo plano de implementação, revisão e decisão de lançamento
DEVE incluir uma verificação proporcional de conformidade com estes princípios. Exceções exigem
justificativa documentada e plano explícito de acompanhamento.

**Versão**: 1.1.0 | **Ratificada em**: 2026-09-26 | **Última alteração**: 2026-09-26

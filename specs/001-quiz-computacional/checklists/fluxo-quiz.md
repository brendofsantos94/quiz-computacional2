# Checklist de Requisitos: Fluxo do Quiz Computacional

**Objetivo**: Revisar a clareza, completude e consistência dos requisitos do fluxo educacional antes
da implementação.
**Criada em**: 2026-09-26
**Funcionalidade**: [spec.md](../spec.md)

**Nota**: Esta é uma checklist personalizada para revisão da qualidade dos requisitos.
**Responsabilidade da revisão**: A checklist pertence ao revisor. Marque um item como `[x]` somente
quando o critério de qualidade dos requisitos estiver satisfeito.
**Significado do marcador**: `[x]` indica que a qualidade do requisito foi revisada e aprovada; não
indica que a implementação foi concluída.

## Completude dos Requisitos

- [x] CHK001 Os requisitos definem integralmente o conteúdo, a quantidade e o nível de conhecimento das 10 questões iniciais? [Completude, Spec §RF-001]
- [x ] CHK002 As regras para enunciados e exatamente quatro alternativas estão definidas para todos os
  dados de questão? [Completude, Spec §RF-003, §RF-013]
- [ x ] CHK003 Os requisitos especificam de forma completa o que o estudante pode fazer antes e depois
  da confirmação da resposta? [Completude, Spec §RF-005 a §RF-007]
- [ x] CHK004 Os requisitos descrevem todos os campos necessários para apresentar acertos, erros e
  percentual no resultado? [Completude, Spec §RF-008 a §RF-010]
- [ x] CHK005 Os requisitos para reiniciar cobrem tanto tentativa em andamento quanto resultado final?
  [Completude, Spec §RF-011, História de Usuário 3]

## Clareza e Mensurabilidade

- [x ] CHK006 A expressão “conhecimentos básicos de Computação” está suficientemente delimitada para
  selecionar as 10 questões sem interpretações divergentes? [Clareza, Spec §RF-001]
- [x ] CHK007 A definição de resposta correta torna inequívoca a regra de uma única alternativa correta
  em cada questão? [Clareza, Spec §RF-004, Contrato de Dados]
- [x ] CHK008 O requisito de feedback define de modo suficiente quais mensagens ou indicadores tornam
  “correta” e “incorreta” compreensíveis ao estudante? [Clareza, Spec §RF-007]
- [x ] CHK009 A fórmula do percentual e sua forma de apresentação estão especificadas sem ambiguidade,
  inclusive para zero e 10 acertos? [Mensurabilidade, Spec §RF-010]
- [ x] CHK010 O termo “sem espera perceptível” possui critério observável apropriado para a experiência
  do estudante? [Ambiguidade, Plano §Metas de desempenho]

## Consistência do Fluxo

- [x ] CHK011 As regras de confirmação, bloqueio de avanço e feedback são consistentes entre requisitos,
  histórias de usuário e casos de borda? [Consistência, Spec §RF-006 a §RF-007]
- [x ] CHK012 A navegação somente para frente é consistente com todos os cenários e não deixa caminho
  implícito para revisar respostas confirmadas? [Consistência, Spec §RF-014, Esclarecimentos]
- [ x] CHK013 O reinício com confirmação é consistente com a regra de preservar a tentativa quando o
  estudante cancela? [Consistência, Spec §RF-011, História de Usuário 3]
- [ x] CHK014 O cálculo de erros como complemento de 10 é consistente com a contagem de respostas
  confirmadas exigida antes do resultado? [Consistência, Spec §RF-008 a §RF-010, Modelo de Dados]

## Cobertura de Cenários e Exceções

- [ x] CHK015 Os requisitos definem a orientação ao estudante quando tenta confirmar ou avançar sem
  resposta selecionada? [Cobertura, Casos de Borda]
- [ x] CHK016 Os requisitos definem o tratamento de dados de questões inválidos, incluindo a mensagem
  ao estudante quando o quiz não puder iniciar? [Cobertura, Spec §RF-013, Contrato de Dados]
- [x ] CHK017 Os requisitos cobrem a transição da última questão para o resultado sem criar uma questão
  adicional ou estado intermediário ambíguo? [Cobertura, Casos de Borda, Spec §RF-009]
- [ x] CHK018 Os requisitos distinguem claramente as consequências de confirmar e cancelar o reinício
  durante uma tentativa? [Cobertura, História de Usuário 3]
- [ x] CHK019 O comportamento esperado após fechar ou recarregar a página está explicitamente limitado
  ao escopo da primeira versão? [Cobertura, Premissas]

## Requisitos Não Funcionais e Premissas

- [ x] CHK020 Os requisitos de responsividade definem critérios objetivos de legibilidade, controle e
  largura para desktop e smartphone? [Clareza, Plano §Metas de desempenho]
- [ x] CHK021 Os requisitos de acessibilidade para alternativas, feedback e controles de reinício estão
  definidos para todos os meios de interação? [Lacuna]
- [x ] CHK022 A premissa de execução sem backend, banco de dados e autenticação é consistente com todas
  as histórias e entidades descritas? [Consistência, Spec §RF-012, Premissas]
- [ x] CHK023 A dependência de um arquivo JSON local especifica o comportamento esperado quando a leitura
  local for bloqueada pelo navegador? [Dependência, Plano §Plataforma-alvo]
- [x] CHK024 Os requisitos deixam claro se as 10 questões devem ser sempre exibidas na mesma ordem ou se
  a ordem pode variar a cada tentativa? [Lacuna]

## Rastreabilidade e Prontidão

- [x ] CHK025 Cada critério de sucesso está vinculado a pelo menos um requisito funcional ou cenário de
  aceitação correspondente? [Rastreabilidade, Spec §Critérios de Sucesso]
- [x] CHK026 Os critérios de sucesso de usabilidade definem público, método e tamanho de amostra para a
  meta de 90%? [Mensurabilidade, Spec §CS-006]
- [ x] CHK027 As regras do contrato de dados são rastreáveis aos requisitos de quatro alternativas e uma
  resposta correta? [Rastreabilidade, Contrato de Dados, Spec §RF-003 a §RF-004]
- [x ] CHK028 Os limites de escopo excluídos estão documentados de modo que não sejam interpretados como
  pendências obrigatórias desta versão? [Clareza, Spec §Premissas, Plano §Escopo]

## Observações

- Esta checklist avalia a redação dos requisitos, não o funcionamento da implementação.
- Itens permanecem desmarcados até a revisão do responsável.
- `$speckit-implement` pode ler o estado dos marcadores, mas não deve alterá-los.

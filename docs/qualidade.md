# 📌 Requisitos de Qualidade

Baseado em boas práticas de Engenharia de Requisitos:
- Clareza
- Testabilidade
- Atomicidade
- Consistência
- Rastreabilidade

---

# 👤 Visão do Usuário

## Usabilidade

- O usuário deve conseguir registrar um lançamento em no máximo **3 interações**
- O sistema deve apresentar feedback visual imediato após ações do usuário
- A navegação entre telas deve ser intuitiva, sem necessidade de instruções externas

## Desempenho

- O sistema deve responder ações em até **2 segundos**
- O dashboard deve carregar completamente em até **3 segundos**

## Confiabilidade

- O sistema não deve perder dados após atualização da página
- Todas as operações devem persistir corretamente no sistema

## Segurança

- O usuário deve acessar apenas seus próprios dados
- O sistema deve exigir autenticação para acesso ao dashboard

## Experiência

- O sistema deve apresentar mensagens claras de erro e sucesso
- O usuário deve entender facilmente o estado atual do sistema (saldo, gastos, etc)

---

# 👨‍💻 Visão do Desenvolvedor

## Estrutura e Manutenção

- O sistema deve ser dividido em frontend e backend
- O código deve seguir organização modular
- Cada função deve possuir responsabilidade única (princípio da atomicidade)

## Desempenho

- Evitar múltiplas requisições desnecessárias ao banco
- Implementar controle eficiente de renderização no frontend

## Segurança

- Senhas devem ser armazenadas com criptografia
- Validações devem existir tanto no frontend quanto no backend
- Dados sensíveis não devem ser expostos

## Escalabilidade

- O sistema deve permitir inclusão futura de funcionalidades sem refatoração completa
- Estrutura de dados deve suportar crescimento

## Qualidade de Código

- Código deve ser legível e documentado
- Evitar duplicação de lógica
- Seguir padrões consistentes

---

# 🧪 Visão de QA (Testador)

## Testabilidade

- Todos os requisitos devem ser mensuráveis
- Cada funcionalidade deve possuir um resultado esperado claro

## Cenários de Teste

- Deve ser possível testar:
- Cadastro de usuário
- Login
- Criação de lançamentos
- Exclusão de dados
- Navegação no sistema

## Validações

- Sistema deve impedir entrada de dados inválidos
- Sistema deve tratar erros sem quebrar a aplicação

## Casos de Erro

- Testar comportamento com:
- Campos vazios
- Dados inválidos
- Ações duplicadas
- Falhas de conexão

## Consistência

- O sistema deve manter comportamento consistente entre telas
- Dados exibidos devem ser iguais aos armazenados

---

# 🧪 CHECKLIST DE QUALIDADE

## Clareza

- [ ] O requisito está livre de termos vagos (ex: "rápido", "bonito")?
- [ ] O requisito é compreensível por qualquer membro da equipe?
- [ ] Existe ambiguidade na interpretação?

## Testabilidade

- [ ] É possível validar esse requisito com teste?
- [ ] Existe critério mensurável (tempo, quantidade, limite)?
- [ ] O resultado esperado está definido?

## Atomicidade

- [ ] O requisito trata apenas de uma funcionalidade?
- [ ] Existe uso de "e", indicando múltiplos requisitos?

## Consistência

- [ ] O requisito não contradiz outro?
- [ ] As regras de negócio estão alinhadas?

## Rastreabilidade

- [ ] O requisito está ligado a uma funcionalidade do sistema?
- [ ] Pode ser rastreado até implementação e teste?

## Completude

- [ ] O requisito possui todas as informações necessárias?
- [ ] Há ausência de dados importantes?

## Conformidade

- [ ] O requisito respeita regras de segurança?
- [ ] O requisito respeita boas práticas?
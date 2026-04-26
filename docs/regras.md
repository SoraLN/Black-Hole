# 📌 Regras do Sistema

---

# 🔐 Login

## Regras

- [x] CPF apenas por número  
- [x] Email precisa conter "@"  
- [ ] Email deve ser válido (gmail, hotmail, etc)  
- [x] Não permitir campos vazios  
- [x] Não permitir login sem cadastro prévio  
- [x] Não permitir cadastro com email repetido

---

# 📊 Dashboard

## Regras

- [ ] Não permitir criar lançamento sem valor  
- [ ] Não permitir criar lançamento sem categoria  
- [ ] Não permitir criar lançamento sem tipo (entrada ou saída)  
- [ ] Validar se o salário foi preenchido antes de iniciar o mês  
- [ ] Não permitir data inválida nos lançamentos  
- [ ] Limitar tamanho da descrição do lançamento  
- [ ] Pesquisa não pode quebrar o sistema (tratar campo vazio)  

## Ações Sensíveis

- [ ] Confirmar antes de excluir um lançamento  
- [ ] Confirmar antes de excluir um mês  
- [ ] Não permitir excluir mês anterior várias vezes seguidas  

---

# ⚙️ Configuração

## Regras

- [ ] Não permitir salvar com todos os campos vazios
- [ ] Não permitir nomes com caracteres inválidos  
- [ ] Limitar tamanho do nome do usuário  
- [ ] Cada usuário deve ter um código único  
- [ ] Não permitir alterar código de outro usuário  
- [ ] Impedir envio de dados duplicados  

## Upload de Imagem

- [ ] Validar formato da imagem (jpg, png, etc)  
- [ ] Não permitir upload de arquivos que não sejam imagem  
- [ ] Limitar tamanho da imagem enviada  

## Ações Sensíveis

- [ ] Salvar alterações apenas com confirmação  

---

# 💡 Observações

- Todas as validações devem existir no frontend e no backend  
- Mensagens de erro devem ser claras para o usuário  
- Evitar qualquer ação destrutiva sem confirmação  

---

# 🚀 Progresso de Implementação

## Login
- [] Implementado
- [x] Em andamento
- [ ] Não iniciado

## Dashboard
- [ ] Implementado
- [ ] Em andamento
- [x] Não iniciado

## Configuração
- [ ] Implementado
- [ ] Em andamento
- [x] Não iniciado
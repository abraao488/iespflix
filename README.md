# 🎬 IESPFLIX
### Plataforma de Streaming Acadêmica — Web + API REST

---

## 👥 Equipe

| # | Nome | Responsabilidade |
|---|------|-----------------|
| 1 | Joalis | Usuários e autenticação |
| 2 | Emmanuel | Conteúdos e filtros |
| 3 | Gustavo | Favoritos e assinaturas |
| 4 | Abraão | Integrações externas e validações |


---

## 📋 Sobre o Projeto

O **IESPFLIX** é uma aplicação web fullstack que simula uma plataforma de streaming, desenvolvida como projeto acadêmico. O sistema conta com uma API REST documentada via Swagger e um frontend integrado.

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Backend | Node.js / Java / Python *(ajuste conforme o projeto)* |
| Frontend | HTML + CSS + JS / React *(ajuste conforme o projeto)* |
| Banco de dados | MySQL / PostgreSQL / MongoDB *(ajuste conforme o projeto)* |
| Documentação | Swagger / OpenAPI |
| Autenticação | JWT |

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)
- Banco de dados configurado

### 1. Clone o repositório

```bash
git clone https://github.com/abraao488/iespflix.git
cd iespflix
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
PORT=3000
DATABASE_URL=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
```

### 3. Instale as dependências

```bash
# Backend
cd backend
npm install

# Frontend (em outro terminal)
cd ../frontend
npm install
```

### 4. Execute o banco de dados

```bash
npm run migrate    # roda as migrations
npm run seed       # popula com dados iniciais (opcional)
```

### 5. Inicie a aplicação

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start
```

> API disponível em: `http://localhost:3000`

---

## 📖 Documentação da API

Após iniciar o backend, acesse o Swagger em:

```
http://localhost:3000/api-docs
```

### 🔐 Autenticação — Joalis

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/auth/register` | Cadastrar usuário |
| `POST` | `/auth/login` | Login e geração de token |
| `GET` | `/auth/me` | Dados do usuário logado |

### 🎬 Conteúdos — Emmanuel

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/contents` | Listar todos os conteúdos |
| `GET` | `/contents/:id` | Buscar conteúdo por ID |
| `GET` | `/contents?genre=ação` | Filtrar por gênero |
| `POST` | `/contents` | Cadastrar conteúdo |

### ❤️ Favoritos e Assinaturas — Gustavo

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/favorites` | Listar favoritos do usuário |
| `POST` | `/favorites/:contentId` | Adicionar aos favoritos |
| `DELETE` | `/favorites/:contentId` | Remover dos favoritos |
| `GET` | `/subscriptions` | Ver planos disponíveis |
| `POST` | `/subscriptions/subscribe` | Assinar um plano |

### 🔗 Integrações e Validações — Abraão

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/external/movies` | Buscar filmes externos |
| `POST` | `/validate/content` | Validar dados de conteúdo |

---

## 🗂️ Estrutura do Projeto

```
iespflix/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── services/
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── package.json
└── README.md
```

---

## ✅ Checklist de Entrega

- [ ] Todos os integrantes cadastrados no repositório
- [ ] Endpoints distribuídos e funcionando
- [ ] Swagger/documentação atualizada
- [ ] README com instruções de execução
- [ ] Apresentação planejada com divisão de fala

---

## 📝 Observações

- A entrega via GIT será feita por **um integrante** da equipe
- A **apresentação é obrigatória** para obtenção da nota
- Cada integrante deve demonstrar **pelo menos um endpoint** na apresentação

---

<p align="center">Desenvolvido pela equipe IESPFLIX &nbsp;•&nbsp; Projeto Acadêmico IESP</p>

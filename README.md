# 🪝 Webhook Inspector

Uma aplicação moderna para capturar, inspecionar e visualizar requisições de webhook em tempo real.

## 📋 Descrição

O **Webhook Inspector** é uma plataforma que permite monitorar e analisar webhooks. Com uma API robusta e uma interface web intuitiva, você pode capturar detalhes completos de requisições de webhook como headers, body, query params e metadados.

## 🛠️ Tecnologias

### Backend
- **Fastify** - Framework HTTP de alta performance
- **Drizzle ORM** - Query builder type-safe para bancos de dados
- **PostgreSQL** - Banco de dados relacional
- **TypeScript** - Tipagem estática para segurança
- **Zod** - Validação de schemas
- **Swagger/OpenAPI** - Documentação automática de API

### Frontend
- **React** - Framework UI declarativo
- **Vite** - Build tool rápido e moderno
- **TypeScript** - Tipagem estática

### Qualidade & DevOps
- **Biome** - Linter e formatter unificado
- **Docker** - Containerização do PostgreSQL
- **pnpm** - Package manager rápido

## 📦 Pré-requisitos

- **Node.js** 18+
- **pnpm** 10.30.0+ (ou `npm install -g pnpm`)
- **Docker & Docker Compose** (para banco de dados)

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone <seu-repositorio>
cd webhook-inspector
```

### 2. Instale as dependências
```bash
pnpm install
```

### 3. Configure o banco de dados

Inicie o PostgreSQL com Docker:
```bash
cd apps/api
docker-compose up -d
```

Gere e execute as migrações:
```bash
pnpm --filter api run db:generate
pnpm --filter api run db:migrate
```

### 4. Configure variáveis de ambiente

Crie um arquivo `.env` em `apps/api`:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/webhook_db
```

## 💻 Uso

### Iniciar em modo desenvolvimento

```bash
pnpm run dev
```

Isso iniciará:
- **Backend API**: http://localhost:3333
- **Frontend Web**: http://localhost:5173

### API Endpoints

#### Listar Webhooks
```http
GET /webhooks?limit=20
```

**Parâmetros:**
- `limit` (opcional): 1-100, padrão 20

**Resposta:**
```json
[
  {
    "id": "uuid-v7",
    "method": "POST"
  }
]
```

**Documentação interativa:** http://localhost:3333/docs

### Banco de Dados

#### Acessar Drizzle Studio
```bash
pnpm --filter api run db:studio
```
Interface visual para gerenciar dados do banco.

## 📁 Estrutura do Projeto

```
webhook-inspector/
├── apps/
│   ├── api/                    # Backend Fastify + Drizzle
│   │   ├── src/
│   │   │   ├── db/              # Banco de dados e migrations
│   │   │   ├── routes/          # Rotas da API
│   │   │   ├── server.ts        # Configuração Fastify
│   │   │   └── env.ts           # Variáveis de ambiente
│   │   ├── docker-compose.yml   # PostgreSQL container
│   │   └── drizzle.config.ts    # Configuração ORM
│   │
│   └── web/                    # Frontend React + Vite
│       ├── src/
│       ├── public/
│       └── vite.config.ts
│
├── biome.json                  # Configuração de linter/formatter
├── pnpm-workspace.yaml         # Monorepo com pnpm
└── package.json                # Workspace root
```

## 📜 Scripts Disponíveis

### Root (Monorepo)
```bash
pnpm run dev       # Inicia API e Web em modo dev
pnpm run format    # Formata código com Biome
```

### Backend (`apps/api`)
```bash
pnpm --filter api run dev            # Dev server
pnpm --filter api run start          # Produção
pnpm --filter api run db:generate    # Gera migrações
pnpm --filter api run db:migrate     # Executa migrações
pnpm --filter api run db:studio      # Abre Drizzle Studio
```

### Frontend (`apps/web`)
```bash
pnpm --filter web run dev     # Dev server
pnpm --filter web run build   # Build produção
pnpm --filter web run lint    # Lint com ESLint
pnpm --filter web run preview # Preview build local
```

## 🗄️ Banco de Dados

### Tabela: webhooks

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID v7 | Identificador único |
| `method` | string | Método HTTP (POST, GET, etc) |
| `pathname` | string | Caminho da requisição |
| `ip` | string | IP do cliente |
| `statusCode` | integer | Código HTTP resposta |
| `contentType` | string | MIME type do corpo |
| `contentLength` | integer | Tamanho do corpo |
| `queryParams` | JSONB | Query string parameters |
| `headers` | JSONB | Headers HTTP |
| `body` | text | Corpo da requisição |
| `createdAt` | timestamp | Data de criação |

## 🔧 Desenvolvimento

### Parar os containers
```bash
docker-compose down
```

### Resetar banco de dados
```bash
docker-compose down -v          # Remove volumes
docker-compose up -d            # Reinicia
pnpm --filter api run db:migrate
```

## 📝 Notas

- O projeto usa **TypeScript end-to-end** para máxima segurança de tipos
- **Biome** garante código consistente e formatado
- **Drizzle Studio** oferece interface visual para BD
- A API tem documentação automática em `/docs`

## 📄 Licença

MIT (ou conforme sua preferência)

---

**Pronto para começar?** Execute `pnpm install && pnpm run dev` e visite http://localhost:3333! 🚀

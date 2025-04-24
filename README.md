# 💊 farmacia-backend

## 🇧🇷 Descrição

Este é o backend de um sistema completo de gerenciamento para uma farmácia. Ele foi desenvolvido com **Node.js**, **TypeScript**, **Express**, **Prisma ORM** e **PostgreSQL**, e conta com autenticação via **JWT**, validações com **Zod**, criptografia de senhas com **bcrypt**, envio de emails via **nodemailer**, e logging profissional com **Winston**. 

Além disso, o projeto inclui testes automatizados com **Jest** e **Supertest**, e segue boas práticas de arquitetura para separação de responsabilidades com `controllers`, `services`, `repositories` e `validators`.

## Funcionalidades

- Cadastro e login de usuários com diferentes níveis de acesso (administrador, funcionário, cliente)
- Gerenciamento de produtos, categorias e pedidos
- Envio de notificações por e-mail
- Validação e tipagem seguras
- Cobertura de testes automatizados
- Logs centralizados e detalhados

## Como rodar localmente

```bash
git clone https://github.com/seu-usuario/farmacia-backend.git
cd farmacia-backend

# Instale as dependências
npm install

# Configure o arquivo .env com suas variáveis
cp .env.example .env

# Execute as migrações e gere o cliente Prisma
npm run prisma:migrate
npm run prisma:generate

# Inicie em modo desenvolvimento
npm run dev
```

Scripts disponíveis

- `npm run dev — inicia o servidor com ts-node-dev`

- `npm run build — compila os arquivos TypeScript para JavaScript`

- `npm start — inicia o servidor com Node.js`

- `npm run prisma:studio — abre a interface visual do Prisma`

- `npm test — roda os testes com Jest`

- `npm run test:coverage — gera o relatório de cobertura de testes`

- `npm run biome:format — formata o código`

- `npm run biome:check — verifica problemas de linting`

## en Description

This is the backend of a complete pharmacy management system. It was built with **Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL**, and includes JWT authentication, validation with **Zod**, password hashing with **bcrypt**, email delivery via **nodemailer**, and professional logging using **Winston**.

The project also includes automated testing with **Jest** and **Supertest**, and follows clean architecture principles using `controllers`, `services`, `repositories`, and `validators`.

## Features

- User registration and login with role-based access (admin, employee, client)

- Product, category, and order management

- Email notifications

- Safe validation and type checking

- Automated test coverage

- Centralized and detailed logging

## How to run locally

```
git clone https://github.com/your-username/farmacia-backend.git
cd farmacia-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run migrations and generate Prisma client
npm run prisma:migrate
npm run prisma:generate

# Start in development mode
npm run dev
```

## Available Scripts

- `npm run dev — starts the server with ts-node-dev`

- `npm run build — compiles TypeScript to JavaScript`

- `npm start — starts the server with Node.js`

- `npm run prisma:studio — opens Prisma Studio`

- `npm test — runs tests with Jest`

- `npm run test:coverage — generates test coverage report`

- `npm run biome:format — formats the codebase`

- `npm run biome:check — runs lint checks`
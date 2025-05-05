# farmacia-backend

## 🇧🇷 Visão Geral

Este projeto foi desenvolvido com o objetivo de criar um **sistema completo e escalável de gerenciamento para farmácias**, oferecendo funcionalidades essenciais para o controle de produtos, categorias, pedidos e usuários com diferentes níveis de acesso. A aplicação foi construída utilizando tecnologias modernas como **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, e **PostgreSQL**.

### Propósito do Projeto

A ideia surgiu a partir da necessidade real de digitalizar processos manuais comuns em pequenas e médias farmácias, como o controle de estoque, pedidos e gestão de usuários. A aplicação resolve:

- O gerenciamento centralizado de produtos, categorias e pedidos;
- A autenticação e autorização segura de usuários com diferentes papéis (administrador, funcionário, cliente);
- O envio automático de e-mails para notificação de eventos importantes;
- A rastreabilidade por meio de logs detalhados.

### Desafios Enfrentados e Soluções

1. **Separação de responsabilidades**: no início, os controllers estavam sobrecarregados. A solução foi adotar a arquitetura limpa, com divisão entre `services` e `repositories`.

2. **Segurança de autenticação**: implementar JWT, criptografia de senhas com `bcrypt`, e validações com `Zod` trouxe robustez ao sistema.

3. **Testes automatizados**: criar testes confiáveis com `Jest` e `Supertest` exigiu modularização e simulações realistas, garantindo estabilidade em cada release.

4. **Observabilidade**: com o `Winston`, foi possível registrar logs úteis para debugging e auditoria sem comprometer a performance.

### O que ainda será implementado

- Dashboard com métricas (vendas, pedidos, produtos mais vendidos)
- Integração com sistemas de pagamento
- Upload de imagens para produtos
- Controle de estoque com alertas automáticos
- Histórico de atividades por usuário

### Como o projeto pode evoluir

Este backend já está preparado para ser acoplado a um frontend em React, Next.js ou até mesmo mobile com React Native. A arquitetura também facilita a criação de microserviços no futuro, com integração via mensageria como Kafka ou RabbitMQ.

---

## 🇺🇸 Overview

This project was created to develop a **complete and scalable pharmacy management system**, providing essential features for product control, category and order handling, and role-based user access. It was built using modern technologies like **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, and **PostgreSQL**.

### Project Purpose

The idea was born from the real need to digitize common manual processes in small and mid-sized pharmacies. This system solves:

- Centralized management of products, categories, and orders
- Secure user authentication and role-based authorization
- Automated email notifications
- Full observability with detailed logs

### Challenges and Solutions

1. **Separation of concerns**: Initially, controllers were overloaded. The solution was to adopt clean architecture with services and repositories.

2. **Authentication security**: JWT, `bcrypt` password hashing, and `Zod` validation provided robust access control.

3. **Automated testing**: Reliable testing with `Jest` and `Supertest` required good modularization and realistic mocks.

4. **Observability**: With `Winston`, we implemented a detailed logging system without compromising performance.

### Future Implementations

- Dashboard with sales and order metrics
- Integration with payment systems
- Product image upload
- Stock control with alerts
- User activity history

### How this project can grow

This backend is ready to be integrated with a frontend in React, Next.js, or mobile apps using React Native. Its architecture also allows for future microservices and messaging queue integration with Kafka or RabbitMQ.

---

## Como rodar localmente / How to run locally

```bash
git clone https://github.com/seu-usuario/farmacia-backend.git
cd farmacia-backend

# Instale as dependências / Install dependencies
npm install

# Copie o arquivo de ambiente / Setup .env
cp .env.example .env

# Execute as migrações e gere o Prisma Client / Run migrations
npm run prisma:migrate
npm run prisma:generate

# Inicie em modo de desenvolvimento / Start in development mode
npm run dev
```

---

## Scripts Disponíveis / Available Scripts

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor com ts-node-dev |
| `npm run build` | Compila os arquivos TypeScript para JavaScript |
| `npm start` | Inicia o servidor com Node.js |
| `npm run prisma:studio` | Abre a interface visual do Prisma |
| `npm test` | Executa os testes com Jest |
| `npm run test:coverage` | Gera o relatório de cobertura de testes |
| `npm run biome:format` | Formata o código fonte |
| `npm run biome:check` | Verifica problemas de linting |
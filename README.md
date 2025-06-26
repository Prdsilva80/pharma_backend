# 💊 farmacia-backend

> 🌐 API disponível em produção: [https://pharma-backend.onrender.com](https://pharma-backend.onrender.com)

---

## 🇧🇷 Visão Geral

Este projeto foi desenvolvido com o objetivo de criar um **sistema completo e escalável de gerenciamento para farmácias**, oferecendo funcionalidades essenciais para o controle de produtos, categorias, pedidos e usuários com diferentes níveis de acesso. A aplicação foi construída utilizando tecnologias modernas como **Node.js**, **TypeScript**, **Express**, **Prisma ORM** e **PostgreSQL**.

### 🎯 Propósito do Projeto

A ideia surgiu da necessidade real de digitalizar processos manuais comuns em farmácias de pequeno e médio porte. A aplicação resolve:

- O gerenciamento centralizado de produtos, categorias e pedidos;
- A autenticação e autorização segura de usuários (admin, funcionário, cliente);
- O envio automático de e-mails;
- A rastreabilidade completa por meio de logs detalhados.

### 🧠 Desafios Enfrentados e Soluções

1. **Separação de responsabilidades** com uso de `services` e `repositories` (Clean Architecture);
2. **Segurança robusta** com JWT, `bcrypt` e validações com `Zod`;
3. **Testes confiáveis** com `Jest` e `Supertest`;
4. **Observabilidade** com o logger `Winston`.

### 📌 Próximas Funcionalidades

- Dashboard com métricas de vendas
- Integração com gateways de pagamento
- Upload de imagens para produtos
- Alerta automático de estoque baixo
- Histórico de ações por usuário

### 🚀 Evolução futura

A arquitetura está preparada para integração com frontend (React, Next.js, React Native) e escalabilidade via microserviços com mensageria como Kafka ou RabbitMQ.

---

## 🇺🇸 Overview

This project was built to deliver a **complete and scalable pharmacy management system**, offering essential features for handling products, categories, orders, and role-based user access. Built with **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, and **PostgreSQL**.

### 🎯 Project Purpose

Born from a real-world need to digitize manual processes in small and mid-sized pharmacies. This app solves:

- Centralized management for products, categories, and orders;
- Secure user authentication and role-based authorization;
- Automated email notifications;
- Complete traceability through detailed logs.

### 🧠 Challenges & Solutions

1. **Separation of concerns** with `services` and `repositories` (Clean Architecture);
2. **Robust security** using JWT, `bcrypt`, and `Zod`;
3. **Reliable tests** with `Jest` and `Supertest`;
4. **Observability** using `Winston` logger.

### 📌 Upcoming Features

- Sales dashboard and KPIs
- Payment integration
- Product image uploads
- Stock level alerts
- User activity logs

### 🚀 Future Evolution

The backend is ready to integrate with React, Next.js or React Native, and easily extend into microservices using Kafka or RabbitMQ.

---

## ⚙️ Como rodar localmente / How to run locally

```bash
git clone https://github.com/Prdsilva80/pharma_backend.git
cd pharma_backend

# Instale as dependências / Install dependencies
npm install

# Copie o ambiente de exemplo / Copy environment file
cp .env.example .env

# Execute as migrações e gere o Prisma Client
npm run prisma:migrate
npm run prisma:generate

# Inicie em modo de desenvolvimento / Start development server
npm run dev

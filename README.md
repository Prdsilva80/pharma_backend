# 💊 Pharma Backend

A robust backend system for managing pharmacy operations, built with Node.js, Express, TypeScript, and Prisma ORM. This API handles user roles, medication categories, product inventory, and order processing.

---

## 🎯 Project Purpose

This project simulates a backend solution for pharmacy management. It includes role-based access control (admin, employee, client), organized modules for orders, categories, and users, and follows a clean architecture pattern with controllers, services, repositories, and DTOs.

---

## 💡 Features

- User authentication with JWT  
- Role-based access: admin, employee, client  
- Category and product management  
- Order creation and tracking  
- Clean folder structure with separation of concerns  
- Secure API design and input validation  

---

## 🚀 Live Deploy

The project is deployed and running in a production environment.  
For security reasons, the public link is not disclosed here.  
Access may be granted upon request for evaluation or collaboration purposes.

---

## 🛠️ Technologies

- Node.js  
- Express.js  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- JWT for authentication  
- Zod for validation  

---

## 🧪 Running Locally

```bash
git clone https://github.com/seuusuario/pharma_backend.git
cd pharma_backend

npm install

# Set up your .env file with DB credentials and JWT secret

npx prisma generate
npx prisma migrate dev

npm run dev
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributions

Contributions are welcome! Feel free to fork the project, submit pull requests, or open issues.

> ⚠️ This project is for portfolio and educational purposes, but it follows real-world standards and is ready for production use.

# 💊 Pharma Backend (Versão em Português)

Um sistema backend robusto para gerenciamento de operações farmacêuticas, desenvolvido com Node.js, Express, TypeScript e Prisma ORM. Esta API gerencia papéis de usuários, categorias de medicamentos, inventário de produtos e processamento de pedidos.

---

## 🎯 Propósito do Projeto

Este projeto simula uma solução backend para o gerenciamento de uma farmácia. Ele inclui controle de acesso baseado em papéis (administrador, funcionário, cliente), módulos organizados para pedidos, categorias e usuários, e segue um padrão de arquitetura limpa com controllers, services, repositórios e DTOs.

---

## 💡 Funcionalidades

- Autenticação de usuários com JWT  
- Acesso baseado em papéis: administrador, funcionário, cliente  
- Gerenciamento de categorias e produtos  
- Criação e acompanhamento de pedidos  
- Estrutura de pastas limpa com separação de responsabilidades  
- Design de API seguro e validação de entradas  

---

## 🚀 Deploy em Produção

O projeto está em produção e funcionando normalmente.  
Por motivos de segurança, o link público não está sendo divulgado.  
O acesso pode ser concedido sob solicitação para fins de avaliação ou colaboração.

---

## 🛠️ Tecnologias

- Node.js  
- Express.js  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- JWT para autenticação  
- Zod para validação  

---

## 🧪 Como Rodar Localmente

```bash
git clone https://github.com/seuusuario/pharma_backend.git
cd pharma_backend

npm install

# Configure seu arquivo .env com as credenciais do banco e o segredo JWT

npx prisma generate
npx prisma migrate dev

npm run dev
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer fork do projeto, enviar pull requests ou abrir issues.

> ⚠️ Este projeto foi desenvolvido para fins educacionais e de portfólio, mas segue padrões reais e está pronto para uso em produção.
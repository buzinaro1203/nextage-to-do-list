# 📝 Task Manager - Desafio de Estágio

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)](https://www.mysql.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Deploy-Render-red?logo=render)](https://render.com/)

**Link para o front-end:** [Task Manager](https://nextage-to-do-list-gtt6.vercel.app)
**Link para o back-end:** [Task Manager](https://nextage-to-do-list.onrender.com/)

> ⚠️ Ao iniciar a aplicação, o backend pode demorar a responder devido ao Render colocar a aplicação em _sleeping mode_.

---

## 📌 Descrição do Projeto

A aplicação **Task Manager** é uma plataforma para gerenciamento de tarefas, permitindo aos usuários criar, visualizar, editar e organizar suas tarefas com categorias associadas.

A aplicação combina:

- **Front-end:** React
- **Back-end:** Spring Boot
- **Banco de dados:** MySQL

Seguindo boas práticas de modularização, comunicação via API REST e padrões de design.

---

## 🚀 Funcionalidades

- [x] Criação de tarefas
- [x] Visualização de tarefas
- [x] Edição de tarefas
- [x] Marcação de conclusão
- [x] Exclusão de tarefas
- [x] Autenticação de usuário
- [x] Filtros e ordenação
- [x] Ferramenta de pesquisa
- [x] Deploy
- [x] Registro de data de vencimento para tarefas

---

## 🛠 Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Java Spring Boot
- **Banco de Dados:** MySQL
- **Deploy:** Vercel (frontend), Render (backend), Railway (banco de dados)
- **Outras:** Axios (consumo de API)

---

## ⚙️ Como Configurar e Executar o Projeto

### Pré-requisitos

- Java 17+ (JDK)
- Maven
- Node.js e npm
- MySQL
- Git

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/buzinaro1203/nextage-to-do-list.git
cd nextage-to-do-list

# 2. Criar o banco de dados no MySQL
CREATE DATABASE todolist;

# 3. Configurar backend
# Editar backend/todo-api/src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/todolist?useSSL=false&serverTimezone=UTC
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# 4. Instalar dependências e iniciar backend
cd backend/todo-api
mvn clean install
mvn spring-boot:run

# 5. Instalar dependências do frontend
cd ../../frontend/todo-list-project
npm install

# 6. Configurar API
# No arquivo api.js, definir BASE_URL apontando para o backend (ex.: http://localhost:8080)

# 7. Iniciar frontend
npm start
# ou
npm run dev
```

🏗 Estrutura do Projeto

Backend:

Cada entidade possui pastas separadas: Controller, Service, Repository e Model

Facilita localização de código e manutenção

Frontend:

Estrutura parcialmente modularizada

Componentes isolados das páginas principais para facilitar manutenção e reutilização

Algumas partes não seguem modularização completa devido ao tamanho da aplicação

📐 Padrões de Design

MVC (Model-View-Controller) – Backend

Service Layer Pattern – Backend

Repository Pattern – Backend

Partial Modularization / Component-Based – Frontend

💾 Persistência de Dados

Banco: MySQL

JPA + Hibernate: Mapeamento das entidades (Todo, Category) para tabelas do banco

Relacionamentos: Many-to-One entre tarefas e categorias

Camadas: Repository abstrai o acesso ao banco, Service Layer trata a lógica de negócio, garantindo código limpo e modular

⚠️ Desafios Encontrados

Problemas com network, CORS e configuração de segurança (SecurityConfig) no Spring Boot

Primeira vez lidando com essas questões, resolvido com pesquisa, persistência e testes de tentativa e erro

✨ Considerações Finais

Satisfeito com o resultado da aplicação, apesar de algumas funcionalidades ainda não implementadas:

Recuperação de senha (esqueceu sua senha)

Validação de campos no front-end (IsValid.js) para login, registro e criação de tarefas

Primeiro projeto completo com React + Spring Boot + MySQL, garantindo aprendizado significativo e entrega funcional.

<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

### Regras
- Cadastro de usuário

    - Não é permitido cadastrar mais de um usuário com o mesmo e-mail

    - Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

    - Não é permitido cadastrar tag sem nome

    - Não é permitido cadastrar mais de uma tag com o mesmo nome

    - Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

    - Não é permitido um usuário cadastrar um elogio para si

    - Não é permitido cadastrar elogios para usuários inválidos

    - O usuário precisa estar autenticado na aplicação




## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`


---
Feito com 💜 &nbsp;by VivianneMiranda com a NLW da Rocketseat 👋🏻 &nbsp;

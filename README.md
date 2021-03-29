<h1 align="center" >GitTags 👨🏻‍💻</h1>

<img src="public/gittags.png">

<br/>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-banco-de-dados">Banco de dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-cobertura-de-testes">Cobertura de testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-melhorias">Melhorias</a>

---

## 💻 Projeto

<p align="justify">
    O GitTags, é pra aquele que está sempre procurando novos projetos e curtindo aqueles que são interessantes. E gostaria de poder adicionar uma tag a um repositório para que ele possa ser encontrado facilmente. Por exemplo: encontrei um repositório chamado react e gostaria de adicionar tags <span style="background-color:purple"> typescript</span> e <span style="background-color:purple"> frontend</span>. Como o GitHub não possui essa funcionalidade, este sistema de forma simples pode ajudar nessa tarefa. <strong>A ideia é ir incrementando sempre um pouco mais </strong> 😏
</p>

---

## 📌 Tecnologias

<p align="justify">
Abaixo estão algumas das tecnologias utilizadas durante o desenvolvimento do projeto. Ainda foi visado: Organizar o diretório da nossa aplicação de forma concisa, limpa e eficiente. Escrever código limpo visando reutilização e eficiência e criar testes unitários e de integração.
</p>
<br>
<p align="center">
  <img  src="https://img.shields.io/badge/-Yarn-2C8EBB?&style=for-the-badge&logoColor=fff&logo=yarn&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-TypeScript-3178C6?&style=for-the-badge&logoColor=fff&logo=TypeScript&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Node.js-339933?&style=for-the-badge&logoColor=fff&logo=Node.js&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Jest-C21325?&style=for-the-badge&logoColor=fff&logo=Jest&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Typeorm-F37626?&style=for-the-badge&logoColor=fff&logo=Databricks&logoWidth=25"/>
</p>

---

## 🗂 Material de apoio

- [Typescript](https://www.typescriptlang.org/)
- [PostBird](https://github.com/Paxa/postbird)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Istanbul](https://istanbul.js.org/docs/tutorials/jest/)

---

## ⬇️ Como baixar

```bash
    // Clonar repositório
    $ git clone https://github.com/douglasconstancio/backend-tags.git

    // Acessar diretório
    $ cd backend-tags

    // Instalar dependências
    $ yarn

    // Realizar as migrações
    $ yarn migration:run

    // Iniciar projeto
    $ yarn dev

    // Executar testes automatizados
    $ yarn test

    // Verificar cobertura de código dos testes
    $ yarn test:coverage
```
---

## 🏦🎲 Banco de dados

Foi escolhido Postgrees 🐘 para utilização no projeto, por isso, deve-se criar um banco de dados chamado `tags`. Para auxilio, pode ser utilizado o programa Postbird, pgAdmin, Workbench entre outros similares.

Exemplo de parametrização para uso:

|    |
| ---|
| host: `localhost`
| port: `5432`          |
| username: `postgres`  |
| password: `*******`   |
| database: `postgrees` |



E executar o comando abaixo (_`'uuid-ossp'` um módulo contrib, portanto, não é carregado no servidor por padrão. Você deve carregá-lo em seu banco de dados para usá-lo_):

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

---

## 📊 Cobertura testes:

**HTML:**

<img src="public/html-tests.png">

**Terminal:**

<img src="public/terminal-tests.png">

---

## 💭 Melhorias

- Criação do banco de dados de maneira automatizada (por _script_ como a migração);
- Trazer a autenticação via API do Github para o _backend_;

---

## 🔖 Sobre

<p align="justify">
Esse projeto foi desenvolvido com base na <a href="https://github.com/magrathealabs/template-projeto-selecao/blob/master/projects/GITHUB.md"> proposta</a> de projeto da MagratheaLabs. <a href="https://magrathealabs.com/pt-br/"><img src="https://magrathealabs.com/wp-content/themes/magrathea/assets/img/apple-touch-icon.png" style="width: 14px;"></a>

</p>

---

## 👨🏻‍💻 Projeto ainda em andamento...

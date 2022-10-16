 <img alt="Repository size" src="https://img.shields.io/github/repo-size/Gabriel9Stresser/NOlagg-cnc">
  
  <a href="https://github.com/Gabriel9Stresser/NOlagg-cnc/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Gabriel9Stresser/NOlagg-cnc">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Gabriel9Stresser/NOlagg-cnc/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Gabriel9Stresser/NOlagg-cnc?style=social">
  </a>
 <br>
  <a href="https://www.linkedin.com/in/gabriel-augusto-soler-stresser-366719100/">
    <img alt="Feito por Gabriel9Stresser" src="https://img.shields.io/badge/feito%20por-Gabriel9Stresser-%237519C1">
 </a>

<h1 align="center">
    CNC 2D
</h1>

<h4 align="center"> 
	  Projeto Integrador 🚀 Em Andamento  
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

📔 NO LAGG CNC 2D


Projeto desenvolvido durante o oitavo semestre do curto de Engenharia Mecatrônica.


---

## 🎨 Layout

O layout da aplicação está em Desenvolvimento no Figma:

<a href="https://www.figma.com/file/UT1l6W7CnEmH2IiwoS1Mqa/Ignite_Lab?node-id=0%3A1">
  <img alt="Made by Gabriel9Stresser" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Web
<!-- 
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Ignite Lab" title="#IgniteLab" src="./src/assets/Web_view.png" width="375px">

  <img alt="Ignite Lab" title="#IgniteLab" src="./src/assets/web_login.png" width="400px">
</p> -->

<!-- 
<a href="https://code-lab.vercel.app/">Clique aqui para visualizar o formulário</a>

<br>

<a href="https://Gabriel9Stresser.github.io/NOlagg-cnc/">Clique aqui para visualizar o Storybook</a> -->


---

## 🚀 Como executar o projeto

Este Projeto é divido em três etapas:
1. Localhost com vite para visualizar o Formulário de Login
2. Localhost com storybook para visualizar a documentação do design system
3. Testes de componentes com [storybook interaction test](https://www.npmjs.com/package/@storybook/addon-interactions)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

**Instale a versão LTS do Node.JS** 
 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação web (Vite)

```bash

# Clone este repositório
$ git clone git@github.com:Gabriel9Stresser/NOlagg-cnc.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd NOlagg-cnc

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173

```
#### 🧭 Rodando o Storybook (Design System)

```bash

# Clone este repositório
$ git clone git@github.com:Gabriel9Stresser/NOlagg-cnc.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd NOlagg-cnc

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run storybook

# Se desejar pode executar o comando test (Só funciona quando o storybook está aberto no localhost)
$ npm run test

# A aplicação será aberta na porta:6006 - acesse http://localhost:6006

```


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Node.js](https://nodejs.org/en/)**
-   **[React](https://pt-br.reactjs.org/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Storybook](https://storybook.js.org/)**
-   **[Radix](https://www.radix-ui.com/)**
-   **[Tailwind](https://tailwindcss.com/)**
-   **[PostCSS](https://postcss.org/)**

> Veja o arquivo  [package.json](https://github.com/Gabriel9Stresser/NOlagg-cnc/blob/main/package.json)

#### [](https://github.com/Gabriel9Stresser/NOlagg-cnc#utilit%C3%A1rios)**Utilitários**

<!-- -   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ignite Lab - Design System)](https://www.figma.com/file/UT1l6W7CnEmH2IiwoS1Mqa/Ignite_Lab)** -->
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**, **[PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de Componentes:  **[MSW](https://mswjs.io/)**
-   Ícones:  **[Phosphor Icons](https://phosphoricons.com/?ref=madewithreactjs.com)**
-   Fontes:  **[Inter](https://fonts.google.com/specimen/Inter)**


---


## 💪 Como contribuir para o projeto

Este repositório está aberto a contribuições! qualquer tipo de contribuição será muito bem vinda.

Se você quer contribuir, por favor siga esses passos a seguir:

1. Indentifique alguma issue, bug ou melhoria que pode ser feita
2. Faça um fork deste repositório e clone no seu pc.
3. Run npm install.
4. Adicione suas mudanças e as teste localmente.
5. Faça commit das suas mudanças e abra um pull request.
6. Aplique quaisquer alterações propostas pelos mantedores.
7. E finalmente, it´s merge time! 😎

Obs: Se você não tem certeza de como fazer suas propostas de alterações, ou queira discutir pequenos detalhes, sinta-se livre para abrir uma issue e discutir as ideias com os mantedores.

Caso tenha qualquer duvida sobre <a href="https://docs.github.com/pt/get-started/quickstart/contributing-to-projects">como contribuir para projetos no github.</a>

---

## 🦸 Autor
 
<a href="https://github.com/Gabriel9Stresser">
 <img  src="https://avatars.githubusercontent.com/u/65667183?s=400&u=c698f4af73fd6a9161dab1769b6ab7824f014935&v=4" width="150px;" alt=""/>
 <br>
 <sub><b>Gabriel Stresser, Leonardo Leal, Augusto Sacramento e Gustavo</b></sub></a>
 

 
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-augusto-soler-stresser-366719100/)](https://www.linkedin.com/in/gabriel-augusto-soler-stresser-366719100/)[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=flat-squarew&logo=github&logoColor=white%link=https://github.com/Gabriel9Stresser)](https://github.com/Gabriel9Stresser)
<br>
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Gabriel Stresser, Leonardo Leal, Augusto Sacramento e Gustavo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabriel-augusto-soler-stresser-366719100/)

---

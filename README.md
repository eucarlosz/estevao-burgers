# 🍔 Estêvão Burger's

> Um projeto de desenvolvimento front-end que une tecnologia, identidade e propósito.

A **Estêvão Burger's** é uma landing page responsiva desenvolvida com **HTML5, CSS3 e JavaScript**, criada como parte do **Grupo Estêvão**.

Mais do que um exercício de programação, este projeto representa uma decisão pessoal: usar aquilo que estou aprendendo em tecnologia para construir projetos com contexto, identidade e significado.

---

## 🌵 Por que criei este projeto?

Durante meus estudos em desenvolvimento, percebi que muitos projetos de portfólio acabam seguindo exatamente o mesmo caminho: calculadoras, páginas genéricas, clones e interfaces construídas apenas para demonstrar determinada tecnologia.

Esses projetos são importantes para aprender, mas eu queria ir além.

Queria construir algo que, além de demonstrar minhas habilidades técnicas, tivesse uma história por trás.

Foi daí que surgiu a ideia de desenvolver projetos relacionados ao **Grupo Estêvão**, uma iniciativa pessoal inspirada na minha família e no objetivo de, através do meu desenvolvimento profissional, construir algo que no futuro também possa contribuir com meus pais e com as pessoas que fizeram parte da minha trajetória.

A Estêvão Burger's nasceu dentro dessa ideia.

Em vez de desenvolver apenas "mais uma landing page de hamburgueria", busquei criar uma marca fictícia com identidade própria, conceito visual, produtos, narrativa e referências à cultura nordestina.

O projeto também carrega uma homenagem familiar através do nome **Estêvão**, reforçando a ideia de transformar tecnologia em algo conectado às minhas próprias raízes.

---

## 💡 A ideia por trás do projeto

O objetivo não era simplesmente escrever HTML e CSS.

O desafio foi pensar como um projeto real:

- Qual seria a identidade da marca?
- Como transmitir confiança através do design?
- Como organizar corretamente uma página comercial?
- Como criar uma experiência consistente no desktop e no celular?
- Como utilizar JavaScript para adicionar comportamento à interface?
- Como transformar uma ideia simples em algo apresentável em um portfólio profissional?

A proposta visual combina uma estética moderna de hamburgueria artesanal com elementos inspirados na **cultura nordestina**, utilizando tons escuros, vinho, dourado e referências que ajudam a construir personalidade para a marca.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para consolidar conhecimentos de desenvolvimento front-end através de uma aplicação visualmente completa.

Durante sua construção, trabalhei conceitos como:

- HTML semântico;
- organização estrutural de páginas;
- CSS responsivo;
- Flexbox e Grid;
- pseudo-classes e pseudo-elementos;
- especificidade e seletores CSS;
- responsividade com Media Queries;
- manipulação do DOM;
- eventos em JavaScript;
- manipulação de classes;
- atributos HTML via JavaScript;
- acessibilidade básica;
- organização de arquivos;
- versionamento com Git;
- publicação de código no GitHub.

---

## 🛠️ Tecnologias

### HTML5

Utilizado para construir a estrutura semântica da página, trabalhando com elementos como:

`header`, `nav`, `main`, `section`, `article`, `footer` e outros elementos apropriados para cada contexto.

### CSS3

Responsável por toda a identidade visual e responsividade do projeto.

Foram utilizados conceitos como:

- Flexbox;
- CSS Grid;
- variáveis CSS;
- gradientes;
- transições;
- transformações;
- efeitos de hover;
- pseudo-elementos;
- Media Queries;
- layout responsivo.

### JavaScript

O JavaScript adiciona comportamento à interface, principalmente no sistema de navegação mobile.

Foram trabalhados conceitos como:

```javascript
document.querySelector()
document.querySelectorAll()
addEventListener()
classList.toggle()
classList.remove()
setAttribute()
forEach()
```

Além de condicionais e valores booleanos.

---

## 📱 Menu mobile

Uma das funcionalidades implementadas com JavaScript foi o menu responsivo.

Quando o usuário interage com o botão de navegação, o JavaScript controla o estado do menu através da manipulação de classes.

```javascript
botaoMenu.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});
```

O projeto também atualiza atributos ARIA e fecha automaticamente o menu quando uma opção de navegação é selecionada.

Essa implementação permitiu conectar na prática três tecnologias:

**HTML → estrutura**  
**CSS → apresentação**  
**JavaScript → comportamento**

---

## 🧩 Estrutura do projeto

```text
estevao-burgers/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── cabra-da-peste.png
    ├── logo-estevao-burgers.png
    ├── patrao.jpg
    ├── seu-estevao.jpeg
    └── x-bacon.jpg
```

A separação foi feita para manter responsabilidades claras entre estrutura, estilização, comportamento e recursos visuais.

---

## ✨ Principais características

- Design moderno e autoral
- Identidade visual inspirada na cultura nordestina
- Layout totalmente responsivo
- Menu mobile interativo
- Navegação entre seções
- Cards de produtos
- Seção institucional
- História da marca
- Avaliações
- Call to Action
- Área de contato
- Ícones SVG
- Microinterações e efeitos de hover
- Acessibilidade básica com atributos ARIA

---

## 🧠 O que aprendi

Um dos principais aprendizados deste projeto foi perceber que desenvolvimento front-end não consiste apenas em fazer uma página "ficar bonita".

Estrutura, semântica, responsividade, organização e comportamento precisam trabalhar juntos.

Também foi um projeto importante para avançar no JavaScript aplicado ao DOM.

Conceitos que antes eram estudados separadamente começaram a fazer sentido quando utilizados para resolver problemas reais da interface.

Por exemplo:

```text
Selecionar um elemento
        ↓
Escutar uma interação
        ↓
Alterar seu estado
        ↓
CSS responder ao novo estado
        ↓
Interface mudar para o usuário
```

---

## 🚀 Mais do que um projeto de estudo

A Estêvão Burger's representa a forma como quero construir meu portfólio.

Não quero apenas acumular projetos tecnicamente semelhantes aos de milhares de outros estudantes.

Quero que cada projeto represente uma evolução técnica e, sempre que possível, tenha **contexto, identidade e uma razão para existir**.

O **Grupo Estêvão** faz parte dessa visão.

É uma maneira de conectar meus estudos em tecnologia a uma motivação maior: evoluir profissionalmente, criar oportunidades e construir algo que possa gerar valor para minha família no futuro.

Por isso, este repositório não representa apenas uma landing page.

Representa uma etapa dessa construção.

---

## 📌 Status

**Versão 1.0 concluída.**

O objetivo desta versão foi desenvolver e consolidar a interface utilizando HTML, CSS e JavaScript básico.

Funcionalidades mais avançadas podem ser exploradas futuramente em novas versões, sem comprometer o objetivo original do projeto.

---

## 👨‍💻 Autor

**Carlos Eduardo da Costa Freire**

Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de software e evolução prática em programação.

GitHub: [@eucarlosz](https://github.com/eucarlosz)
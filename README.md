
# CEPEDI - Ecossistema de Aprendizado Front-end (React)

Este repositório centraliza a trajetória técnica percorrida no curso de **Desenvolvimento Front-end com React** do CEPEDI. Ele foi estruturado como um monorepo didático, permitindo a rastreabilidade da evolução desde a lógica pura até arquiteturas complexas de componentes.

## 🏗️ Estrutura e Organização do Pensamento

O projeto foi organizado de forma modular para refletir as fases críticas de construção de um software moderno:

* **Módulos de Fundamento (01 a 04):** Focam na base estrutural (Lógica, POO, HTML/CSS) e na experiência do usuário (UX/UI), garantindo que o código tenha propósito e usabilidade.
* **Módulo de Biblioteca (05 - mod5_react):** Introdução ao ecossistema React, explorando o Ciclo de Vida e o Gerenciamento de Estado inicial.
* **Módulo de Aplicação (mod5_react-task):** Onde os conceitos convergem para uma aplicação funcional, aplicando padrões de Design System (DSGov) e componentes de UI refinados.

```text
cepedi-prod/
├── mod1 a mod4/               # Base técnica: Lógica, UX, POO e Web estática
├── mod5_react/                # Laboratório de Hooks e Componentização inicial
│   ├── src/                   # Experimentos com useState e useEffect
│   └── package.json           # Dependências específicas do módulo
└── mod5_react-task/           # Sprint Final: Gerenciador de Tarefas Premium
    ├── src/components/        # Componentes atômicos (Header, UserCard, TaskArea)
    └── src/App.js             # Orquestração de estado e persistência local
```

## 🚀 Executando os Módulos de React

Caso deseje explorar as implementações de React (Módulo 5), o processo é isolado por pasta para evitar conflitos de dependências:

### 1. Preparação do Ambiente
Certifique-se de estar na raiz do projeto no seu terminal (ex: seu iMac).

### 2. Rodando o Laboratório React (`mod5_react`)
Ideal para ver os conceitos isolados de Hooks:
```bash
cd mod5_react
npm install
npm start
```

### 3. Rodando o Gerenciador de Tarefas (`mod5_react-task`)
A aplicação completa com UI institucional:
```bash
cd mod5_react-task
npm install
npm start
```

## 🛠️ Tecnologias e Padrões Destacados

* **React (Hooks API):** Uso intensivo de `useState` para controle de fluxo e estado das tarefas.
* **Arquitetura de Componentes:** Separação clara entre componentes de layout (Header), dados (UserCard) e lógica (TaskArea).
* **UI/UX Institucional:** Interface baseada no Design System do Governo Brasileiro, focando em acessibilidade e seriedade visual.
* **Persistência:** Implementação de armazenamento via `localStorage` para manutenção dos dados entre sessões.

---
**Ananda Matos** | Senior Product & UX Designer
*Desenvolvido como parte do currículo técnico do CEPEDI (2026)*.

# Front-end do Zero ao Mercado

Plataforma educacional em **pt-BR** para aprendizado de HTML, CSS e JavaScript, com foco em preparação para vagas e construção de portfólio.

## ✨ O que o projeto entrega

- Sitemap completo com páginas: Home, Trilhas, Aulas, Playground, Desafios, Projetos, Portfólio, Carreira, Recursos e Sobre/Contato.
- Conteúdo didático robusto:
  - **5 aulas de HTML**
  - **5 aulas de CSS**
  - **6 aulas de JavaScript**
- Funcionalidades sem backend:
  - Progresso salvo no navegador (`localStorage`)
  - Marcar aulas como concluídas
  - Favoritar desafios e projetos
  - Busca por assunto
  - Filtros por nível via seções e tags
  - Plano de estudo semanal automático
  - Modo escuro
- Banco de prática:
  - **30 desafios iniciantes**
  - **20 desafios intermediários**
  - **10 desafios avançados**
  - **12 projetos** do básico ao avançado com critérios de recrutador

## 🧱 Estrutura de pastas

```text
.
├── index.html
├── trilhas.html
├── aulas.html
├── playground.html
├── desafios.html
├── projetos.html
├── portfolio.html
├── carreira.html
├── recursos.html
├── sobre.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── data.js
│       ├── main.js
│       └── pages.js
└── README.md
```

## 🚀 Como rodar localmente

Como é um site estático, basta usar um servidor local:

```bash
python3 -m http.server 8000
```

Depois abra: `http://localhost:8000`

## 🧭 Plano de estudo recomendado

### 4 semanas (intensivo)
1. HTML + semântica + mini projeto
2. CSS + responsividade + landing page
3. JS + DOM + calculadora
4. Projeto final + README + deploy

### 8 semanas (equilibrado)
1-2. Fundamentos e desafios iniciantes
3-4. CSS avançando e acessibilidade
5-6. JavaScript + APIs
7-8. Portfólio e preparação para entrevistas

### 12 semanas (profundo)
1-3. Base sólida de HTML/CSS/JS
4-6. Projetos intermediários
7-9. APIs, performance e arquitetura
10-11. Projeto avançado
12. Refino de portfólio + mock interview

## 🧪 Testes básicos e padrões

- Conceitos de testes unitários e integração com exemplos simples.
- Padrões de código: lint/format, convenções de nomes e organização modular.
- Boas práticas de commits semânticos (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`).
- Simulação de entrevista com perguntas e respostas para HTML/CSS/JS.

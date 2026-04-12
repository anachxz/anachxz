window.FRONTEND_DATA = {
  tracks: [
    { id: 'html', nome: 'Trilha HTML', nivel: 'Iniciante', descricao: 'Estrutura, semântica, formulários, SEO e acessibilidade.' },
    { id: 'css', nome: 'Trilha CSS', nivel: 'Iniciante → Intermediário', descricao: 'Layout moderno, responsividade, animações e arquitetura CSS.' },
    { id: 'javascript', nome: 'Trilha JavaScript', nivel: 'Iniciante → Avançado', descricao: 'Lógica, DOM, APIs, assíncrono, performance e padrões.' },
    { id: 'ferramentas', nome: 'Ferramentas do Mercado', nivel: 'Intermediário', descricao: 'Git/GitHub, DevTools, NPM, Vite e deploy.' },
    { id: 'vagas', nome: 'Preparação para Vagas', nivel: 'Todos', descricao: 'Portfólio, entrevistas, LinkedIn, currículo e soft skills.' }
  ],
  lessons: {
    html: [
      {
        id: 'html-1',
        titulo: 'HTML01: Estrutura da página e tags essenciais',
        explicacao: 'Aprenda doctype, html, head, body, títulos, parágrafos, links e imagens com organização limpa.',
        exemplo: '<!doctype html>\n<html lang="pt-BR">\n<head><meta charset="UTF-8"><title>Meu Site</title></head>\n<body><h1>Olá mercado!</h1><p>Primeira página.</p></body>\n</html>',
        exercicios: ['Criar uma página com título, subtítulo e 2 links.', 'Adicionar imagem com texto alternativo.', 'Separar conteúdo em seções básicas.'],
        desafio: 'Criar mini página pessoal com bio, contatos e lista de habilidades.',
        checklist: ['Entendi head vs body', 'Usei headings em hierarquia', 'Adicionei link e imagem com alt']
      },
      {
        id: 'html-2',
        titulo: 'HTML02: Semântica de verdade',
        explicacao: 'Use header, nav, main, section, article, aside e footer para melhorar SEO e leitura por leitores de tela.',
        exemplo: '<main><section><h2>Posts</h2><article><h3>Título</h3></article></section></main>',
        exercicios: ['Refatorar layout antigo usando tags semânticas.', 'Adicionar nav com lista de links.', 'Criar article para notícia.'],
        desafio: 'Montar homepage de blog sem divitis.',
        checklist: ['Usei main único', 'Cada section tem heading', 'Footer contém informações finais']
      },
      {
        id: 'html-3',
        titulo: 'HTML03: Formulários completos e acessíveis',
        explicacao: 'Inputs, labels, fieldset, validação nativa e mensagens úteis para UX.',
        exemplo: '<label for="email">E-mail</label><input id="email" type="email" required aria-describedby="emailHelp">',
        exercicios: ['Criar formulário de cadastro com required.', 'Usar pattern para telefone.', 'Adicionar mensagens de ajuda com aria-describedby.'],
        desafio: 'Formulário de inscrição de evento com validação nativa.',
        checklist: ['Todos inputs têm label', 'Validação funciona', 'Teclado navega sem travar']
      },
      {
        id: 'html-4',
        titulo: 'HTML04: Tabelas, SEO e metadados',
        explicacao: 'Crie tabelas acessíveis com caption, th scope e metatags básicas para buscadores.',
        exemplo: '<table><caption>Notas</caption><tr><th scope="col">Aluno</th></tr></table>',
        exercicios: ['Criar tabela de preços.', 'Adicionar thead/tbody.', 'Inserir meta description e Open Graph básica.'],
        desafio: 'Página de documentação com tabela comparativa de planos.',
        checklist: ['Tabela possui caption', 'Usei th com scope', 'Metadados preenchidos']
      },
      {
        id: 'html-5',
        titulo: 'HTML05: Acessibilidade, ARIA e erros comuns',
        explicacao: 'Boas práticas de foco, alt, aria-label e problemas frequentes (botão dentro de botão, heading bagunçado etc).',
        exemplo: '<button aria-label="Fechar modal">×</button>',
        exercicios: ['Revisar contraste e textos de link.', 'Corrigir estrutura de heading.', 'Adicionar skip link para main.'],
        desafio: 'Auditar uma página e corrigir 10 problemas de acessibilidade.',
        checklist: ['Foco visível', 'Links descritivos', 'ARIA usado só quando necessário']
      }
    ],
    css: [
      {
        id: 'css-1',
        titulo: 'CSS01: Seletores, cascata e especificidade',
        explicacao: 'Entenda ordem de aplicação de estilos e como evitar !important desnecessário.',
        exemplo: '.card p { color: var(--muted); }',
        exercicios: ['Aplicar estilos com classe e id.', 'Comparar especificidade.', 'Remover !important de código legado.'],
        desafio: 'Estilizar card de produto mantendo CSS previsível.',
        checklist: ['Dominei seletor descendente', 'Sei calcular especificidade', 'Usei classes reutilizáveis']
      },
      {
        id: 'css-2',
        titulo: 'CSS02: Box model, display e position',
        explicacao: 'Margin, border, padding, content, position relative/absolute/fixed/sticky.',
        exemplo: '.badge { position: absolute; top: 8px; right: 8px; }',
        exercicios: ['Criar card com espaçamentos consistentes.', 'Posicionar botão flutuante.', 'Usar sticky em header.'],
        desafio: 'Layout de pricing com destaque no plano recomendado.',
        checklist: ['Usei box-sizing', 'Compreendi fluxo normal', 'Posicionamento sem quebrar layout']
      },
      {
        id: 'css-3',
        titulo: 'CSS03: Flexbox e Grid na prática',
        explicacao: 'Do alinhamento simples com Flex à criação de dashboards com Grid.',
        exemplo: '.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:16px; }',
        exercicios: ['Navbar com flex.', 'Galeria com grid.', 'Área principal com sidebar responsiva.'],
        desafio: 'Clone de landing page responsiva com grid + flex.',
        checklist: ['Alinhamento dominado', 'Grid sem gambiarra', 'Gap no lugar de margens duplicadas']
      },
      {
        id: 'css-4',
        titulo: 'CSS04: Responsividade e acessibilidade visual',
        explicacao: 'Mobile first, breakpoints estratégicos, contraste e tipografia escalável.',
        exemplo: '@media (min-width: 768px) { .cards { grid-template-columns: repeat(2,1fr); } }',
        exercicios: ['Refatorar desktop-first para mobile-first.', 'Garantir contraste WCAG AA.', 'Criar menu adaptável.'],
        desafio: 'Tela de checkout acessível para mobile e desktop.',
        checklist: ['Layout fluido', 'Texto legível', 'Sem overflow horizontal']
      },
      {
        id: 'css-5',
        titulo: 'CSS05: Variáveis, animações e arquitetura',
        explicacao: 'Custom properties, transições, animações leves, BEM e utility classes.',
        exemplo: ':root { --primary:#5b4bff; } .btn--primary { background:var(--primary); }',
        exercicios: ['Criar tema claro/escuro.', 'Animar hover de botão.', 'Renomear componentes em padrão BEM.'],
        desafio: 'Design system mini com tokens e componentes reutilizáveis.',
        checklist: ['Tokens definidos', 'Animações suaves', 'Nomenclatura consistente']
      }
    ],
    javascript: [
      {
        id: 'js-1',
        titulo: 'JS01: Fundamentos da linguagem',
        explicacao: 'Tipos, operadores, condicionais e loops para resolver problemas de lógica.',
        exemplo: 'for (let i = 0; i < 5; i++) { console.log(i); }',
        exercicios: ['Criar conversor de temperatura.', 'Validar faixa de idade.', 'Gerar tabuada com loop.'],
        desafio: 'Quiz de 5 perguntas com pontuação final.',
        checklist: ['Entendi tipos', 'Uso if/else corretamente', 'Sei usar for e while']
      },
      {
        id: 'js-2',
        titulo: 'JS02: Funções, escopo e hoisting',
        explicacao: 'Diferença entre function declaration, expression e arrow; escopo global/local/bloco.',
        exemplo: 'const soma = (a, b) => a + b;',
        exercicios: ['Refatorar funções repetidas.', 'Criar função callback simples.', 'Comparar var, let e const.'],
        desafio: 'Biblioteca utilitária de formatação de texto.',
        checklist: ['Uso funções pequenas', 'Escopo claro', 'Evito variáveis globais']
      },
      {
        id: 'js-3',
        titulo: 'JS03: Arrays e objetos modernos',
        explicacao: 'map, filter, reduce, find, destructuring e spread no dia a dia.',
        exemplo: 'const ativos = usuarios.filter(u => u.ativo).map(u => u.nome);',
        exercicios: ['Filtrar produtos em promoção.', 'Somar valores com reduce.', 'Transformar objeto usando spread.'],
        desafio: 'Gerar relatório de vendas a partir de array de pedidos.',
        checklist: ['Dominei métodos de array', 'Imutabilidade básica', 'Leitura de objeto sem erros']
      },
      {
        id: 'js-4',
        titulo: 'JS04: DOM, eventos e manipulação',
        explicacao: 'Selecionar elementos, ouvir eventos e atualizar interface sem recarregar página.',
        exemplo: "document.querySelector('#btn').addEventListener('click', () => alert('ok'));",
        exercicios: ['Criar contador com botões.', 'Validar formulário no submit.', 'Adicionar/remover classe de tema.'],
        desafio: 'Lista de tarefas com filtros (todas, concluídas, pendentes).',
        checklist: ['Uso addEventListener', 'Manipulo classes', 'Código separado em funções']
      },
      {
        id: 'js-5',
        titulo: 'JS05: localStorage, async/await e fetch',
        explicacao: 'Persistência local, consumo de API REST e tratamento de estados de loading/erro.',
        exemplo: "const dados = await fetch(url).then(r => r.json()); localStorage.setItem('items', JSON.stringify(dados));",
        exercicios: ['Salvar tema no storage.', 'Consumir API pública.', 'Mostrar spinner durante busca.'],
        desafio: 'App de clima com busca por cidade e favoritos.',
        checklist: ['Persistência implementada', 'Async sem callback hell', 'Erros tratados']
      },
      {
        id: 'js-6',
        titulo: 'JS06: Performance e boas práticas profissionais',
        explicacao: 'Debounce, throttle, modularização, clean code e padrão de commits.',
        exemplo: 'const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };',
        exercicios: ['Aplicar debounce em campo de busca.', 'Separar código em módulos.', 'Criar convenção de nomes e lint básico.'],
        desafio: 'Buscador de filmes com paginação, filtros e cache local.',
        checklist: ['Menos re-render desnecessário', 'Código organizado', 'Commits claros e atômicos']
      }
    ]
  },
  challenges: {
    iniciante: [
      'Criar página HTML com título, parágrafo e imagem acessível.',
      'Adicionar lista ordenada de metas de estudo.',
      'Criar menu de navegação com links âncora.',
      'Construir tabela simples com caption.',
      'Montar formulário de login com label e required.',
      'Criar formulário acessível de cadastro (nome, email, senha, aceite termos).',
      'Estilizar botão primário com hover.',
      'Criar card de perfil com foto, nome e descrição.',
      'Aplicar espaçamento usando box model corretamente.',
      'Reproduzir layout de duas colunas com Flexbox.',
      'Centralizar conteúdo vertical e horizontalmente.',
      'Criar galeria de 6 imagens com Grid.',
      'Criar badge de nível (iniciante/intermediário).',
      'Implementar modo escuro apenas com CSS variables.',
      'Construir clone responsivo de hero de landing page.',
      'Criar script que soma números de 1 a 100.',
      'Mostrar se número é par ou ímpar.',
      'Função que retorna maior valor de um array.',
      'Converter Celsius para Fahrenheit.',
      'Criar contador com botões + e -.',
      'Capturar valor de input e exibir na tela.',
      'Validar se campo de email está vazio.',
      'Criar lista de tarefas com adicionar item.',
      'Remover tarefa clicando em ícone.',
      'Persistir lista simples no localStorage.',
      'Filtrar nomes por inicial.',
      'Renderizar cards a partir de array de objetos.',
      'Criar relógio digital atualizado a cada segundo.',
      'Fazer cronômetro simples start/pause/reset.',
      'Criar página FAQ com acordeão básico.'
    ],
    intermediario: [
      'Refatorar página não semântica para semântica completa.',
      'Criar formulário multi-etapas com barra de progresso.',
      'Landing page completa responsiva (header, features, CTA, footer).',
      'Tela de preços com plano em destaque e acessibilidade.',
      'Clone responsivo de login com foco visível e contraste AA.',
      'Dashboard com sidebar recolhível em mobile.',
      'Criar componente tabs com JS puro.',
      'Implementar modal acessível com trap de foco.',
      'Todo list com CRUD e localStorage.',
      'Aplicar filtro por status e pesquisa na todo list.',
      'Consumir API e listar usuários com loading e erro.',
      'Paginar resultados de API manualmente.',
      'Buscador com debounce de 300ms.',
      'Gerar gráficos fake em dashboard (dados mock).',
      'Implementar carrinho de compras com subtotal e frete.',
      'Criar sistema de favoritos com armazenamento local.',
      'Montar README completo para projeto front-end.',
      'Criar página de documentação com menu lateral sticky.',
      'Criar sistema de quiz com pontuação e revisão de respostas.',
      'Deploy no GitHub Pages com domínio de projeto.'
    ],
    avancado: [
      'Criar mini SPA com rotas hash e página 404.',
      'Implementar consumo de API com paginação + cache.',
      'Criar camada de serviços para chamadas fetch.',
      'Adicionar retries exponenciais em falha de rede.',
      'Aplicar throttle em evento de scroll infinito.',
      'E-commerce básico com carrinho, cupom e persistência.',
      'Dashboard financeiro com filtros combinados e gráficos mock.',
      'Implementar arquitetura CSS escalável com BEM + utilities.',
      'Criar suite mínima de testes para funções utilitárias.',
      'Simular fluxo de PR: branch feature, commits semânticos e checklist.'
    ]
  },
  projects: [
    {
      nome: 'Página pessoal simples',
      dificuldade: 'Básico',
      objetivo: 'Apresentar perfil profissional com links e habilidades.',
      stack: 'HTML + CSS',
      layout: 'Hero com foto, seção sobre, habilidades e contato.',
      stories: ['Como recrutador, quero ver rapidamente quem é a pessoa candidata.'],
      min: ['Estrutura semântica', 'Responsivo mobile', 'Links reais para redes'],
      bonus: ['Modo escuro', 'Animação sutil em botões'],
      checklist: ['Semântica correta', 'Alt em imagem', 'Boa legibilidade'],
      qualidade: 'Responsivo, contraste AA, carregamento rápido.',
      readme: 'Inclua objetivo, preview, decisões de design e próximos passos.',
      recrutador: 'Clareza visual, organização de conteúdo e cuidado com acessibilidade.'
    },
    {
      nome: 'Landing page responsiva', dificuldade: 'Básico', objetivo: 'Converter visitantes em leads.', stack: 'HTML + CSS (Flex/Grid)',
      layout: 'Hero, benefícios, depoimentos, CTA final.', stories: ['Como visitante, quero entender valor em 10 segundos.'],
      min: ['Seções completas', 'Botão CTA funcional', 'Layout mobile-first'], bonus: ['Microinterações', 'Formulário validado'],
      checklist: ['Boa hierarquia visual', 'Sem quebrar em telas pequenas', 'Performance ok'], qualidade: 'Lighthouse acima de 85.',
      readme: 'Mostre wireframe, paleta, decisões de grid.', recrutador: 'Capacidade de construir páginas de negócio.'
    },
    {
      nome: 'Clone de login acessível', dificuldade: 'Básico', objetivo: 'Praticar formulários e UX.', stack: 'HTML + CSS + JS',
      layout: 'Cartão central com login e recuperação de senha.', stories: ['Como usuário, quero recuperar acesso facilmente.'],
      min: ['Labels, required e mensagens de erro', 'Foco visível'], bonus: ['Mostrar/ocultar senha', 'Validação em tempo real'],
      checklist: ['Teclado funciona', 'Mensagens claras', 'Responsivo'], qualidade: 'Acessibilidade e feedback instantâneo.',
      readme: 'Documente validações implementadas.', recrutador: 'Atenção à experiência de formulário.'
    },
    {
      nome: 'Portfólio profissional', dificuldade: 'Intermediário', objetivo: 'Centralizar projetos e trajetória.', stack: 'HTML + CSS + JS',
      layout: 'Home, projetos, sobre, contato.', stories: ['Como recrutador, quero avaliar projetos e impacto.'],
      min: ['6 projetos listados', 'Contato funcional (mailto/link)'], bonus: ['Filtros por tecnologia', 'Case study interno'],
      checklist: ['Narrativa clara', 'Design consistente', 'Deploy ativo'], qualidade: 'Performance e SEO técnico básico.',
      readme: 'Explique arquitetura, desafios e melhorias.', recrutador: 'Maturidade na apresentação de valor.'
    },
    {
      nome: 'Calculadora web', dificuldade: 'Básico', objetivo: 'Fixar eventos e lógica.', stack: 'JS + DOM',
      layout: 'Display + grade de botões.', stories: ['Como usuário, desejo cálculos rápidos sem erros.'],
      min: ['Operações básicas', 'Limpar display'], bonus: ['Teclado numérico', 'Histórico'],
      checklist: ['Tratamento de divisão por zero', 'Código modular'], qualidade: 'Precisão e UX fluida.',
      readme: 'Inclua casos extremos testados.', recrutador: 'Organização lógica e manejo de estado.'
    },
    {
      nome: 'Timer Pomodoro', dificuldade: 'Intermediário', objetivo: 'Gerenciar foco e pausas.', stack: 'JS + localStorage',
      layout: 'Timer principal, ciclos e estatísticas.', stories: ['Como estudante, quero acompanhar sessões de foco.'],
      min: ['Start/pause/reset', 'Salvar config de tempo'], bonus: ['Som de alerta', 'Tema customizável'],
      checklist: ['Estado consistente', 'Persistência'], qualidade: 'UX confiável em longas sessões.',
      readme: 'Documente lógica de ciclos.', recrutador: 'Capacidade de transformar regra em produto.'
    },
    {
      nome: 'Todo list avançada', dificuldade: 'Intermediário', objetivo: 'CRUD completo e filtros.', stack: 'JS + localStorage',
      layout: 'Input, filtros, lista e contador.', stories: ['Como usuário, quero priorizar e concluir tarefas.'],
      min: ['Criar/editar/excluir/concluir', 'Filtro por status'], bonus: ['Tags e busca'],
      checklist: ['Sem bugs no storage', 'Feedback visual'], qualidade: 'Usabilidade e consistência de dados.',
      readme: 'Mostre modelagem de dados.', recrutador: 'Domínio de manipulação de listas dinâmicas.'
    },
    {
      nome: 'App de clima', dificuldade: 'Intermediário', objetivo: 'Consumir API externa.', stack: 'JS + Fetch API',
      layout: 'Busca de cidade, painel de clima atual e próximos dias.', stories: ['Como usuário, quero ver previsão rápida.'],
      min: ['Busca por cidade', 'Exibir temperatura e condição'], bonus: ['Favoritos', 'Geolocalização'],
      checklist: ['Loading/erro tratados', 'Unidades claras'], qualidade: 'Resiliência a falhas de rede.',
      readme: 'Adicione instruções para chave de API.', recrutador: 'Integração com APIs e tratamento de erro.'
    },
    {
      nome: 'Buscador de filmes', dificuldade: 'Intermediário', objetivo: 'Praticar filtros e paginação.', stack: 'JS + API + debounce',
      layout: 'Campo busca, filtros, resultados em grade.', stories: ['Como usuário, quero achar filme por título e gênero.'],
      min: ['Busca + paginação', 'Detalhes em modal'], bonus: ['Favoritos e histórico'],
      checklist: ['Debounce aplicado', 'Paginação robusta'], qualidade: 'Performance na interação.',
      readme: 'Explique estratégia de paginação.', recrutador: 'Pensamento de produto e performance.'
    },
    {
      nome: 'E-commerce básico', dificuldade: 'Avançado', objetivo: 'Fluxo de compra end-to-end.', stack: 'HTML/CSS/JS + storage',
      layout: 'Catálogo, detalhe, carrinho e checkout simples.', stories: ['Como cliente, quero adicionar produtos e finalizar pedido.'],
      min: ['Carrinho persistente', 'Cálculo total'], bonus: ['Cupom de desconto', 'Ordenação de produtos'],
      checklist: ['Validação de estoque mock', 'Resumo de compra'], qualidade: 'Fluxo claro e sem travamentos.',
      readme: 'Inclua arquitetura de estados.', recrutador: 'Visão sistêmica e UX de produto.'
    },
    {
      nome: 'Dashboard de finanças', dificuldade: 'Avançado', objetivo: 'Analisar dados com filtros.', stack: 'JS + gráficos mock',
      layout: 'Cards KPI, gráfico, tabela e filtros por período.', stories: ['Como analista, quero identificar gastos por categoria.'],
      min: ['Filtro por data/categoria', 'Gráfico fake com dados mock'], bonus: ['Export CSV', 'Tema escuro'],
      checklist: ['Filtros combinados', 'Dados consistentes'], qualidade: 'Legibilidade e clareza analítica.',
      readme: 'Mostre origem dos dados e trade-offs.', recrutador: 'Maturidade em interface de dados.'
    },
    {
      nome: 'Mini SPA sem framework', dificuldade: 'Avançado', objetivo: 'Entender roteamento e estado.', stack: 'JS puro (hash router)',
      layout: 'Múltiplas rotas com componentes reutilizáveis.', stories: ['Como usuário, quero navegar sem recarregar página.'],
      min: ['Rotas home/lista/detalhe/404', 'Navegação ativa'], bonus: ['Lazy rendering', 'Cache em memória'],
      checklist: ['Router funcional', 'Código modular'], qualidade: 'Arquitetura limpa e performance.',
      readme: 'Detalhe organização por módulos.', recrutador: 'Base sólida para frameworks modernos.'
    }
  ],
  portfolio: {
    caseStudy: [
      'Problema: qual dor do usuário ou negócio você resolveu?',
      'Solução: qual abordagem adotou e por quê?',
      'Decisões: trade-offs de UX/UI, código e arquitetura.',
      'Resultados: métricas, aprendizados e próximos passos.'
    ],
    templates: {
      linkedinCurto: 'Desenvolvi [projeto] para resolver [problema]. Usei [stack], implementei [feature-chave] e aprendi [insight principal]. Deploy: [link].',
      readmeLongo: '## Contexto\nDescreva o problema e objetivo.\n## Solução\nArquitetura, decisões, funcionalidades.\n## Tecnologias\nListe stack e motivo da escolha.\n## Como rodar\nPasso a passo local.\n## Aprendizados\nPontos técnicos e de produto.\n## Próximos passos\nEvoluções planejadas.',
      bulletsAprendi: ['Aprendi a modularizar componentes e funções.', 'Melhorei acessibilidade com foco em teclado e ARIA.', 'Pratiquei deploy e documentação para recrutadores.']
    },
    checklist: [
      '3 projetos simples finalizados e com deploy.',
      '2 projetos intermediários com JavaScript forte.',
      '1 projeto avançado com arquitetura clara.',
      '1 projeto consumindo API real.',
      '1 projeto com foco em acessibilidade (WCAG AA).'
    ],
    destaque: ['Adicionar testes básicos', 'README impecável', 'Deploy estável', 'Performance medida', 'Responsividade validada']
  },
  marketTools: [
    'Git e GitHub: commits semânticos, branches feature/*, PR com checklist.',
    'DevTools: breakpoint, network waterfall, performance profile.',
    'NPM: scripts para dev, build, lint e format.',
    'Vite: setup rápido, hot reload e build otimizado.',
    'Deploy: Vercel/Netlify/GitHub Pages com pipeline mínimo.',
    'README profissional: contexto, setup, evidências (prints/gifs) e roadmap.'
  ],
  testsAndPatterns: {
    testes: [
      'Conceito: teste unitário verifica função isolada com entrada/saída esperada.',
      'Exemplo: função soma deve retornar 4 quando recebe 2 e 2.',
      'Conceito: teste de integração verifica fluxo entre módulos.',
      'Exemplo: adicionar tarefa deve atualizar DOM e localStorage.'
    ],
    padroes: [
      'Lint/format: ESLint + Prettier para consistência automática.',
      'Nomes: funções em verbo (criarTarefa), componentes em PascalCase.',
      'Organização: separar data, UI, estado e utilitários.',
      'Commits: feat/fix/docs/refactor/test/chore com escopo.'
    ],
    commits: ['feat(aulas): adicionar checklist por módulo', 'fix(playground): corrigir reset de preview', 'docs(readme): incluir guia de estudo 12 semanas']
  },
  career: {
    roadmap: ['Fundamentos web', 'Layout e responsividade', 'JavaScript sólido', 'Projetos reais', 'Ferramentas e deploy', 'Portfólio e entrevistas'],
    softSkills: ['Comunicação clara', 'Gestão de tempo', 'Colaboração em PR', 'Mentalidade de produto', 'Aprendizado contínuo'],
    interview: [
      { pergunta: 'Qual a diferença entre display: none e visibility: hidden?', resposta: 'display:none remove do fluxo; visibility:hidden mantém espaço, só oculta visualmente.' },
      { pergunta: 'Quando usar semântica HTML?', resposta: 'Sempre que existir tag apropriada; melhora acessibilidade, SEO e manutenção.' },
      { pergunta: 'Explique map/filter/reduce com exemplo prático.', resposta: 'map transforma, filter filtra, reduce agrega dados; útil para listas e dashboards.' },
      { pergunta: 'Como tratar erros em fetch?', resposta: 'Usar try/catch, verificar response.ok, mostrar fallback para usuário e log técnico.' },
      { pergunta: 'O que é debounce e quando usar?', resposta: 'Atrasar execução repetitiva; ideal para busca e resize.' }
    ],
    simulacao: [
      'Desafio 1 (20min): construir card responsivo com BEM.',
      'Desafio 2 (30min): implementar CRUD simples de tarefas.',
      'Desafio 3 (25min): consumir API e exibir paginação básica.',
      'Desafio 4 (15min): revisar PR com checklist de qualidade.'
    ]
  },
  studyPlans: {
    '4': [
      'Semana 1: HTML + semântica + mini projeto pessoal.',
      'Semana 2: CSS (box model, flex, grid) + landing page.',
      'Semana 3: JS fundamentos + DOM + calculadora.',
      'Semana 4: Projeto final simples + README + deploy.'
    ],
    '8': [
      'Semanas 1-2: HTML/CSS base + desafios iniciantes.',
      'Semanas 3-4: Responsividade + acessibilidade + projeto clone login.',
      'Semanas 5-6: JavaScript, storage e fetch + app de clima.',
      'Semanas 7-8: Portfólio, GitHub e simulação de entrevista.'
    ],
    '12': [
      'Semanas 1-3: Fundamentos sólidos (HTML/CSS/JS).',
      'Semanas 4-6: Projetos intermediários + desafios técnicos.',
      'Semanas 7-9: APIs, performance e arquitetura.',
      'Semanas 10-11: Projeto avançado (dashboard ou mini SPA).',
      'Semana 12: Refino de portfólio, currículo, LinkedIn e mock interviews.'
    ]
  }
};

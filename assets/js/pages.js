(function () {
  const d = window.FRONTEND_DATA;

  function renderHome() {
    const tracks = document.getElementById('homeTracks');
    if (tracks) {
      tracks.innerHTML = d.tracks
        .map((t) => `<article class="card" data-search="${t.nome} ${t.descricao} ${t.nivel}"><span class="badge">${t.nivel}</span><h3>${t.nome}</h3><p>${t.descricao}</p></article>`)
        .join('');
    }

    const projectWeek = document.getElementById('projectWeek');
    if (projectWeek) {
      const p = d.projects[10];
      projectWeek.innerHTML = `<h3>${p.nome}</h3><p>${p.objetivo}</p><p><strong>Stack:</strong> ${p.stack}</p><p><strong>Recrutador quer ver:</strong> ${p.recrutador}</p>`;
    }

    const challengeDay = document.getElementById('challengeDay');
    if (challengeDay) {
      challengeDay.innerHTML = `<h3>Desafio do dia</h3><p>${d.challenges.intermediario[13]}</p>`;
    }
  }

  function renderTracks() {
    const el = document.getElementById('trackList');
    if (!el) return;
    el.innerHTML = d.tracks
      .map((t) => `<article class="card" data-search="${t.nome} ${t.descricao}"><h3>${t.nome}</h3><p>${t.descricao}</p><div class="badge">${t.nivel}</div></article>`)
      .join('');

    const tools = document.getElementById('marketTools');
    if (tools) {
      tools.innerHTML = d.marketTools.map((t) => `<li>${t}</li>`).join('');
    }
  }

  function lessonCard(lesson) {
    const done = window.APP.state.completed.includes(lesson.id);
    return `<article class="lesson-item" data-search="${lesson.titulo} ${lesson.explicacao}">
      <h4>${lesson.titulo}</h4>
      <p>${lesson.explicacao}</p>
      <details><summary>Exemplo prático</summary><pre>${lesson.exemplo.replace(/</g, '&lt;')}</pre></details>
      <details><summary>Exercícios guiados</summary><ul class="checklist">${lesson.exercicios.map((e) => `<li>${e}</li>`).join('')}</ul></details>
      <p><strong>Desafio final:</strong> ${lesson.desafio}</p>
      <p><strong>Checklist aprendido:</strong></p>
      <ul class="checklist">${lesson.checklist.map((c) => `<li>${c}</li>`).join('')}</ul>
      <div class="inline-actions">
        <button data-lesson-id="${lesson.id}" onclick="APP.markLesson('${lesson.id}')">${done ? 'Concluída ✓' : 'Marcar como concluída'}</button>
        <button data-fav-id="${lesson.id}" onclick="APP.toggleFavorite('${lesson.id}')">${window.APP.isFavorite(lesson.id) ? '★ Favoritado' : '☆ Favoritar'}</button>
      </div>
    </article>`;
  }

  function renderLessons() {
    const wrap = document.getElementById('lessonModules');
    if (!wrap) return;
    wrap.innerHTML = ['html', 'css', 'javascript']
      .map((key) => {
        const titulo = key === 'javascript' ? 'JavaScript' : key.toUpperCase();
        return `<section class="card"><h3>${titulo}</h3><div class="lesson-list">${d.lessons[key].map(lessonCard).join('')}</div></section>`;
      })
      .join('');
  }

  function challengeItem(level, text, idx) {
    const id = `ch-${level}-${idx}`;
    const tips = {
      iniciante: 'Foque em estrutura limpa, semântica e comportamento esperado.',
      intermediario: 'Quebre em subtarefas, valide edge cases e revise acessibilidade.',
      avancado: 'Documente decisões, trate erros e pense em escalabilidade.'
    };
    return `<article class="challenge-item" data-search="${level} ${text}">
      <span class="badge">${level}</span>
      <h4>${text}</h4>
      <p><strong>Requisitos:</strong> implementar a solução com código limpo e responsivo.</p>
      <p><strong>Critérios de aceite:</strong> funcional, acessível por teclado, sem erros no console.</p>
      <p><strong>Dicas:</strong> ${tips[level]}</p>
      <details><summary>Solução comentada</summary><p>Planeje HTML semântico, estilize com classes reutilizáveis e adicione JS modular por responsabilidade.</p></details>
      <div class="inline-actions"><button data-fav-id="${id}" onclick="APP.toggleFavorite('${id}')">${window.APP.isFavorite(id) ? '★ Favoritado' : '☆ Favoritar'}</button></div>
    </article>`;
  }

  function renderChallenges() {
    const el = document.getElementById('challengeModules');
    if (!el) return;
    el.innerHTML = ['iniciante', 'intermediario', 'avancado']
      .map((level) => `<section class="card"><h3>${level[0].toUpperCase() + level.slice(1)} (${d.challenges[level].length})</h3><div class="challenge-list">${d.challenges[level].map((c, i) => challengeItem(level, c, i + 1)).join('')}</div></section>`)
      .join('');
  }

  function projectCard(p, index) {
    const id = `proj-${index + 1}`;
    return `<article class="project-item" data-search="${p.nome} ${p.stack} ${p.dificuldade}">
      <span class="badge">${p.dificuldade}</span>
      <h4>${p.nome}</h4>
      <p><strong>Objetivo:</strong> ${p.objetivo}</p>
      <p><strong>Stack:</strong> ${p.stack}</p>
      <p><strong>Layout sugerido:</strong> ${p.layout}</p>
      <p><strong>User story:</strong> ${p.stories.join(' ')}</p>
      <p><strong>Requisitos mínimos:</strong></p><ul class="checklist">${p.min.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p><strong>Requisitos bônus:</strong></p><ul class="checklist">${p.bonus.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p><strong>Checklist de entrega:</strong></p><ul class="checklist">${p.checklist.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p><strong>Critérios de qualidade:</strong> ${p.qualidade}</p>
      <p><strong>Sugestão README/print:</strong> ${p.readme}</p>
      <p><strong>O que o recrutador quer ver:</strong> ${p.recrutador}</p>
      <p><strong>Deploy sugerido:</strong> Vercel, Netlify ou GitHub Pages.</p>
      <button data-fav-id="${id}" onclick="APP.toggleFavorite('${id}')">${window.APP.isFavorite(id) ? '★ Favoritado' : '☆ Favoritar'}</button>
    </article>`;
  }

  function renderProjects() {
    const el = document.getElementById('projectModules');
    if (!el) return;
    el.innerHTML = d.projects.map(projectCard).join('');
  }

  function renderPortfolio() {
    const caseEl = document.getElementById('caseStudySteps');
    if (caseEl) caseEl.innerHTML = d.portfolio.caseStudy.map((i) => `<li>${i}</li>`).join('');

    const checklistEl = document.getElementById('portfolioChecklist');
    if (checklistEl) checklistEl.innerHTML = d.portfolio.checklist.map((i) => `<li>${i}</li>`).join('');

    const destaqueEl = document.getElementById('portfolioDestaque');
    if (destaqueEl) destaqueEl.innerHTML = d.portfolio.destaque.map((i) => `<li>${i}</li>`).join('');

    const templates = document.getElementById('portfolioTemplates');
    if (templates) {
      templates.innerHTML = `<div class="kpi"><strong>LinkedIn (curto)</strong><span>${d.portfolio.templates.linkedinCurto}</span></div>
      <div class="kpi"><strong>README (longo)</strong><span>${d.portfolio.templates.readmeLongo}</span></div>
      <div class="kpi"><strong>Bullets do que aprendi</strong><span>${d.portfolio.templates.bulletsAprendi.join(' | ')}</span></div>`;
    }
  }

  function renderCareer() {
    const rd = document.getElementById('roadmapList');
    if (rd) rd.innerHTML = d.career.roadmap.map((i) => `<li>${i}</li>`).join('');

    const sf = document.getElementById('softSkillsList');
    if (sf) sf.innerHTML = d.career.softSkills.map((i) => `<li>${i}</li>`).join('');

    const qa = document.getElementById('interviewList');
    if (qa) qa.innerHTML = d.career.interview.map((q) => `<article class="card"><h4>${q.pergunta}</h4><p>${q.resposta}</p></article>`).join('');

    const sim = document.getElementById('simulacaoList');
    if (sim) sim.innerHTML = d.career.simulacao.map((i) => `<li>${i}</li>`).join('');

    const test = document.getElementById('testesList');
    if (test) test.innerHTML = d.testsAndPatterns.testes.map((i) => `<li>${i}</li>`).join('');

    const pat = document.getElementById('padroesList');
    if (pat) pat.innerHTML = d.testsAndPatterns.padroes.map((i) => `<li>${i}</li>`).join('');

    const cmt = document.getElementById('commitsList');
    if (cmt) cmt.innerHTML = d.testsAndPatterns.commits.map((i) => `<li><code>${i}</code></li>`).join('');
  }

  function renderResources() {
    const el = document.getElementById('resourcesList');
    if (!el) return;
    const items = [
      'Cheatsheet HTML semântico e formulários acessíveis.',
      'Cheatsheet CSS (Flexbox + Grid + media queries).',
      'Cheatsheet JS (arrays, objetos, async/await).',
      'Extensões: ESLint, Prettier, Live Server, Error Lens.',
      'Links úteis: MDN, web.dev, A11Y Project, Can I Use.'
    ];
    el.innerHTML = items.map((i) => `<li>${i}</li>`).join('');
  }

  function setupPlayground() {
    const run = document.getElementById('runCode');
    if (!run) return;
    const html = document.getElementById('codeHtml');
    const css = document.getElementById('codeCss');
    const js = document.getElementById('codeJs');
    const frame = document.getElementById('previewFrame');

    const defaults = {
      html: '<div class="box"><h2>Olá, Front-end!</h2><button id="btn">Clique</button><p id="msg"></p></div>',
      css: 'body{font-family:sans-serif;padding:24px}.box{border:1px solid #ddd;padding:16px;border-radius:12px}button{background:#5b4bff;color:#fff;border:none;padding:8px 12px;border-radius:8px}',
      js: "document.querySelector('#btn').addEventListener('click',()=>{document.querySelector('#msg').textContent='Você executou JS com sucesso!';});"
    };

    function mount() {
      const doc = `<html><head><style>${css.value}</style></head><body>${html.value}<script>${js.value}<\/script></body></html>`;
      frame.srcdoc = doc;
    }

    document.getElementById('resetCode').addEventListener('click', () => {
      html.value = defaults.html;
      css.value = defaults.css;
      js.value = defaults.js;
      mount();
    });

    document.getElementById('solutionCode').addEventListener('click', () => {
      html.value = '<main><h1>Mini Todo</h1><input id="task"><button id="add">Adicionar</button><ul id="list"></ul></main>';
      css.value = 'body{font-family:Arial;padding:20px}li{margin:.4rem 0}';
      js.value = "const tasks=[];add.onclick=()=>{if(task.value){tasks.push(task.value);list.innerHTML=tasks.map(t=>`<li>${t}</li>`).join('');task.value='';}};";
      mount();
    });

    run.addEventListener('click', mount);
    html.value = defaults.html;
    css.value = defaults.css;
    js.value = defaults.js;
    mount();
  }

  renderHome();
  renderTracks();
  renderLessons();
  renderChallenges();
  renderProjects();
  renderPortfolio();
  renderCareer();
  renderResources();
  setupPlayground();
})();

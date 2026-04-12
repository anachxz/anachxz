(function () {
  const key = {
    completed: 'fzm_completed_lessons',
    favorites: 'fzm_favorites',
    theme: 'fzm_theme'
  };

  const state = {
    completed: JSON.parse(localStorage.getItem(key.completed) || '[]'),
    favorites: JSON.parse(localStorage.getItem(key.favorites) || '[]')
  };

  function save() {
    localStorage.setItem(key.completed, JSON.stringify(state.completed));
    localStorage.setItem(key.favorites, JSON.stringify(state.favorites));
  }

  function toggleInList(list, item) {
    const idx = list.indexOf(item);
    if (idx >= 0) list.splice(idx, 1);
    else list.push(item);
    save();
  }

  function isFavorite(id) {
    return state.favorites.includes(id);
  }

  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((a) => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  function setTheme() {
    const saved = localStorage.getItem(key.theme);
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem(key.theme, current);
    });
  }

  function setupSearch() {
    const input = document.getElementById('globalSearch');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      document.querySelectorAll('[data-search]').forEach((item) => {
        const text = item.getAttribute('data-search').toLowerCase();
        item.classList.toggle('hidden', q && !text.includes(q));
      });
    });
  }

  function updateProgressBar() {
    const totalLessons = Object.values(window.FRONTEND_DATA.lessons).flat().length;
    const done = state.completed.length;
    const pct = Math.min(100, Math.round((done / totalLessons) * 100));
    document.querySelectorAll('[data-progress-bar]').forEach((bar) => {
      bar.style.width = `${pct}%`;
    });
    document.querySelectorAll('[data-progress-label]').forEach((label) => {
      label.textContent = `${done}/${totalLessons} aulas concluídas (${pct}%)`;
    });
  }

  function markLesson(id) {
    toggleInList(state.completed, id);
    updateProgressBar();
    document.querySelectorAll(`[data-lesson-id="${id}"]`).forEach((btn) => {
      const done = state.completed.includes(id);
      btn.textContent = done ? 'Concluída ✓' : 'Marcar como concluída';
    });
  }

  function toggleFavorite(id) {
    toggleInList(state.favorites, id);
    document.querySelectorAll(`[data-fav-id="${id}"]`).forEach((btn) => {
      btn.textContent = isFavorite(id) ? '★ Favoritado' : '☆ Favoritar';
    });
  }

  function setupAutoPlan() {
    const form = document.getElementById('studyPlanForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const hours = Number(document.getElementById('hoursWeek').value) || 0;
      const weeks = hours <= 6 ? '12' : hours <= 10 ? '8' : '4';
      const box = document.getElementById('studyPlanResult');
      const list = window.FRONTEND_DATA.studyPlans[weeks]
        .map((i) => `<li>${i}</li>`)
        .join('');
      box.innerHTML = `<h4>Plano recomendado (${weeks} semanas)</h4><ul class="checklist">${list}</ul>`;
    });
  }

  window.APP = {
    state,
    markLesson,
    toggleFavorite,
    isFavorite,
    updateProgressBar
  };

  setActiveNav();
  setTheme();
  setupSearch();
  setupAutoPlan();
  updateProgressBar();
})();

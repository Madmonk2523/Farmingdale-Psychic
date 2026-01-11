const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

const inlineTargets = document.querySelectorAll('[data-image]');
if (inlineTargets.length) {
  fetch('data-uris.json')
    .then(r => (r.ok ? r.json() : null))
    .then(map => {
      if (!map) return;
      inlineTargets.forEach(img => {
        const uri = map[img.dataset.image];
        if (uri) img.src = uri;
      });
    })
    .catch(() => {});
}

import { initBootSequence } from './boot.js';
import { initNavigation } from './navigation.js';
import { initParticles } from './particles.js';
import { initTransitions } from './transition.js';
import { initGallery } from './gallery.js';
import { initTyping } from './typing.js';
import { initProjects, projectCatalog } from './projects.js';
import { initTerminal } from './terminal.js';

const root = document.documentElement;

const state = {
  activeModule: 'activity',
  cursor: { x: 0, y: 0 },
};

const cursorEl = document.querySelector('.cursor');
const modalRoot = document.getElementById('modal-root');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

function updateCursorPosition(event) {
  state.cursor.x = event.clientX;
  state.cursor.y = event.clientY;
  cursorEl.style.left = `${state.cursor.x}px`;
  cursorEl.style.top = `${state.cursor.y}px`;
}

function bindCursorInteractions() {
  window.addEventListener('mousemove', updateCursorPosition);
  document.querySelectorAll('a, button, .signal-node, .gallery-card, .project-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorEl.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursorEl.classList.remove('is-hover'));
  });
}

function openCertificationPreview(event) {
  const button = event.currentTarget;
  const image = button.dataset.image;
  const title = button.dataset.title;
  if (!modalRoot || !modalContent) return;
  modalRoot.classList.add('open');
  modalRoot.setAttribute('aria-hidden', 'false');
  modalContent.innerHTML = `
    <h3>${title}</h3>
    <img src="${image}" alt="${title} preview" style="width:100%; border-radius:16px; border:1px solid rgba(255,255,255,0.1); margin-top:0.8rem;" />
  `;
}

function closeModal() {
  if (!modalRoot) return;
  modalRoot.classList.remove('open');
  modalRoot.setAttribute('aria-hidden', 'true');
}

function initApp() {
  bindCursorInteractions();
  initBootSequence();
  initNavigation();
  initParticles();
  initTransitions();
  initGallery();
  initTyping();
  initProjects();
  initTerminal(projectCatalog);
  document.body.classList.remove('cursor-hidden');

  document.querySelectorAll('.cert-view').forEach((button) => {
    button.addEventListener('click', openCertificationPreview);
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalRoot) {
    modalRoot.addEventListener('click', (event) => {
      if (event.target === modalRoot) closeModal();
    });
  }

  window.addEventListener('scroll', () => {
    root.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }, { passive: true });
}

window.addEventListener('DOMContentLoaded', initApp);

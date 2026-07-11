const bootOutput = document.getElementById('boot-output');
const progressBar = document.getElementById('boot-progress-bar');
const bootScreen = document.getElementById('boot-screen');
const landingScreen = document.getElementById('landing-screen');
const appShell = document.getElementById('app-shell');

const lines = [
  'INITIALIZING...',
];

const directActivityView = new URLSearchParams(window.location.search).get('view') === 'activity';

function showDirectActivityView() {
  bootScreen?.classList.add('hidden');
  landingScreen?.classList.add('hidden');
  appShell?.classList.remove('hidden');
  const footer = document.querySelector('.footer');
  footer?.classList.remove('hidden');
}

export function initBootSequence() {
  if (directActivityView) {
    sessionStorage.setItem('seenBoot', '1');
    showDirectActivityView();
    return;
  }

  const seenBoot = sessionStorage.getItem('seenBoot');
  if (seenBoot) {
    bootScreen.classList.add('hidden');
    landingScreen.classList.remove('hidden');
    return;
  }

  let dots = 0;
  bootOutput.innerHTML = `<div>INITIALIZING</div>`;
  const interval = setInterval(() => {
    dots = (dots + 1) % 4;
    bootOutput.innerHTML = `<div>INITIALIZING${'.'.repeat(dots)}</div>`;
  }, 400);

  setTimeout(() => {
    clearInterval(interval);
    completeBoot();
  }, 2000);

  function completeBoot() {
    sessionStorage.setItem('seenBoot', '1');
    bootScreen.classList.add('hidden');
    landingScreen.classList.remove('hidden');
  }
}

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const moduleTitle = document.getElementById('module-title');
const modules = Array.from(document.querySelectorAll('.module'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const footerLinks = Array.from(document.querySelectorAll('.footer a[data-module]'));
const appShell = document.getElementById('app-shell');
const footer = document.querySelector('.footer');
const landingScreen = document.getElementById('landing-screen');
const transitionOverlay = document.getElementById('transition-overlay');

const moduleMap = {
  profile: 'Profile',
  activity: 'Activity Log',
  transmission: 'Transmission',
  flashbacks: 'Flashbacks',
  habits: 'Habits',
  terminal: 'Terminal Shell',
};

function activateActivityModule() {
  setActiveModule('activity');
  sideMenu?.classList.remove('open');
  menuToggle?.classList.remove('active');
}

function returnToInitScreen() {
  if (!appShell || !footer || !landingScreen || !transitionOverlay) return;
  const heroImage = document.querySelector('.landing-media img');

  if (heroImage) {
    heroImage.style.transition = 'none';
    heroImage.style.transform = 'scale(100)';
    heroImage.style.filter = 'brightness(3) blur(4px)';
  }

  transitionOverlay.style.background = 'transparent';
  transitionOverlay.classList.add('active');

  appShell.classList.add('hidden');
  footer.classList.add('hidden');
  landingScreen.classList.remove('hidden');

  if (heroImage) {
    requestAnimationFrame(() => {
      heroImage.style.transition = 'transform 1.2s cubic-bezier(0.15, 0.85, 0.15, 1), filter 1.2s ease';
      heroImage.style.transform = 'scale(1)';
      heroImage.style.filter = '';
    });
  }

  setTimeout(() => {
    transitionOverlay.classList.remove('active');
    transitionOverlay.style.background = '';
  }, 1000);
}

function setActiveModule(moduleName) {
  modules.forEach((module) => {
    module.classList.toggle('active', module.dataset.module === moduleName);
  });
  navItems.forEach((button) => {
    button.classList.toggle('active', button.dataset.module === moduleName);
  });
  moduleTitle.textContent = moduleMap[moduleName] || 'Activity Log';
  moduleTitle.classList.remove('is-switching');
  void moduleTitle.offsetWidth;
  moduleTitle.classList.add('is-switching');
}

export function initNavigation() {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('open');
  });

  const activate = (target) => {
    const moduleName = target.dataset.module || 'activity';
    if (target.classList.contains('nav-item--muted')) {
      returnToInitScreen();
      return;
    }
    setActiveModule(moduleName);
    sideMenu.classList.remove('open');
    menuToggle.classList.remove('active');
  };

  navItems.forEach((button) => button.addEventListener('click', () => activate(button)));
  footerLinks.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    activate(link);
  }));

  setActiveModule('activity');
}

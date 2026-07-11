const enterButton = document.getElementById('enter-button');
const transitionOverlay = document.getElementById('transition-overlay');
const landingScreen = document.getElementById('landing-screen');
const appShell = document.getElementById('app-shell');
const footer = document.querySelector('.footer');
const heroImage = document.querySelector('.landing-media img');

export function initTransitions() {
  enterButton.addEventListener('click', () => {
    transitionOverlay.style.background = 'transparent';
    transitionOverlay.classList.add('active');
    
    if (heroImage) {
      heroImage.style.transition = 'transform 1.5s cubic-bezier(0.8, 0, 0.2, 1), filter 1.5s ease';
      heroImage.style.transform = 'scale(100)';
      heroImage.style.filter = 'brightness(3) blur(4px)';
    }

    setTimeout(() => {
      landingScreen.classList.add('hidden');
      appShell.classList.remove('hidden');
      footer.classList.remove('hidden');
      transitionOverlay.classList.remove('active');
      transitionOverlay.style.background = '';
      if (heroImage) {
        heroImage.style.transform = '';
        heroImage.style.filter = '';
      }
    }, 1000);
  });
}

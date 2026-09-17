const flashbackSources = [
  './images/fb0.png', './images/fb1.jpeg', './images/fb2.jpeg',
  './images/fb3.jpeg', './images/fb4.jpeg', './images/fb5.jpeg',
  './images/fb6.jpeg', './images/fb7.jpeg', './images/fb8.jpeg',
  './images/fb9.jpeg', './images/fb10.jpeg', './images/fb11.jpeg',
  './images/fb12.jpeg', './images/fb13.jpeg', './images/fb14.jpeg',
  './images/fb16.jpeg', './images/fb17.jpeg', './images/fb18.jpeg',
  './images/fb19.jpeg', './images/fb20.jpeg', './images/fb21.jpeg',
  './images/fb22.jpeg',
];

const shuffle = (items) => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
};

const firstFlashback = './images/fb2.jpeg';
const galleryItems = [firstFlashback, ...shuffle(flashbackSources.filter((src) => src !== firstFlashback))]
  .map((src, index) => ({ title: `img${index + 1}`, src }));

let currentIndex = 0;
let dialAngle = 0;
let isFlipping = false;

export function initGallery() {
  const container = document.getElementById('flashback-shell') || document.querySelector('[data-module="flashbacks"] .flashback-shell');
  if (!container) return;

  container.innerHTML = `
    <div class="flashback-container">
      <div class="flashback-viewport">
        <div class="flashback-card" id="flashback-card">
          <img id="flashback-img" src="${galleryItems[0].src}" alt="${galleryItems[0].title}" />
          <span class="flashback-label" id="flashback-label">${galleryItems[0].title}</span>
        </div>
      </div>

      <div class="flashback-dial-wrapper">
        <div class="flashback-dial" id="flashback-dial">
          <div class="dial-core">
            <div class="dial-knob"></div>
          </div>
        </div>
        <div class="dial-controls">
          <button class="dial-btn" id="dial-up-btn" aria-label="Previous">▲</button>
          <button class="dial-btn" id="dial-down-btn" aria-label="Next">▼</button>
        </div>
      </div>
    </div>
  `;

  function goToIndex(newIndex, direction = 1) {
    if (isFlipping) return;
    if (newIndex < 0) newIndex = galleryItems.length - 1;
    if (newIndex >= galleryItems.length) newIndex = 0;
    if (newIndex === currentIndex) return;

    isFlipping = true;
    const card = document.getElementById('flashback-card');
    const img = document.getElementById('flashback-img');
    const label = document.getElementById('flashback-label');
    const dial = document.getElementById('flashback-dial');

    const stepAngle = 360 / galleryItems.length;
    dialAngle -= direction * stepAngle;
    if (dial) {
      dial.style.transform = `rotate(${dialAngle}deg)`;
    }

    const exitClass = direction > 0 ? 'slide-out-next' : 'slide-out-prev';
    const enterClass = direction > 0 ? 'slide-in-next' : 'slide-in-prev';

    card.classList.add(exitClass);

    setTimeout(() => {
      currentIndex = newIndex;
      const item = galleryItems[currentIndex];
      img.src = item.src;
      img.alt = item.title;
      label.textContent = item.title;

      card.classList.remove(exitClass);
      card.classList.add(enterClass);

      setTimeout(() => {
        card.classList.remove(enterClass);
        isFlipping = false;
      }, 300);
    }, 250);
  }

  document.getElementById('dial-up-btn')?.addEventListener('click', () => goToIndex(currentIndex - 1, -1));
  document.getElementById('dial-down-btn')?.addEventListener('click', () => goToIndex(currentIndex + 1, 1));

  const viewer = container.querySelector('.flashback-container');
  if (viewer) {
    viewer.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        goToIndex(currentIndex + 1, 1);
      } else if (e.deltaY < 0) {
        goToIndex(currentIndex - 1, -1);
      }
    }, { passive: false });
  }

  const dialEl = document.getElementById('flashback-dial');
  if (dialEl) {
    let startY = 0;
    let isDragging = false;

    dialEl.addEventListener('mousedown', (e) => {
      isDragging = true;
      startY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const diff = e.clientY - startY;
      if (Math.abs(diff) > 25) {
        if (diff > 0) {
          goToIndex(currentIndex + 1, 1);
        } else {
          goToIndex(currentIndex - 1, -1);
        }
        startY = e.clientY;
      }
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
}

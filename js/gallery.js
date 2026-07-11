const galleryTrack = document.getElementById('gallery-track');

const galleryItems = [
  { title: 'Orbital Scan', src: './images/fb0.jpeg' },
  { title: 'Quiet Signal', src: './images/fb1.jpeg' },
  { title: 'Memory Pulse', src: './images/fb2.jpeg' },
  { title: 'Signal Lock', src: './images/fb3.jpeg' },
  { title: 'Orbital Scan', src: './images/fb4.jpeg' },
  { title: 'Quiet Signal', src: './images/fb5.jpeg' },
  { title: 'Memory Pulse', src: './images/fb6.jpeg' },
  { title: 'Signal Lock', src: './images/fb7.jpeg' },
  { title: 'Orbital Scan', src: './images/fb8.jpeg' },
  { title: 'Quiet Signal', src: './images/fb9.jpeg' },
  { title: 'Memory Pulse', src: './images/fb10.jpeg' },
  { title: 'Signal Lock', src: './images/fb11.jpeg' },
  { title: 'Orbital Scan', src: './images/fb12.jpeg' },
  { title: 'Quiet Signal', src: './images/fb13.jpeg' },
  { title: 'Memory Pulse', src: './images/fb14.jpeg' },
  { title: 'Signal Lock', src: './images/f15.jpeg' },
  { title: 'Quiet Signal', src: './images/fb16.jpeg' },
  { title: 'Memory Pulse', src: './images/fb17.jpeg' },
  { title: 'Signal Lock', src: './images/fb18.jpeg' },
  { title: 'Quiet Signal', src: './images/fb19.jpeg' },
  { title: 'Memory Pulse', src: './images/fb20.jpeg' },
];

function renderGallery() {
  if (!galleryTrack) return;

  const duplicatedItems = [...galleryItems, ...galleryItems];
  galleryTrack.innerHTML = duplicatedItems.map((item, index) => `
    <article class="gallery-card" data-index="${index}">
      <img src="${item.src}" alt="${item.title}" />
    </article>
  `).join('');
}

export function initGallery() {
  renderGallery();
}

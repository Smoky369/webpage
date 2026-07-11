const profileContent = document.getElementById('profile-content');
const nameCycle = document.getElementById('name-cycle');
const contactButton = document.getElementById('contact-button');
const modalRoot = document.getElementById('modal-root');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

const tabs = {
  story: 'I’m Manish, a 17-year-old student learning technology on Earth while dreaming beyond it. I’m not a genius, and I’m not a professional—I’m simply someone who believes that consistent hard work can change the direction of a life. I learn by breaking things, understanding how they work, and rebuilding them into something better. Every project, every mistake, and every late night is another step toward becoming the engineer I aspire to be. I’m not where I want to be yet, but with every challenge I overcome, I move one step closer. The world may not know my name today, but one day, it will.',
  mission: 'My mission is to use technology as a bridge toward space exploration. I want to design, build, and contribute to projects that push the boundaries of engineering and inspire others to dream bigger. I aim to found an organization dedicated to aerospace and technology, bringing together curious minds who share the same passion for innovation. Through collaboration, learning, and relentless perseverance, I want to create meaningful solutions that leave a lasting impact on both Earth and beyond.',
  vision: 'I envision a future where Nepal stands among the nations contributing to humanity’s journey into space. I want to help establish Rise Nepal as a driving force in aerospace research, engineering, and technological innovation. My goal is to build a strong community of students, engineers, and dreamers who work together on ambitious space projects, proving that great ideas are not limited by geography. I dream of inspiring the next generation to look up at the stars—not with wonder alone, but with the confidence that they can help reach them. 🚀',
};

const names = ['MANISH PATHAK', 'मनीष पाठक', 'Manish Pathak', 'मनीष पाठक'];

export function initTyping() {
  let index = 0;
  let currentTab = 'story';
  profileContent.innerHTML = `<p>${tabs[currentTab]}</p>`;
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      profileContent.innerHTML = `<p>${tabs[currentTab]}</p>`;
    });
  });

  const nameInterval = setInterval(() => {
    index = (index + 1) % names.length;
    nameCycle.textContent = names[index];
  }, 2400);

  contactButton.addEventListener('click', () => {
    modalRoot.classList.add('open');
    modalRoot.setAttribute('aria-hidden', 'false');
    modalContent.innerHTML = `
      <h3>Contact Protocol</h3>
      <p>Name</p>
      <input type="text" id="contact-name" placeholder="Your name" />
      <p>Email</p>
      <input type="email" id="contact-email" placeholder="your@email.com" />
      <p>Message</p>
      <textarea id="contact-message" rows="5" placeholder="Your message"></textarea>
      <button class="copy-button" id="contact-submit-btn">Transmit</button>
    `;

    document.getElementById('contact-submit-btn')?.addEventListener('click', () => {
      const name = document.getElementById('contact-name')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const message = document.getElementById('contact-message')?.value || '';
      const mailtoUrl = `mailto:pathak369manish@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;
      closeModal();
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalRoot.addEventListener('click', (event) => {
    if (event.target === modalRoot) closeModal();
  });

  document.querySelectorAll('.signal-node').forEach((node) => {
    node.addEventListener('click', () => {
      const details = document.getElementById('signal-details');
      details.innerHTML = `
        <h3>${node.dataset.profile}</h3>
        <p>Signal relay initialized. Open the profile link below or continue scanning.</p>
        <a class="secondary-button link-button" href="${node.dataset.url}" target="_blank" rel="noreferrer">Open Link</a>
      `;
    });
  });

  const booksButton = document.getElementById('books-button');
  if (booksButton) {
    booksButton.addEventListener('click', () => {
      modalRoot.classList.add('open');
      modalRoot.setAttribute('aria-hidden', 'false');
      modalContent.innerHTML = `
        <h3>Book Reading</h3>
        <div class="books-grid">
          <img src="./images/book1.jpg" alt="Book cover" />
          <img src="./images/book2.jpg" alt="Book cover" />
          <img src="./images/book3.jpeg" alt="Book cover" />
          <img src="./images/book4.jpeg" alt="Book cover" />
        </div>
      `;
    });
  }

  const drawingButton = document.getElementById('drawing-button');
  if (drawingButton) {
    drawingButton.addEventListener('click', () => {
      modalRoot.classList.add('open');
      modalRoot.setAttribute('aria-hidden', 'false');
      modalContent.innerHTML = `
        <h3>Drawing</h3>
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
          <img src="./images/picture1.jpeg" alt="Drawing" style="max-width: 100%; max-height: 70vh; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" />
        </div>
      `;
    });
  }

  document.querySelector('.relay-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector('input[type="text"]').value || '';
    const email = form.querySelector('input[type="email"]').value || '';
    const message = form.querySelector('textarea').value || '';
    
    const mailtoUrl = `mailto:pathak369manish@gmail.com?subject=Portfolio Judgement from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AJudgement:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;

    const details = document.getElementById('signal-details');
    details.innerHTML = '<h3>Signal Profile</h3><p>Message relay protocol opened in your email client.</p>';
  });

  window.addEventListener('beforeunload', () => clearInterval(nameInterval));

  function closeModal() {
    modalRoot.classList.remove('open');
    modalRoot.setAttribute('aria-hidden', 'true');
  }
}

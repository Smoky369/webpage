const projectsGrid = document.getElementById('projects-grid');
const modalRoot = document.getElementById('modal-root');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

const createProjectImage = (label, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#071018"/>
          <stop offset="100%" stop-color="#11262f"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#g)"/>
      <circle cx="620" cy="150" r="90" fill="${accent}" opacity="0.2"/>
      <rect x="90" y="90" width="360" height="220" rx="24" fill="rgba(255,255,255,0.04)" stroke="${accent}" stroke-opacity="0.4"/>
      <rect x="126" y="126" width="288" height="26" rx="13" fill="${accent}" opacity="0.85"/>
      <rect x="126" y="180" width="190" height="16" rx="8" fill="rgba(255,255,255,0.3)"/>
      <rect x="126" y="216" width="232" height="16" rx="8" fill="rgba(255,255,255,0.2)"/>
      <text x="126" y="352" fill="#e8fbef" font-family="Orbitron, sans-serif" font-size="34" letter-spacing="4">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const projectCatalog = [
  {
    name: 'Wi-Fi Robotic Car',
    tag: 'ESP32 • Blynk • Robotics',
    status: 'Completed',
    progress: 100,
    description: 'A Wi-Fi controlled robotic car powered by ESP32 and the Blynk app for real-time wireless navigation.',
    longDescription: 'Built around the ESP32 and the Blynk IoT platform, this robotic car enables real-time wireless control through a smartphone over Wi-Fi. The system delivers responsive movement by transmitting commands instantly to the onboard motor driver. This project strengthened my understanding of embedded programming, IoT communication, motor control, and robotics integration. It also serves as a scalable platform for future upgrades such as obstacle avoidance, autonomous navigation, camera streaming, and AI-assisted control.',
    image: './images/car.png',
    video: './images/car.mp4',
    github: 'https://github.com/Smoky369'
  },
  {
    name: 'Model Rocket',
    tag: 'Aerospace • Avionics • Telemetry',
    status: 'On Hold',
    progress: 60,
    description: 'A custom-built model rocket featuring an ESP32-based flight computer, onboard data logging, and live telemetry.',
    longDescription: 'This project explores the complete engineering process behind a model rocket—from propulsion and airframe construction to avionics and recovery systems. The first prototype featured an ESP32 flight computer with a BMP180 barometric sensor, XL6009 voltage booster, lithium-ion battery, microSD card logging, a paper tube airframe, fiberglass fins, and a 3D-printed nose cone with a servo-driven parachute deployment mechanism. A homemade sugar (KNO₃ + sugar) rocket motor was tested, but the launch was unsuccessful after the M-Seal nozzle failed under thrust. Instead of abandoning the project, the avionics were redesigned and upgraded with an ADXL345 accelerometer and NRF24L01 wireless module for real-time telemetry. The improved electronics are complete, while a redesigned 3D-printed nose cone and final assembly are currently on hold. Development will resume with a stronger propulsion system, refined structural components, and a second flight-ready prototype.',
    image: './images/fb2.jpeg',
    photos: ['./images/fb1.jpeg', './images/fb2.jpeg', './images/fb0.jpeg', './images/fb13.jpeg'],
    github: 'https://github.com/Smoky369'
  },
  {
    name: 'SU-27 RC Aircraft',
    tag: 'Aerospace • Embedded Systems • Telemetry',
    status: 'In Development',
    progress: 25,
    description: 'A custom-built Sukhoi Su-27 inspired RC aircraft integrating embedded avionics, wireless telemetry, and software-defined control.',
    longDescription: 'Inspired by the Sukhoi Su-27, this project aims to build a high-performance RC aircraft from the ground up. The system is designed around a Raspberry Pi Pico flight controller paired with a brushless motor, ESC, and onboard sensors for real-time flight monitoring. A BMP180 barometric sensor will provide altitude data, while an NRF24L01 transceiver will enable telemetry and communication between the aircraft and a custom software-based ground station. Unlike conventional RC transmitters, the aircraft will be controlled through a WebSocket-powered interface, allowing commands and live flight data to be exchanged over a custom application. The design also includes two servo-actuated payload bays intended to deploy lightweight demonstration rockets powered by a small sugar-propellant (KNO₃ + sugar) flare mechanism. The project is currently in the airframe construction phase, with electronics integration, flight testing, and telemetry development planned for future milestones.',
    image: './images/fb10.jpeg',
    github: 'https://github.com/Smoky369'
  },
  {
    name: 'Smart Assistive Glasses',
    tag: 'Assistive Tech • IoT • Embedded Systems',
    status: 'Completed',
    progress: 100,
    description: 'Smart glasses designed to help visually impaired users detect nearby obstacles using ultrasonic sensing and audio feedback.',
    longDescription: 'This project focuses on improving mobility and independence for visually impaired individuals through an affordable wearable device. Built around the ESP8266 microcontroller, the system continuously measures the distance to nearby obstacles using an ultrasonic sensor. When an object enters a predefined safety range, a buzzer provides immediate audio alerts, allowing the user to react before a collision occurs. The project demonstrates practical applications of embedded systems, real-time sensor processing, and assistive technology while emphasizing low-cost hardware and simple, reliable operation.',
    image: './images/glass.png',
    video: './images/glasses.mp4',
    github: 'https://github.com/Smoky369'
  },
  {
   name: 'Smart Home Automation',
    tag: 'IoT • ESP8266 • Blynk',
    status: 'Completed',
    progress: 100,
    description: 'A Wi-Fi based home automation system that controls electrical appliances remotely using the Blynk mobile application.',
    longDescription: 'This project demonstrates a simple and reliable IoT-based home automation system built around the ESP8266 Wi-Fi microcontroller. A 2-channel relay module interfaces with household electrical loads, allowing appliances such as light bulbs to be switched on and off remotely through the Blynk mobile application. The system enables real-time wireless control over a Wi-Fi network, showcasing embedded programming, IoT communication, and relay-based electrical switching. Designed with scalability in mind, the platform can be extended to support multiple appliances, scheduling, automation routines, sensor integration, and voice assistant compatibility.',
    image: './images/bulb.png',
    video: './images/bulb.mp4',
    github: 'https://github.com/Smoky369'
  },
  {
    name: 'Mini Tesla Coil',
    tag: 'Electronics • High Voltage • Electromagnetics',
    status: 'Completed',
    progress: 100,
    description: 'A compact solid-state Tesla coil that wirelessly lights a CFL bulb through a high-frequency electric field.',
    longDescription: 'This project demonstrates the principles of resonant inductive coupling and high-frequency, high-voltage generation using a compact solid-state Tesla coil. The circuit is built around a 2N2222A transistor powered by a 9V battery, driving a primary coil that transfers energy to a carefully wound secondary coil. The resulting high-frequency electric field is strong enough to ionize the gas inside a nearby CFL bulb, allowing it to illuminate wirelessly without any direct electrical connection. Through this project, I gained practical experience with transistor switching, electromagnetic induction, resonance, coil design, and wireless energy transfer while exploring the fundamentals of high-voltage electronics.',
    image: './images/tesla.png',
    video: './images/tesla.mp4',
    github: 'https://github.com/Smoky369'
  },
];

let projects = [];
let archiveView = window.location.pathname.includes('project-archive') || new URLSearchParams(window.location.search).get('view') === 'archive';
let projectsInitialized = false;

function bindProjectInteractions() {
  document.querySelectorAll('.view-detail').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.project));
  });
}

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.className = archiveView ? 'archive-container' : 'projects-grid';

  if (archiveView) {
    projectsGrid.innerHTML = `
      <div class="archive-page">
        <div class="archive-page__header">
          <a class="secondary-button" href="./index.html?view=activity">← Back to Activity</a>
        </div>
        <div class="archive-grid">
          ${projects.map((project) => createProjectCard(project)).join('')}
        </div>
      </div>
    `;
    bindProjectInteractions();
    return;
  }

  const visibleProjects = projects.slice(0, 3);
  const extraProjects = projects.slice(3);
  const cards = visibleProjects.map((project) => createProjectCard(project)).join('');
  const exploreCard = extraProjects.length
    ? `
      <a class="project-card project-card--cta" href="./project-archive.html" target="_blank" rel="noopener noreferrer">
        <div class="project-card-icon">⧉</div>
        <h3>View More Logs</h3>
        <p>Explore the full archive of project points, milestones, and signals.</p>
        <span class="secondary-button">Explore</span>
      </a>
    `
    : '';

  projectsGrid.innerHTML = `${cards}${exploreCard}`;
  bindProjectInteractions();
}

function createProjectCard(project) {
  const statusClass = project.status.toLowerCase();
  return `
    <article class="project-card">
      <div class="project-card__image">
        <img class="project-image" src="${project.image}" alt="${project.name}" />
      </div>
      <div class="project-card__body">
        <div class="project-card__header">
          <div>
            <p class="project-eyebrow">${project.tag}</p>
            <h3>${project.name}</h3>
          </div>
          <span class="status-chip status-chip--${statusClass}">${project.status}</span>
        </div>
        <p>${project.description}</p>
        <div class="project-metrics">
          <div class="metric">
            <span class="metric-label">Progress</span>
            <span class="metric-value">${project.progress}%</span>
          </div>
          <button class="secondary-button view-detail" type="button" data-project="${project.name}">View detail</button>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${project.progress}%"></div>
        </div>
      </div>
    </article>
  `;
}

function openModal(projectName) {
  const project = projects.find((item) => item.name === projectName);
  if (!project) return;
  modalRoot.classList.add('open');
  modalRoot.setAttribute('aria-hidden', 'false');

  let videoSection = '';
  if (project.video) {
    videoSection = `
      <div class="project-video-wrapper" style="margin-top: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; letter-spacing: 0.1em; color: var(--green); text-transform: uppercase;">Project Video</h4>
        <video src="${project.video}" controls playsinline style="width: 100%; height: auto; border-radius: 12px; border: 1px solid rgba(57,255,136,0.3); box-shadow: 0 0 15px rgba(57,255,136,0.1); background: #000; display: block;"></video>
      </div>
    `;
  }

  let photosSection = '';
  if (project.photos && project.photos.length > 0) {
    photosSection = `
      <div class="project-photos-wrapper" style="margin-top: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; letter-spacing: 0.1em; color: var(--green); text-transform: uppercase;">Project Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          ${project.photos.map(src => `
            <a href="${src}" target="_blank" rel="noopener noreferrer" style="display: block; overflow: hidden; border-radius: 8px;">
              <img src="${src}" alt="Gallery image" style="width: 100%; height: 120px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  let githubSection = '';
  if (project.github) {
    githubSection = `
      <div style="margin-top: 1.5rem; display: flex; gap: 10px; align-items: center;">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="secondary-button" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display: block;"><path d="M12 .8C5.7.8.8 5.7.8 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.3-.8 2.8-1.7.2-.4.5-.7.9-.9-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.2 5.7 18.3.8 12 .8z"/></svg>
          Repository
        </a>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.longDescription}</p>
    <div class="project-metrics" style="margin-top: 1rem;">
      <div class="metric">
        <span class="metric-label">Status</span>
        <span class="metric-value">${project.status}</span>
      </div>
      <div class="metric">
        <span class="metric-label">Progress</span>
        <span class="metric-value">${project.progress}%</span>
      </div>
    </div>
    <div class="progress-track" style="margin-top: 1rem;">
      <div class="progress-fill" style="width:${project.progress}%"></div>
    </div>
    ${videoSection}
    ${photosSection}
    ${githubSection}
  `;
}

function closeModal() {
  modalRoot.classList.remove('open');
  modalRoot.setAttribute('aria-hidden', 'true');
}

export async function initProjects() {
  if (projectsInitialized) return;
  projectsInitialized = true;
  projects = projectCatalog;
  renderProjects();

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalRoot) {
    modalRoot.addEventListener('click', (event) => {
      if (event.target === modalRoot) closeModal();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('projects-grid')) {
    initProjects();
  }
});

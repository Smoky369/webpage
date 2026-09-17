const cursor = document.querySelector('.cursor');

if (cursor) {
  window.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.addEventListener('mouseover', (event) => {
    if (event.target.closest('a, button, .project-card')) {
      cursor.classList.add('is-hover');
    }
  });

  document.addEventListener('mouseout', (event) => {
    const interactiveElement = event.target.closest('a, button, .project-card');
    if (interactiveElement && !interactiveElement.contains(event.relatedTarget)) {
      cursor.classList.remove('is-hover');
    }
  });
}

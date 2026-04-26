let current = 0;
let locked = false;
const slides = document.querySelectorAll('.slide');

function go(dir) {
  if (locked) return;
  const next = current + dir;
  if (next < 0 || next >= slides.length) return;
  locked = true;

  const exitClass = dir > 0 ? 'exit-up' : 'exit-down';
  slides[current].classList.remove('active');
  slides[current].classList.add(exitClass);

  current = next;
  slides[current].classList.add('active');

  setTimeout(() => {
    slides.forEach(s => s.classList.remove('exit-up', 'exit-down'));
    locked = false;
  }, 550); // igual que la duración de la transición CSS
}

window.addEventListener('wheel', e => {
  e.preventDefault(); // evita que la página haga scroll
  go(e.deltaY > 0 ? 1 : -1);
}, { passive: false });
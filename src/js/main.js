// ============================================
// 1. IMPORTS
// ============================================
import '../styles/main.css';
import { getRandomQuote } from './quoteGenerator.js';

// ============================================
// 2. DOM RENDERING
// ============================================
const app = document.querySelector('#app');
app.innerHTML = `
  <img src="/frogAnd_Shadow.png" alt="" aria-hidden="true" class="grogu-float">
  <img src="/grogu_Seul.png" alt="" aria-hidden="true" class="grogu-seul">
  <img src="/ball.png" alt="" aria-hidden="true" class="ball-float">
  <button id="sound-toggle" class="btn-sound fixed bottom-6 right-4" aria-label="Activer le son">🔇</button>
  <div class="flex flex-col items-center justify-between min-h-screen text-center px-6 md:px-12 py-8">
    <blockquote id="quote" aria-live="polite" class="text-2xl md:text-4xl lg:text-5xl leading-snug max-w-2xl"></blockquote>
    <p id="breathing-text" class="text-sm mt-6 opacity-60"></p>
    <button id="new-quote" class="btn-accent">
      Nouvelle citation
    </button>
  </div>
`;

// ============================================
// 3. DOM ELEMENTS
// ============================================
const quoteElement = document.querySelector('#quote');
const button = document.querySelector('#new-quote');
const soundBtn = document.querySelector('#sound-toggle');
const breathingText = document.querySelector('#breathing-text');

// ============================================
// 4. LOGIC
// ============================================
const displayQuote = () => {
  quoteElement.textContent = getRandomQuote();
};

// Étoiles : grille 9×6 avec décalage aléatoire dans chaque cellule
function generateStars() {
  const cols = 9;
  const rows = 6;
  const fragment = document.createDocumentFragment();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const star = document.createElement('div');
      star.className = 'star';
      const x = ((col + 0.15 + Math.random() * 0.7) / cols) * 100;
      const y = ((row + 0.15 + Math.random() * 0.7) / rows) * 100;
      const size = 1.5 + Math.random() * 2;
      const duration = 2 + Math.random() * 5;
      const delay = -(Math.random() * 6);
      star.style.cssText = `left:${x}vw;top:${y}vh;width:${size}px;height:${size}px;--twinkle-duration:${duration}s;--twinkle-delay:${delay}s;`;
      fragment.appendChild(star);
    }
  }
  app.appendChild(fragment);
}

// Son ambient : coupé par défaut (contrainte autoplay navigateurs)
// Audio créé au 1er clic pour compatibilité iOS Safari
let audio = null;
let isMuted = true;

soundBtn.addEventListener('click', () => {
  if (isMuted) {
    if (!audio) {
      audio = new Audio('/grogu.mp3');
      audio.loop = true;
      audio.volume = 0.4;
    }
    audio.play();
    isMuted = false;
    soundBtn.textContent = '🔊';
    soundBtn.setAttribute('aria-label', 'Couper le son');
  } else {
    audio.pause();
    isMuted = true;
    soundBtn.textContent = '🔇';
    soundBtn.setAttribute('aria-label', 'Activer le son');
  }
});



// Respiration guidée : inspiration 4s (montée) — expiration 6s (descente)
const grogu = document.querySelector('.grogu-seul');
const ball = document.querySelector('.ball-float');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let breathCount = 0;

function setBreathingText(text, opacity) {
  breathingText.style.opacity = '0';
  setTimeout(() => {
    breathingText.textContent = text;
    breathingText.style.opacity = opacity;
  }, 500);
}

async function breathingLoop() {
  if (prefersReducedMotion) return;

  // Inspiration
  setBreathingText('Inspire…', '0.6');

  await Promise.all([
    grogu.animate(
      [{ transform: 'translateY(-50%)' }, { transform: 'translateY(calc(-50% - 40px))' }],
      { duration: 4000, easing: 'ease-in', fill: 'forwards' }
    ).finished,

    quoteElement.animate(
      [{ transform: 'translateY(0px)' }, { transform: 'translateY(-6px)' }],
      { duration: 4000, easing: 'ease-in', fill: 'forwards' }
    ).finished
  ]);

  // Expiration
  setBreathingText('Expire…', '0.4');

  await Promise.all([
    grogu.animate(
      [{ transform: 'translateY(calc(-50% - 40px))' }, { transform: 'translateY(-50%)' }],
      { duration: 6000, easing: 'ease-out', fill: 'forwards' }
    ).finished,

    quoteElement.animate(
      [{ transform: 'translateY(-6px)' }, { transform: 'translateY(0px)' }],
      { duration: 6000, easing: 'ease-out', fill: 'forwards' }
    ).finished
  ]);

  breathCount++;
  if (breathCount >= 4) {
    breathCount = 0;
    displayQuote();
  }

  breathingLoop();
}

async function breathingLoopBall() {
  if (prefersReducedMotion) return;

  await ball.animate(
    [{ transform: 'translateY(-50%)' }, { transform: 'translateY(calc(-50% - 100px))' }],
    { duration: 4000, easing: 'ease-in', fill: 'forwards' }
  ).finished;

  await ball.animate(
    [{ transform: 'translateY(calc(-50% - 100px))' }, { transform: 'translateY(-50%)' }],
    { duration: 6000, easing: 'ease-out', fill: 'forwards' }
  ).finished;

  breathingLoopBall();
}

// ============================================
// 5. INIT
// ============================================
displayQuote();
button.addEventListener('click', displayQuote);
generateStars();
breathingLoop();
breathingLoopBall();
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
  <div class="flex flex-col items-center justify-center h-screen text-center">
    <h1 id="quote" class="text-2xl font-semibold mb-6"></h1>
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

// ============================================
// 4. LOGIC
// ============================================
const displayQuote = () => {
  quoteElement.textContent = getRandomQuote();
};

// ============================================
// 5. INIT
// ============================================
displayQuote();
button.addEventListener('click', displayQuote);
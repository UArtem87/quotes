import quotes from './quotes.js';

const container = document.getElementById('container');
const pointer = document.getElementById('pointer');
const quoteRan = document.getElementById('quote');
const btn = document.getElementById('gen-btn');
const body = document.body;
const theme = document.getElementById('theme');

pointer.addEventListener('click', () => {
  pointer.classList.toggle('clicked');
  container.classList.toggle('clicked');
  body.classList.toggle('clicked');
  theme.classList.toggle('clicked');
});

function generateRandomQuote() {
  const Index = Math.floor(Math.random() * quotes.length);
  const { author, quote } = quotes[Index];
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;
}
btn.addEventListener('click', generateRandomQuote);

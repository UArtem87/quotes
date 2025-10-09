import quotes from './src/quotes.js';
import {
  addFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteImage,
  showQuote,
} from './src/handlers.js';
import { generateRandomIndex } from './src/utils.js';

// #region Elements
const body = document.body;
const container = document.getElementById('container');
const theme = document.getElementById('theme');
const pointer = document.getElementById('pointer');
const quoteRan = document.getElementById('quote');
const btn = document.getElementById('gen-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite');
const favoriteContainer = document.getElementById('favorite-container');

// #endregion

// #region Зміна день-ніч лістнер
const elementArray = [body, container, theme, pointer, btn, quoteRan];

theme.addEventListener('click', () => {
  elementArray.forEach((element) => {
    element.classList.toggle('clicked');
  });

  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    card.classList.toggle('clicked');
  });
});
// #endregion

let currentIndex;

//  Генерація цитати
function generateRandomQuote() {
  currentIndex = generateRandomIndex(quotes.length);
  const currentQuote = quotes[currentIndex];
  showQuote(currentQuote, quoteRan, toggleFavoriteBtn);
}

btn.addEventListener('click', generateRandomQuote);

//  Робимо цитату isFavorite
const toggleFavorite = (index) => {
  const currentQuote = quotes[index];
  currentQuote.isFavorite = currentQuote.isFavorite ? false : true;
  toggleFavoriteImage(currentQuote, toggleFavoriteBtn);
  currentQuote.isFavorite
    ? addFavoriteCard(quotes, index, body, favoriteContainer)
    : hideFavoriteCard(index);
};

toggleFavoriteBtn.addEventListener('click', () => toggleFavorite(currentIndex));

favoriteContainer.addEventListener('click', (event) => {
  const starElement = event.target.closest('.favorite-star');
  if (starElement) {
    const index = +starElement.dataset.id;
    toggleFavorite(index);
  }
});

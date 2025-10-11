import quotes from './src/quotes.js';
import {
  addFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteImage,
  showQuote,
  localFavoriteQuotes,
} from './src/handlers.js';
import { generateRandomIndex } from './src/utils.js';
import { saveState, loadState, localId } from './src/storage.js';

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
const elements = { body, quoteRan, toggleFavoriteBtn, favoriteContainer };
window.addEventListener('load', () => {
  loadState(quotes, elements);
});

//  Генерація цитати
function generateRandomQuote() {
  currentIndex = generateRandomIndex(quotes.length);
  const quote = quotes[currentIndex];
  showQuote(quote, quoteRan, toggleFavoriteBtn);

  const localQuote = {
    quote: quotes[currentIndex],
    id: currentIndex,
  };
  saveState(localQuote, localFavoriteQuotes);
}

btn.addEventListener('click', generateRandomQuote);

//  Робимо цитату isFavorite
const toggleFavorite = (index = localId) => {
  const currentQuote = quotes[index];

  currentQuote.isFavorite = currentQuote.isFavorite ? false : true;
  toggleFavoriteImage(currentQuote, toggleFavoriteBtn);
  currentQuote.isFavorite
    ? addFavoriteCard(quotes, index, body, favoriteContainer)
    : hideFavoriteCard(quotes, index);
};

toggleFavoriteBtn.addEventListener('click', () => toggleFavorite(currentIndex));

//  Видалення із favorite зірочкою на картці
favoriteContainer.addEventListener('click', (event) => {
  const starElement = event.target.closest('.favorite-star');
  if (starElement) {
    const index = +starElement.dataset.id;
    toggleFavorite(index);
  }
});

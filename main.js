import quotes from './src/quotes.js';
import {
  addFavoriteCard,
  removeFavoriteCard,
  toggleFavoriteImage,
} from './src/handlers.js';
import { generateRandomIndex, showStar, quoteIsFavorite } from './src/utils.js';

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

const elementArray = [body, container, theme, pointer, btn, quoteRan];

// #region Зміна день-ніч лістнер
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

//  Відображення цитати
const showQuote = (quote) => {
  quoteIsFavorite(quote);
  toggleFavoriteImage(quote, toggleFavoriteBtn);
  const { text, author } = quote;
  quoteRan.innerHTML = `<em>"${text}"</em><br>(${author})`;
  showStar(toggleFavoriteBtn);
};

//  Генерація цитати
function generateRandomQuote() {
  currentIndex = generateRandomIndex(quotes.length);
  const currentQuote = quotes[currentIndex];
  showQuote(currentQuote);
}

btn.addEventListener('click', generateRandomQuote);

//  Робимо цитату isFavorite
const toggleFavorite = () => {
  const currentQuote = quotes[currentIndex];
  currentQuote.isFavorite = currentQuote.isFavorite ? false : true;
  toggleFavoriteImage(currentQuote, toggleFavoriteBtn);
  currentQuote.isFavorite
    ? addFavoriteCard(quotes, currentIndex, body, favoriteContainer)
    : removeFavoriteCard(quotes, currentIndex);
};

toggleFavoriteBtn.addEventListener('click', toggleFavorite);

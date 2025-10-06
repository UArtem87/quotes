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

//  Генерація цитати
function generateRandomQuote() {
  currentIndex = generateRandomIndex(quotes);
  const currentQuote = quotes[currentIndex];
  const { quote, author } = currentQuote;
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;
  quoteIsFavorite(currentQuote);
  showStar(quotes, currentIndex, toggleFavoriteBtn);
}

btn.addEventListener('click', generateRandomQuote);

//  Робимо цитату isFavorite
const toggleFavorite = () => {
  const currentQuote = quotes[currentIndex];
  currentQuote.isFavorite = currentQuote.isFavorite ? false : true;
  toggleFavoriteImage(quotes, currentIndex, toggleFavoriteBtn);
  currentQuote.isFavorite
    ? addFavoriteCard(quotes, currentIndex, body, favoriteContainer)
    : removeFavoriteCard(quotes, currentIndex);
};

toggleFavoriteBtn.addEventListener('click', toggleFavorite);

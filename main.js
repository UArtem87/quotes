import quotes from './src/quotes.js';
import { localStorageArray } from './src/hadler.js';
import { loadLocalStorage, saveLocalStorage } from './src/localStorage.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleStar,
} from './src/hadler.js';

// #region Elements
const body = document.body;
const container = document.getElementById('container');
const theme = document.getElementById('theme');
const pointer = document.getElementById('pointer');
const btn = document.getElementById('gen-btn');
const quoteRan = document.getElementById('quote');
const toggleFavorite = document.getElementById('toggle-favorite');
// const addedToFavorite = document.getElementById('added');
// const favoriteContainer = document.getElementById('favorite-container');
// const favoriteCards = document.querySelectorAll('.favorite-card');

const elementArray = [body, container, theme, pointer, btn, quoteRan];
// #endregion

// #region Зміна день-ніч лістнер
theme.addEventListener('click', () => {
  elementArray.forEach((element) => {
    element.classList.toggle('clicked');
  });
  // favoriteCards.forEach((card) => {
  //   card.classList.toggle('clicked');
  // });
});
// #endregion

//  Генерація індексу
function generateRandomIndex() {
  return Math.floor(Math.random() * quotes.length);
}

//  Відображення зірочки
function showStar() {
  toggleFavorite.style.display = 'inline-block';
}

//  Присвоєння властивості isFavorite
function quoteIsFavorite(currentQuote) {
  if (currentQuote.isFavorite === undefined) {
    currentQuote.isFavorite = false;
  }
}

//  Генерація цитати
function generateRandomQuote(quotes) {
  const currentIndex = generateRandomIndex();
  const currentQuote = quotes[currentIndex];
  const { quote, author } = currentQuote;
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;
  quoteIsFavorite(currentQuote);
  showStar();
  console.log(quotes);
}

btn.addEventListener('click', () => {
  generateRandomQuote(quotes);
});

import { toggleFavoriteImage } from './handlers.js';

//  Генерація індексу
const generateRandomIndex = (quotes) =>
  Math.floor(Math.random() * quotes.length);

//  Відображення зірочки
const showStar = (quotes, currentIndex, toggleFavoriteBtn) => {
  toggleFavoriteBtn.classList.add('star');
  toggleFavoriteImage(quotes, currentIndex, toggleFavoriteBtn);
};

//  Присвоєння властивості isFavorite
function quoteIsFavorite(currentQuote) {
  if (currentQuote.isFavorite === undefined) {
    currentQuote.isFavorite = false;
  }
}

export { generateRandomIndex, showStar, quoteIsFavorite };

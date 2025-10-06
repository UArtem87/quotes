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
const quoteRan = document.getElementById('quote');
const btn = document.getElementById('gen-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite');
const favoriteContainer = document.getElementById('favorite-container');

const elementArray = [body, container, theme, pointer, btn, quoteRan];
// #endregion

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
  currentIndex = generateRandomIndex();
  const currentQuote = quotes[currentIndex];
  const { quote, author } = currentQuote;
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;
  quoteIsFavorite(currentQuote);
  showStar();
}

//  Генерація індексу
const generateRandomIndex = () => Math.floor(Math.random() * quotes.length);

//  Присвоєння властивості isFavorite
function quoteIsFavorite(currentQuote) {
  if (currentQuote.isFavorite === undefined) {
    currentQuote.isFavorite = false;
  }
}

//  Відображення зірочки
const showStar = () => {
  toggleFavoriteBtn.classList.add('star');
  toggleFavoriteImage();
};

//  Вибір картинки
const toggleFavoriteImage = () => {
  const currentQuote = quotes[currentIndex];
  const isFav = currentQuote.isFavorite;
  toggleFavoriteBtn.classList.remove('favorite', 'unfavorite');
  const classToAdd = isFav ? 'favorite' : 'unfavorite';
  toggleFavoriteBtn.classList.add(classToAdd);
};

btn.addEventListener('click', generateRandomQuote);

//  Робимо цитату isFavorite
const toggleFavorite = () => {
  const currentQuote = quotes[currentIndex];
  currentQuote.isFavorite = currentQuote.isFavorite ? false : true;
  toggleFavoriteImage();
  currentQuote.isFavorite ? addFavoriteCard() : removeFavoriteCard();
  console.log(quotes);
};

//  Додавання карточки з обраною цитатою
const addFavoriteCard = () => {
  if (quotes[currentIndex].isFavorite === true) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    const { quote, author } = quotes[currentIndex];
    favoriteCard.innerHTML = `<em>"${quote}"</em><br>(${author})`;
    favoriteCard.setAttribute('data-id', currentIndex);
    if (body.classList.contains('clicked')) {
      favoriteCard.classList.add('clicked');
    }
    favoriteContainer.append(favoriteCard);
  }
};

//  Видаляємо карточку з обраних
const removeFavoriteCard = () => {
  if (quotes[currentIndex].isFavorite === false) {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      const cardId = card.getAttribute('data-id');
      if (+cardId === currentIndex) {
        card.remove();
      }
    });
  }
};

toggleFavoriteBtn.addEventListener('click', toggleFavorite);

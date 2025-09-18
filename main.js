import quotes from './src/quotes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleStar,
} from './src/hadler.js';

const container = document.getElementById('container');
const pointer = document.getElementById('pointer');
const quoteRan = document.getElementById('quote');
const btn = document.getElementById('gen-btn');
const body = document.body;
const theme = document.getElementById('theme');
const toggleFavorite = document.getElementById('toggle-favorite');
const addedToFavorite = document.getElementById('added');
const favoriteContainer = document.getElementById('favorite-container');

let currentIndex;
let currentQuote;

//  Зміна день-ніч лістнер
theme.addEventListener('click', () => {
  pointer.classList.toggle('clicked');
  container.classList.toggle('clicked');
  body.classList.toggle('clicked');
  theme.classList.toggle('clicked');
  btn.classList.toggle('clicked');
  toggleFavorite.classList.toggle('clicked');
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    card.classList.toggle('clicked');
  });
});

//  Генерація випадкової цитати
function generateRandomQuote() {
  addedToFavorite.textContent = '';
  currentIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[currentIndex];
  const { quote, author } = currentQuote;
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;

  //  Присвоєння значення властивості isFavorite
  if (currentQuote.isFavorite === undefined) {
    currentQuote.isFavorite = false;
  }

  toggleFavorite.style.display = 'inline-block';
  toggleStar(toggleFavorite, currentQuote);
}

//  Зміна властивості isFavorite і зміна повідомлення
function toggleFavoriteQuote() {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  addedToFavorite.textContent = currentQuote.isFavorite
    ? 'Quote added!'
    : 'Remove from favorities';

  if (currentQuote.isFavorite) {
    showFavoriteCard(container, favoriteContainer, currentQuote, currentIndex);
  } else {
    hideFavoriteCard(currentIndex);
  }
  toggleStar(toggleFavorite, currentQuote);
}

// Лістнери
btn.addEventListener('click', generateRandomQuote);
toggleFavorite.addEventListener('click', toggleFavoriteQuote);

// Лістнер для favoriteCard
favoriteContainer.addEventListener('click', (event) => {
  const clickEl = event.target;
  if (clickEl.classList.contains('favorite-star')) {
    const favoriteCard = clickEl.closest('.favorite-card');
    const indexOfRemove = favoriteCard.dataset.quoteIndex;

    if (quotes[indexOfRemove]) {
      quotes[indexOfRemove].isFavorite = false;
      addedToFavorite.textContent = 'Remove from favorities';
      toggleStar(toggleFavorite, currentQuote);
      favoriteCard.remove();
    }
  }
});

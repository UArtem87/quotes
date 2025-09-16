import quotes from './quotes.js';

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

//  Зміна день-ніч
pointer.addEventListener('click', () => {
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

function toggleStar() {
  toggleFavorite.classList.toggle('filled', currentQuote.isFavorite);
}

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
  toggleStar();
}

btn.addEventListener('click', generateRandomQuote);

//  Створення favorite card
function showFavoriteCard() {
  const favoriteCard = document.createElement('div');
  if (container.classList.contains('clicked')) {
    favoriteCard.classList.add('favorite-card', 'clicked');
  } else {
    favoriteCard.classList.add('favorite-card');
  }
  const { quote, author } = currentQuote;
  favoriteCard.innerHTML = `<em>"${quote}"</em><br>
  ${author}<span id="star-${currentIndex}" class="favorite-star"></span>`;
  favoriteCard.dataset.quoteIndex = currentIndex;
  favoriteContainer.append(favoriteCard);
}

//  Видалення карточки
function hideFavoriteCard() {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (parseInt(card.dataset.quoteIndex) === currentIndex) {
      card.remove();
    }
  });
}

//  Зміна властивості isFavorite і зміна повідомлення
function toggleFavoriteQuote() {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  addedToFavorite.textContent = currentQuote.isFavorite
    ? 'Quote added!'
    : 'Remove from favorities';

  if (currentQuote.isFavorite) {
    showFavoriteCard();
  } else {
    hideFavoriteCard();
  }

  toggleStar();
}

toggleFavorite.addEventListener('click', toggleFavoriteQuote);

favoriteContainer.addEventListener('click', (event) => {
  const clickEl = event.target;
  if (clickEl.classList.contains('favorite-star')) {
    const favoriteCard = clickEl.closest('.favorite-card');
    const indexOfRemove = favoriteCard.dataset.quoteIndex;

    if (quotes[indexOfRemove]) {
      quotes[indexOfRemove].isFavorite = false;
      addedToFavorite.textContent = 'Remove from favorities';
      favoriteCard.remove();
    }
  }
});

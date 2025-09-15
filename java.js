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

  toggleFavorite.style.backgroundImage = currentQuote.isFavorite
    ? 'url(./images/1.png)'
    : 'url(./images/3.png)';

  console.log(quotes);
}

btn.addEventListener('click', generateRandomQuote);

//  Зміна властивості isFavorite і зміна повідомлення
function toggleFavoriteQuote() {
  if (currentQuote === undefined) {
    addedToFavorite.textContent = 'Please generate quote!';
    return;
  }
  currentQuote.isFavorite = !currentQuote.isFavorite;

  addedToFavorite.textContent = currentQuote.isFavorite
    ? 'Quote added!'
    : 'Remove from favorities';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    if (container.classList.contains('clicked')) {
      favoriteCard.classList.add('favorite-card', 'clicked');
    } else {
      favoriteCard.classList.add('favorite-card');
    }
    const { quote, author } = currentQuote;
    favoriteCard.innerHTML = `<em>"${quote}"</em><br>(${author})`;
    favoriteContainer.append(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(quoteRan.textContent)) {
        card.remove();
      }
    });
  }

  toggleFavorite.style.backgroundImage = currentQuote.isFavorite
    ? 'url(./images/1.png)'
    : 'url(./images/3.png)';
}

toggleFavorite.addEventListener('click', toggleFavoriteQuote);

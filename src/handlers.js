import { saveState } from './storage.js';
import { showStar, quoteIsFavorite } from './utils.js';

//  Відображення цитати
const showQuote = (quote, quoteRan, btn) => {
  // console.log(quote);
  if (quote.isFavorite === undefined) {
    quoteIsFavorite(quote);
  }

  toggleFavoriteImage(quote, btn);
  const { text, author } = quote;
  quoteRan.innerHTML = `<em>"${text}"</em><br>(${author})`;
  showStar(btn);
};

let localFavoriteQuotes = []; //Збираємо улюблені цитати

//  Додавання карточки з обраною цитатою
const addFavoriteCard = (quotes, index, body, container) => {
  if (quotes[index].isFavorite === true) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    const { text, author } = quotes[index];
    favoriteCard.innerHTML = `<em>"${text}"</em><br>(${author})<span class="favorite-star" data-id="${index}"></span>`;

    const quote = { ...quotes[index] };
    const localCurrentQuote = { quote, id: index };
    localFavoriteQuotes.push(localCurrentQuote);
    saveState(localCurrentQuote, localFavoriteQuotes);

    if (body.classList.contains('clicked')) {
      favoriteCard.classList.add('clicked');
    }
    container.append(favoriteCard);
  }
};
//  Видаляємо карточку з обраних
const hideFavoriteCard = (quotes, index) => {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    const star = card.querySelector('.favorite-star');
    const starId = star.getAttribute('data-id');
    if (+starId === index) {
      card.remove();
    }
  });
  localFavoriteQuotes = localFavoriteQuotes.filter(
    (quote) => quote.id !== index
  );
  const localQuote = {
    quote: quotes[index],
    id: index,
  };
  saveState(localQuote, localFavoriteQuotes);
};

//  Вибір картинки
const toggleFavoriteImage = (quote, btn) => {
  const isFav = quote.isFavorite;
  btn.classList.add('star');
  btn.classList.remove('favorite', 'unfavorite');
  const classToAdd = isFav ? 'favorite' : 'unfavorite';
  btn.classList.add(classToAdd);
};

export {
  addFavoriteCard,
  hideFavoriteCard,
  toggleFavoriteImage,
  showQuote,
  localFavoriteQuotes,
};

//  Додавання карточки з обраною цитатою
const addFavoriteCard = (quotes, index, body, container) => {
  if (quotes[index].isFavorite === true) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    const { quote, author } = quotes[index];
    favoriteCard.innerHTML = `<em>"${quote}"</em><br>(${author})`;
    favoriteCard.setAttribute('data-id', index);
    if (body.classList.contains('clicked')) {
      favoriteCard.classList.add('clicked');
    }
    container.append(favoriteCard);
  }
};

//  Видаляємо карточку з обраних
const removeFavoriteCard = (quotes, index) => {
  if (quotes[index].isFavorite === false) {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      const cardId = card.getAttribute('data-id');
      if (+cardId === index) {
        card.remove();
      }
    });
  }
};

//  Вибір картинки
const toggleFavoriteImage = (quotes, index, btn) => {
  const currentQuote = quotes[index];
  const isFav = currentQuote.isFavorite;
  btn.classList.remove('favorite', 'unfavorite');
  const classToAdd = isFav ? 'favorite' : 'unfavorite';
  btn.classList.add(classToAdd);
};

export { addFavoriteCard, removeFavoriteCard, toggleFavoriteImage };

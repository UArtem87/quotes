const localStorageArray = [];

//  Створення favorite card
function showFavoriteCard(
  container,
  favoriteContainer,
  currentQuote,
  currentIndex
) {
  const favoriteCard = document.createElement('div');
  if (container.classList.contains('clicked')) {
    favoriteCard.classList.add('favorite-card', 'clicked');
  } else {
    favoriteCard.classList.add('favorite-card');
  }
  const { quote, author } = currentQuote;
  favoriteCard.innerHTML = `<em>"${quote}"</em><br>
  ${author}<span class="favorite-star"></span>`;
  favoriteCard.dataset.quoteIndex = currentIndex;
  favoriteContainer.append(favoriteCard);
  localStorageArray.push({
    currentQuote,
    currentIndex,
  });
}
//  Видалення карточки
function hideFavoriteCard(index) {
  const favoriteCard = document.querySelector(
    `.favorite-card[data-quote-index='${index}']`
  );
  if (favoriteCard) {
    favoriteCard.remove();
    const data = JSON.parse(localStorage.getItem('appData'));
    data.favorites = data.favorites.filter(
      (card) => card.currentIndex !== index
    );
    localStorage.setItem('appData', JSON.stringify(data));
  }
}

function toggleStar(toggleFavorite, currentQuote) {
  toggleFavorite.classList.toggle('filled', currentQuote.isFavorite);
}

export { showFavoriteCard, hideFavoriteCard, toggleStar, localStorageArray };

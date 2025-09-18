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
  ${author}<span id="star-${currentIndex}" class="favorite-star"></span>`;
  favoriteCard.dataset.quoteIndex = currentIndex;
  favoriteContainer.append(favoriteCard);
}

//  Видалення карточки
function hideFavoriteCard(currentIndex) {
  const favoriteCard = document.querySelector(
    `.favorite-card[data-quote-index='${currentIndex}']`
  );
  if (favoriteCard) {
    favoriteCard.remove();
  }
}

function toggleStar(toggleFavorite, currentQuote) {
  toggleFavorite.classList.toggle('filled', currentQuote.isFavorite);
}

export { showFavoriteCard, hideFavoriteCard, toggleStar };

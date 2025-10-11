import { showQuote, addFavoriteCard } from './handlers.js';

let localId;
function saveState(localQuote, localFavoriteQuotes) {
  const localStorageState = {
    localQuote,
    favorites: localFavoriteQuotes,
  };
  const localState = JSON.stringify(localStorageState);
  localStorage.setItem('appData', localState);
}

function loadState(quotes, elements) {
  const storage = localStorage.getItem('appData');
  const localState = JSON.parse(storage);
  if (!localState) {
    return;
  }

  const loadQuote = localState.localQuote.quote;
  const { id } = localState.localQuote;

  localId = id;
  const {
    quoteRan,
    toggleFavoriteBtn: btn,
    body,
    favoriteContainer: container,
  } = elements;
  showQuote(loadQuote, quoteRan, btn);

  if (localState.favorites) {
    localState.favorites.forEach((el) => {
      const index = el.id;
      quotes[index].isFavorite = true;

      addFavoriteCard(quotes, index, body, container);
    });
  }
}

export { saveState, loadState, localId };

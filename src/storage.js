import { showQuote } from './handlers.js';

function saveState(quote) {
  const localState = JSON.stringify(quote);
  localStorage.setItem('appData', localState);
}

function loadState(quoteRan, btn) {
  const storage = localStorage.getItem('appData');
  const localState = JSON.parse(storage);
  const quote = { ...localState.quote, id: localState.id };
  showQuote(quote, quoteRan, btn);
}

export { saveState, loadState };

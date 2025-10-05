function loadLocalStorage() {
  const localStorageData = localStorage.getItem('appData');
  if (!localStorageData) {
    return undefined;
  }
  return JSON.parse(localStorageData);
}

function saveLocalStorage(quote, localStorageArray) {
  console.log(quote, localStorageArray);
  const data = JSON.stringify({
    currentQuote: quote,
    favorites: localStorageArray,
  });
  localStorage.setItem('appData', data);
}

export { saveLocalStorage, loadLocalStorage };

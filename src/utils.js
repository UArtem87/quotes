//  Генерація індексу
const generateRandomIndex = (maxInt) => Math.floor(Math.random() * maxInt);

//  Присвоєння властивості isFavorite
function quoteIsFavorite(currentQuote) {
  if (currentQuote.isFavorite === undefined) {
    currentQuote.isFavorite = false;
  }
}

//  Відображення зірочки
const showStar = (btn) => {
  btn.classList.add('star', 'unfavorite');
};

export { generateRandomIndex, showStar, quoteIsFavorite };

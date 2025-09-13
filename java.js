const quotes = [
  {
    author: 'Альберт Айнштайн',
    quote: 'Прагніть не до успіху, а до цінностей, які він дає',
  },
  {
    author: 'Марк Твен',
    quote:
      'Через 20 років ви будете більше розчаровані тими речами, які ви не робили, ніж тими, які ви зробили. Тому відчальте від тихої пристані. Відчуйте попутний вітер у вашому вітрилі. Рухайтеся вперед, дійте, відкривайте!',
  },
  {
    author: 'Стів Джобс',
    quote: 'Ваш час обмежений, не витрачайте його, живучи чужим життям',
  },
  {
    author: 'Махатма Ганді',
    quote: 'Майбутнє залежить від того, що ви робите сьогодні',
  },
  {
    author: 'Вінстон Черчилль',
    quote:
      'Успіх не остаточний, невдачі не фатальні: важлива мужність продовжувати',
  },
  {
    author: 'Джим Рон',
    quote: 'Або ви керуєте своїм днем, або день керує вами',
  },
  {
    author: 'Аристотель',
    quote:
      'Ми те, що ми робимо постійно. Тому досконалість - це не дія, а звичка',
  },
  {
    author: 'Опра Вінфрі',
    quote:
      'Найбільша пригода, яку ви можете зробити, - це жити життям своєї мрії',
  },
  {
    author: 'Генрі Форд',
    quote:
      'Якщо ви думаєте, що можете, або думаєте, що не можете – ви маєте рацію',
  },
  {
    author: 'Лао-цзи',
    quote: 'Подорож у тисячу миль починається з одного кроку',
  },
];

const container = document.getElementById('container');
const pointer = document.getElementById('pointer');
const quoteRan = document.getElementById('quote');
const btn = document.getElementById('gen-btn');
const body = document.body;
const theme = document.getElementById('theme');

pointer.addEventListener('click', () => {
  pointer.classList.toggle('clicked');
  container.classList.toggle('clicked');
  body.classList.toggle('clicked');
  theme.classList.toggle('clicked');
});

function generateRandomQuote() {
  const Index = Math.floor(Math.random() * quotes.length);
  const { author, quote } = quotes[Index];
  quoteRan.innerHTML = `<em>"${quote}"</em><br>(${author})`;
}
btn.addEventListener('click', generateRandomQuote);

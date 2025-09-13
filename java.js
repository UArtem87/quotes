const quotes = [
  'Прагніть не до успіху, а до цінностей, які він дає - Альберт Айнштайн',
  'Через 20 років ви будете більше розчаровані тими речами, які ви не робили, ніж тими, які ви зробили. Тому відчальте від тихої пристані. Відчуйте попутний вітер у вашому вітрилі. Рухайтеся вперед, дійте, відкривайте! - Марк Твен',
  'Ваш час обмежений, не витрачайте його, живучи чужим життям - Стів Джобс',
];

const container = document.getElementById('container');
const pointer = document.getElementById('pointer');
const quote = document.getElementById('quote');
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
  quote.textContent = quotes[Index];
}
btn.addEventListener('click', generateRandomQuote);

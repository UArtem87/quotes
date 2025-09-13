const quotes = [
  'Прагніть не до успіху, а до цінностей, які він дає - Альберт Айнштайн',
  'Через 20 років ви будете більше розчаровані тими речами, які ви не робили, ніж тими, які ви зробили. Тому відчальте від тихої пристані. Відчуйте попутний вітер у вашому вітрилі. Рухайтеся вперед, дійте, відкривайте! - Марк Твен',
  'Ваш час обмежений, не витрачайте його, живучи чужим життям - Стів Джобс',
];

const quote = document.getElementById('quote');
const btn = document.getElementById('gen-btn');

function generateRandomQuote() {
  const Index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[Index];
}
btn.addEventListener('click', generateRandomQuote);

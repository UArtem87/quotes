const quotes = [
  'Прагніть не до успіху, а до цінностей, які він дає - Альберт Айнштайн',
  'Через 20 років ви будете більше розчаровані тими речами, які ви не робили, ніж тими, які ви зробили. Тому відчальте від тихої пристані. Відчуйте попутний вітер у вашому вітрилі. Рухайтеся вперед, дійте, відкривайте! - Марк Твен',
  'Ваш час обмежений, не витрачайте його, живучи чужим життям - Стів Джобс',
];

const quote = document.getElementById('quote');
const btn = document.getElementById('gen-btn');

let index = 0;
btn.addEventListener('click', () => {
  quote.textContent = quotes[index];
  index++;
  if (index === quotes.length) {
    index = 0;
  }
});

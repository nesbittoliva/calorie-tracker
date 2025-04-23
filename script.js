const form = document.getElementById(' calorie-form ');

let totalCalories = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const foodItem = document.getElementById('food-item').value;
  const calories = document.getElementById('calories').value;

  const food = foodItem;

  console.log('food:', foodItem);
  console.log('calories:', calories);



  const entrylist= document.getElementById('entry-list');
  const entry = document.createElement('li');
  listitem.textcontent = '${food} - ${calories} calories';
  entry.textContent = `${foodItem} - ${calories} calories`;

  foodinput.value = '';
  document.getElementById('food-item').value = '';
  document.getElementById('calories').value = '';
});

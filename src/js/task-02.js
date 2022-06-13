const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


const addingItem = options => {
  return options.map(option => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = option;
    listItemEl.classList.add('item');
    return listItemEl;
  
  });
  
  
}
const elements = addingItem(ingredients);
listEl.append(...elements);






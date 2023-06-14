const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



ingredients.forEach((item) => {
  const listItemEl = document.createElement("li");

  listItemEl.classList.add("item");

  const titles = document.createElement("h2");

  titles.textContent = item;

  listItemEl.appendChild(titles);

  const ingredientsEl = document.querySelector("#ingredients");
  
  ingredientsEl.appendChild(listItemEl);
});
const allCategories = document.querySelectorAll(".item");


const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategories.forEach((el) => {

  const categoryName = el.querySelector("h2");
 
  const numberOfItems = el.querySelectorAll("li");
 
  return console.log(`Category: ${categoryName.textContent}
Elements: ${numberOfItems.length}`);
});
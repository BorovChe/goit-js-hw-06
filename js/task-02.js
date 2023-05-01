const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const newLiEl = document.createElement("li");
  newLiEl.classList.add("item");
  newLiEl.textContent = `${element}`;
  return newLiEl;
});
list.append(...elements);
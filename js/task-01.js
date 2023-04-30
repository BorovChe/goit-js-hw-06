const ulEl = document.querySelector("#categories");
const liEl = ulEl.querySelectorAll("li.item");
console.log("Number of categories:", liEl.length);

liEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});

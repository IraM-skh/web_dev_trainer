import { category } from "../testData/categoryData";
const categoryList = JSON.parse(category);
const categoryAll = document.querySelector(".category_all");
function generateCategory(categoryName) {
  return `<li class="category">${categoryName}</li>`;
}

function setCategory() {
  categoryList.forEach((category) => {
    categoryAll.insertAdjacentHTML(
      "afterend",
      generateCategory(category.categoryName)
    );
  });
}

export { setCategory, categoryList };

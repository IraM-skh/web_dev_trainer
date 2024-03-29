import { categoryAll } from "./categoryHtmlEl";
import { categoryList } from "../ajax/parseFromJOSN";

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

export default setCategory;

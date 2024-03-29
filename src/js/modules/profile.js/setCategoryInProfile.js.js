import { statisticCategoryList } from "./ProfileHTMLEl";
import { categoryList } from "../ajax/parseFromJOSN";

function setCategoryInProfile() {
  statisticCategoryList.insertAdjacentHTML(
    "beforeend",
    addOptionToStatisticCategorys("Все")
  );
  categoryList.forEach((category) => {
    statisticCategoryList.insertAdjacentHTML(
      "beforeend",
      addOptionToStatisticCategorys(category.categoryName)
    );
  });
}

function addOptionToStatisticCategorys(value) {
  return `<option value="${value}">${value}</option>`;
}

export default setCategoryInProfile;

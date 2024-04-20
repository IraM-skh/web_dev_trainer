import { statisticCategoryList } from "./ProfileHTMLEl";
// import { categoryList } from "../ajax/parseFromJOSN";
import getCategorys from "../dataFromAjaxStatic/getCategorys";

async function setCategoryInProfile() {
  const categorys = await getCategorys();
  statisticCategoryList.insertAdjacentHTML(
    "beforeend",
    addOptionToStatisticCategorys("Все")
  );
  categorys.forEach((category) => {
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

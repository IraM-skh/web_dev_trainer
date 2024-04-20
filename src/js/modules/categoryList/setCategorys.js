import { categoryAll } from "./categoryHtmlEl";
import getCategorys from "../dataFromAjaxStatic/getCategorys.js";
import { addEventListenerOnTrainerList } from "../subjectsList/toggleChosenVariantStyle";

function generateCategory(categoryName) {
  return `<li class="category">${categoryName}</li>`;
}

async function setCategory() {
  const categorys = await getCategorys();
  categorys.forEach((category) => {
    categoryAll.insertAdjacentHTML(
      "afterend",
      generateCategory(category.categoryName)
    );
  });
  addEventListenerOnTrainerList();
}

export default setCategory;

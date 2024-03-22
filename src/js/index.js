import { setCategory } from "./modules/htmlElements/category.js";
import { setAllSubject } from "./modules/htmlElements/subject.js";
import { addEventListenerOnTrainerList } from "./modules/subjectsList/toggleChosenVariantStyle.js";
import "../scss/main.scss";
import changeNavBtnStyle from "./modules/nav/changeNavBtnStyle";
import "../js/modules/filter/toggleFilter.js";
import formValidator from "./modules/trainerSection/formValidator.js";
setCategory();
setAllSubject();
changeNavBtnStyle();
addEventListenerOnTrainerList();
const mainContainer = document.querySelector(".main_container");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("filter_container")) {
    console.log("фильтр");
  }
  if (event.target.classList.contains("task_form")) {
    formValidator(event.target);
  }
});

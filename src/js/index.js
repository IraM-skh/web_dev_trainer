import { setCategory } from "./modules/htmlElements/category.js";
import { setAllSubject } from "./modules/htmlElements/subject.js";
import { addEventListenerOnTrainerList } from "./modules/subjectsList/toggleChosenVariantStyle.js";
import "../scss/main.scss";
import changeNavBtnStyle from "./modules/nav/changeNavBtnStyle";
import "../js/modules/filter/toggleFilter.js";
import formValidator from "./modules/trainerSection/formValidator.js";
import { taskForm } from "./modules/htmlElements/trainerQA.js";
import changeSubjectOnNextBtn from "./modules/trainerSection/changeSubjectOnNextBtn.js";
import { filterContainer } from "./modules/filter/filterHtmlElements.js";
import checkFilterData from "./modules/filter/checkFilterData.js";
import { filterApplying } from "./modules/filter/filterApplying.js";
import toggleFilter from "../js/modules/filter/toggleFilter.js";
setCategory();
setAllSubject();
changeNavBtnStyle();
addEventListenerOnTrainerList();
const mainContainer = document.querySelector(".main_container");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("filter_container")) {
    filterApplying(event.target);
    toggleFilter();
  }
  if (event.target.classList.contains("task_form")) {
    formValidator(event.target);
  }
});

taskForm.addEventListener("click", (event) => {
  if (event.target.classList.contains("next_btn")) {
    changeSubjectOnNextBtn();
  }
});

filterContainer.addEventListener("change", (event) => {
  checkFilterData(event.target);
});

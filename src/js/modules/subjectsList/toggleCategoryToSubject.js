import { categoryContainer } from "../categoryList/categoryHtmlEl";
import { subjectContainer } from "../trainerSection/trainerSectionHTML";

function toggleCategoryToSubject(btn) {
  document
    .querySelectorAll(".toggle_trainer_list_btn")
    .forEach((btn) => btn.classList.toggle("width0"));
  btn.classList.contains("toggle_subjects_to_categorys_btn")
    ? toggleListClasses(subjectContainer, categoryContainer)
    : toggleListClasses(categoryContainer, subjectContainer);
}

function toggleListClasses(hideContainer, showContainer) {
  showContainer.classList.remove("width0");
  hideContainer.classList.remove("width100");
  showContainer.classList.add("width100");
  hideContainer.classList.add("width0");
}
export default toggleCategoryToSubject;

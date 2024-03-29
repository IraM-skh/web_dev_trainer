import { showTasks } from "../trainerSection/showTasks";
import setAllQA from "../trainerSection/trainerQA";
const trainerListContainer = document.querySelector(".trainer_list_container");
import { setAllSubject, setSbjectOnCategory } from "./subject";
import { getActiveSubject } from "./rewriteSubjectResult";
import setSelectsdSubjectOnChangeCategory from "./setSelectsdSubjectOnChangeCategory";

function addEventListenerOnTrainerList() {
  const category = [...document.querySelectorAll(".category")];

  trainerListContainer.addEventListener("click", (event) => {
    if (category.includes(event.target)) {
      toggleActiveClassInList(category, "category_selected", event.target);
      event.target.classList.contains("category_all")
        ? setAllSubject()
        : setSbjectOnCategory(event.target.textContent);
      setSelectsdSubjectOnChangeCategory();
      return;
    }

    if (event.target.classList.contains("subject")) {
      const subject = [...document.querySelectorAll(".subject")];
      getActiveSubject(event.target);
      toggleActiveClassInList(subject, "subject_selected", event.target);
      showTasks();
      setAllQA(event.target);
      return;
    }
  });
}

function toggleActiveClassInList(list, activeClassStr, target) {
  list.forEach((li) => {
    li.classList.remove(activeClassStr);
  });
  target.classList.add(activeClassStr);
}
export { trainerListContainer, addEventListenerOnTrainerList };

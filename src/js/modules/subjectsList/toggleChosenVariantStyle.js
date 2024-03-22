import showTasks from "../trainerSection/showTasks";
import setAllQA from "../htmlElements/trainerQA";
const trainerListContainer = document.querySelector(".trainer_list_container");
import { setAllSubject, setSbjectOnCategory } from "../htmlElements/subject";

const categoryContainer = document.querySelector(".category_container");
const subjectContainer = document.querySelector(".subject_container");

function addEventListenerOnTrainerList() {
  const category = [...document.querySelectorAll(".category")];

  trainerListContainer.addEventListener("click", (event) => {
    if (category.includes(event.target)) {
      toggleActiveClassInList(category, "category_selected", event.target);
      event.target.classList.contains("category_all")
        ? setAllSubject()
        : setSbjectOnCategory(event.target.textContent);
      return;
    }

    if (event.target.classList.contains("subject")) {
      const subject = [...document.querySelectorAll(".subject")];
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

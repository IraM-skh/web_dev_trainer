import {
  activeSubject,
  getActiveSubject,
} from "../htmlElements/rewriteSubjectResult";
import { chooseTrainerMessage, taskForm } from "../trainerSection/showTasks";
function setSelectsdSubjectOnChangeCategory() {
  const subjects = [...document.querySelectorAll(".subject")];
  const subjectsValues = subjects.map(
    (subjectElement) => subjectElement.textContent
  );
  if (!activeSubject) {
    return;
  }
  if (subjectsValues.includes(activeSubject.textContent)) {
    const activeSubjectNow = subjects.filter(
      (subjectElement) =>
        subjectElement.textContent === activeSubject.textContent
    );
    activeSubjectNow[0].classList.add("subject_selected");
    getActiveSubject(activeSubjectNow[0]);
  } else {
    chooseTrainerMessage.classList.remove("hidden");
    taskForm.classList.add("hidden");
  }
}

export default setSelectsdSubjectOnChangeCategory;

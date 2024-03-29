import { getActiveSubject, activeSubject } from "./rewriteSubjectResult";
import {
  taskForm,
  chooseTrainerMessage,
} from "../trainerSection/trainerSectionHTML";
import cleanTrainerMessage from "../trainerSection/cleanTrainerMessage";

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
    cleanTrainerMessage();
    chooseTrainerMessage.classList.remove("hidden");
    taskForm.classList.add("hidden");
  }
}

export default setSelectsdSubjectOnChangeCategory;

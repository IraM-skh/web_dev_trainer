import { activeSubject } from "../htmlElements/rewriteSubjectResult";
import { getActiveSubject } from "../htmlElements/rewriteSubjectResult";
import { showTasks } from "./showTasks";
import { setAllQA } from "../htmlElements/trainerQA";
function changeSubjectOnNextBtn() {
  activeSubject.classList.remove("subject_selected");
  activeSubject.nextElementSibling.classList.add("subject_selected");
  showTasks();
  setAllQA(activeSubject.nextElementSibling);
  getActiveSubject(activeSubject.nextElementSibling);
}

export default changeSubjectOnNextBtn;

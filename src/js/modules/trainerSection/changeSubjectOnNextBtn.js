import {
  getActiveSubject,
  activeSubject,
} from "../subjectsList/rewriteSubjectResult";
import { showTasks } from "./showTasks";
import setAllQA from "./trainerQA";
import { subjectContainer } from "./trainerSectionHTML";

function changeSubjectOnNextBtn() {
  activeSubject.classList.remove("subject_selected");
  activeSubject.nextElementSibling.classList.add("subject_selected");
  subjectContainer.scrollBy({
    left: 0,
    top: activeSubject.offsetHeight,
    behavior: "smooth",
  });
  showTasks();
  setAllQA(activeSubject.nextElementSibling);
  getActiveSubject(activeSubject.nextElementSibling);
}

export default changeSubjectOnNextBtn;

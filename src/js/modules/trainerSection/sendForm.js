import formEstimation from "./formEstimation";
import {
  rewriteSubjectResult,
  activeSubject,
} from "../subjectsList/rewriteSubjectResult";

import addNextBtn from "./addNextBtn";
import { taskForm } from "./trainerSectionHTML";

function sendForm(inputsForEstimation, showMessage) {
  if (formEstimation(inputsForEstimation)) {
    showMessage("Все правильно, молодец!");
    rewriteSubjectResult("solved");
    if (activeSubject.nextElementSibling) {
      addNextBtn(taskForm);
    }
    return;
  }
  showMessage("Неправильно! Можете попробовать снова.", true);
  rewriteSubjectResult("failed");
}

export default sendForm;

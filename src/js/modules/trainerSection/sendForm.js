import formEstimation from "./formEstimation";
import {
  rewriteSubjectResult,
  activeSubject,
} from "../htmlElements/rewriteSubjectResult";
import addNextBtn from "../htmlElements/addNextBtn";
import { taskForm } from "../htmlElements/trainerQA";

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

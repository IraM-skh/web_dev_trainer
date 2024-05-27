import formEstimation from "./formEstimation";
import {
  rewriteSubjectResult,
  activeSubject,
} from "../subjectsList/rewriteSubjectResult";

import addNextBtn from "./addNextBtn";
import { taskForm } from "./trainerSectionHTML";
import setResult from "../ajax/setResult";
import { trainerContainer } from "./trainerSectionHTML";

async function sendForm(inputsForEstimation, showMessage) {
  const formEstimationBool = await formEstimation(inputsForEstimation);
  let result = null;
  if (formEstimationBool) {
    result = "solved";
    showMessage("Все правильно, молодец!");
    rewriteSubjectResult(result);
    if (activeSubject.nextElementSibling) {
      addNextBtn(taskForm);
    }
  } else {
    result = "failed";
    showMessage("Неправильно! Можете попробовать снова.", true);
    rewriteSubjectResult(result);
  }

  const sendFormResponse = await setResult(activeSubject.textContent, result);
  if (!sendFormResponse?.result && sendFormResponse?.message != "no_user") {
    showMessage(sendFormResponse.message, true);
  }
  trainerContainer.scrollBy({
    left: 0,
    top: trainerContainer.offsetHeight,
    behavior: "smooth",
  });
}

export default sendForm;

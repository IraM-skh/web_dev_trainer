import { setTrainerMessage } from "../htmlElements/setTrainerMessage";
import cleanTrainerMessage from "../htmlElements/cleanTrainerMessage";
import formEstimation from "./formEstimation";
import sendForm from "./sendForm";
function formValidator(form) {
  cleanTrainerMessage();
  const inputs = [...form.querySelectorAll("input")];
  const category = new Set(inputs.map((input) => input.name));
  const checkedInputs = inputs.filter((input) => input.checked);
  const checkedCategory = new Set(checkedInputs.map((input) => input.name));
  if (!isEqualSet(category, checkedCategory)) {
    setTrainerMessage("Заполните все поля", true);
    return;
  }

  console.log("результат принят! Молодец!");
  sendForm(checkedInputs, setTrainerMessage);
}

function isEqualSet(set1, set2) {
  console.log();
  if (set1.size != set2.size) {
    return false;
  }

  set1.forEach((element) => {
    if (!set2.has(element)) {
      return false;
    }
  });
  return true;
}

export default formValidator;

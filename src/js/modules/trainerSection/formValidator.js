import setTrainerMessage from "./setTrainerMessage";
import cleanTrainerMessage from "./cleanTrainerMessage";
import sendForm from "./sendForm";
import { trainerContainer } from "./trainerSectionHTML";

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

  sendForm(checkedInputs, setTrainerMessage);

  trainerContainer.scrollBy({
    left: 0,
    top: trainerContainer.offsetHeight,
    behavior: "smooth",
  });
}

function isEqualSet(set1, set2) {
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

import getCorrectAnsversQuery from "../ajax/getCorrectAnsversQuery";
import { activeSubject } from "../subjectsList/rewriteSubjectResult";
async function formEstimation(checkedInputsArray) {
  const response = await getCorrectAnsversQuery(activeSubject.textContent);
  const correctAnsvers = await response.json();

  const inputCheckboxes = checkedInputsArray.filter(
    (input) => input.type === "checkbox"
  );
  const resultingArray = checkedInputsArray.map((input) => {
    if (input.type === "checkbox") {
      return correctAnsvers[input.name].length === inputCheckboxes.length
        ? correctAnsvers[input.name].includes(input.value)
        : false;
    }
    return correctAnsvers[input.name] === input.value;
  });
  return resultingArray.every((value) => value);
}

export default formEstimation;

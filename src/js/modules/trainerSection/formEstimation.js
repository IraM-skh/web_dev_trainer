import { correctAnsvers } from "../testData/categoryData";

function formEstimation(checkedInputsArray) {
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
  console.log(resultingArray.every((value) => value));
  return resultingArray.every((value) => value);
}

export default formEstimation;

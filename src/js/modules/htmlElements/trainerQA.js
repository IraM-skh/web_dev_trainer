import {
  question,
  subject,
  args,
  outputVariant,
} from "../testData/categoryData";
import { categoryList } from "./category";
const questionList = JSON.parse(question);
const subjectList = JSON.parse(subject);
const argsList = JSON.parse(args);
const outputVariantList = JSON.parse(outputVariant);
const chengeData = ["Да", "Нет"];
const taskForm = document.querySelector(".task_form");
//question.question и question.ansversType question.questionName;
//subject.description и subject.subjectName
//args просто массив с аргументами
//outputVariant.id outputVariant.type
//categoryList.output_ids categoryList.subjectsName

function setQestion(descriptionStr) {
  return `<h2>${descriptionStr}</h2>`; // questionList.question
}

function setAnswer(value, inputType, questionName, idQestion, idAnswer) {
  //value- subjectList.description/args/chengeData/outputVariantList.type
  //inputType - questionList.ansversType
  //questionName - questionList.questionName
  return `<input
              name="${questionName}" 
              type="${inputType}"
              value="${value}"
              id="${idQestion}${idAnswer}" /><label for="${idQestion}${idAnswer}">${value}</label>`;
}

const sendAnswersBtn = `<button class="send_answers_btn submit_bnt" type="submit">Проверить</button>`;

function getDescription(targetedSubject) {
  return subjectList.find(
    (subject) => subject.subjectName === targetedSubject.textContent
  ).description;
}

function getOutputVariant(targetedSubject) {
  return categoryList
    .find((category) =>
      category.subjectsName.includes(targetedSubject.textContent)
    )
    .outputIds.map(
      (id) =>
        outputVariantList.find((outputVariant) => outputVariant.id === id).type
    );
}

function cleanFormsField() {
  taskForm.innerHTML = "";
}
function setAllQA(targetedSubject) {
  cleanFormsField();
  const allAnswers = [
    { type: "description", values: getDescription(targetedSubject) },
    { type: "args", values: argsList },
    { type: "chengeData", values: chengeData },
    { type: "outputVariant", values: getOutputVariant(targetedSubject) },
  ];
  questionList.forEach((question, questionIndex) => {
    taskForm.insertAdjacentHTML("beforeend", setQestion(question.question));
    allAnswers
      .find((answer) => answer.type === question.questionName)
      .values.forEach((value, answerIndex) => {
        taskForm.insertAdjacentHTML(
          "beforeend",
          setAnswer(
            value,
            question.ansversType,
            question.questionName,
            questionIndex,
            answerIndex
          )
        );
      });
  });
  taskForm.insertAdjacentHTML("beforeend", sendAnswersBtn);
}

export default setAllQA;

// import {
//   question,
//   subject,
//   args,
//   outputVariant,
// } from "../testData/categoryData";
// import { categoryList } from "../ajax/parseFromJOSN";

import cleanTrainerMessage from "./cleanTrainerMessage";
import { trainerContainer } from "./trainerSectionHTML";
import { taskForm } from "./trainerSectionHTML";

import getCategorys from "../dataFromAjaxStatic/getCategorys";
import getOutputVariants from "../dataFromAjaxStatic/getOutputVariants";
import getQuestions from "../dataFromAjaxStatic/getQuestions";
import getSubjects from "../dataFromAjaxStatic/getSubjects";
import getArgs from "../dataFromAjaxStatic/getArgs";
import toggleWarningLoginMessage from "./toggleWarningLoginMessage";
import toggleStyleForTrainerContainerWithForm from "./toggleStyleForTrainerContainerWithForm";
import randomShuffleDescriptionValues from "./randomShuffleDescriptionVariants";

const changeData = ["Да", "Нет"];

function setQestion(descriptionStr) {
  return `<h2>${descriptionStr}</h2>`;
}

function setAnswer(value, inputType, questionName, idQestion, idAnswer) {
  return `<input
              name="${questionName}" 
              type="${inputType}"
              value="${value}"
              id="${idQestion}${idAnswer}" /><label for="${idQestion}${idAnswer}">${value}</label>`;
}

function exerciseContainer(question) {
  return `<div class = "exercise_container" id ="${question}"></div>`;
}
const sendAnswersBtn = `<div class = "btns_qa_container"><button class="send_answers_btn submit_btn" type="submit">Проверить</button></div>`;

async function getDescription(targetedSubject) {
  const subject = await getSubjects();
  return subject.find((subject) => {
    return subject.subjectName === targetedSubject.textContent;
  }).description;
}

async function getOutputVariantOrArgs(
  targetedSubject,
  asyncGetterFunction,
  categorysIdNameStr,
  needTypeOrArgStr
) {
  const searchValuesArray = await asyncGetterFunction();
  const categorys = await getCategorys();
  return categorys
    .find((category) => {
      return category.subjectsName.includes(targetedSubject.textContent);
    })
    [categorysIdNameStr].map((id) => {
      return searchValuesArray.find((searchValue) => searchValue.id === id)[
        needTypeOrArgStr
      ];
    });
}

function cleanFormsField() {
  taskForm.innerHTML = "";
}

async function setAllQA(targetedSubject) {
  cleanFormsField();
  cleanTrainerMessage();
  toggleWarningLoginMessage();
  toggleStyleForTrainerContainerWithForm();
  const question = await getQuestions();

  const descriptionValues = await getDescription(targetedSubject);
  const outputVariantValues = await getOutputVariantOrArgs(
    targetedSubject,
    getOutputVariants,
    "outputIds",
    "type"
  );
  const args = await getOutputVariantOrArgs(
    targetedSubject,
    getArgs,
    "idArgs",
    "arg"
  );
  randomShuffleDescriptionValues(descriptionValues);
  const allAnswers = [
    { type: "description", values: descriptionValues },
    { type: "args", values: args },
    { type: "changeData", values: changeData },
    { type: "outputVariant", values: outputVariantValues },
  ];

  question.forEach((question, questionIndex) => {
    taskForm.insertAdjacentHTML(
      "beforeend",
      exerciseContainer("EC" + questionIndex)
    );
    const exeContainerElement = document.querySelector(`#EC${questionIndex}`);
    exeContainerElement.insertAdjacentHTML(
      "beforeend",
      setQestion(question.question)
    );

    allAnswers
      .find((answer) => answer.type === question.questionName)
      .values.forEach((value, answerIndex) => {
        exeContainerElement.insertAdjacentHTML(
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
  trainerContainer.scrollBy({
    left: 0,
    top: -trainerContainer.offsetHeight,
    behavior: "smooth",
  });
}

export default setAllQA;

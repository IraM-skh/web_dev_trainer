import getQuestionQuery from "../ajax/getQuestionQuery";
const questions = [];

async function saveQuestions() {
  const response = await getQuestionQuery();
  questions.push(await response.json());
}

async function getQuestions() {
  if (questions.length === 0) {
    await saveQuestions();
  }
  return questions[0];
}

export default getQuestions;

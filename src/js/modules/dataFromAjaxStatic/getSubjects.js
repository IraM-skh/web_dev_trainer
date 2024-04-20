import getSubjectQuery from "../ajax/getSubjectQuery";
const subjects = [];

async function saveSubjectsFromAJAX() {
  const response = await getSubjectQuery();
  subjects.push(await response.json());
}

async function getSubjects() {
  if (subjects.length === 0) {
    await saveSubjectsFromAJAX();
  }
  return subjects[0];
}

export default getSubjects;

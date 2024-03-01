import { categoryList } from "./category";
const subjectUl = document
  .querySelector(".subject_container")
  .querySelector("ul");
function generateSubject(subjectName) {
  return `<li class="subject">${subjectName}</li>`;
}

function setAllSubject() {
  clearSubjectList();
  categoryList.forEach((category) => {
    category.subjectsName.forEach((subject) => {
      subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject));
    });
  });
}

function setSbjectOnCategory(categoryName) {
  clearSubjectList();
  categoryList
    .find((category) => category.categoryName === categoryName)
    .subjectsName.forEach((subject) => {
      subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject));
    });
}

function clearSubjectList() {
  document.querySelectorAll(".subject").forEach((subjectEl) => {
    subjectEl.remove();
  });
}
export { setAllSubject, setSbjectOnCategory };

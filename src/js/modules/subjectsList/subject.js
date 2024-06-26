import getCategorys from "../dataFromAjaxStatic/getCategorys";
import getUserResultQuery from "../ajax/getUserResultQuery";

import { filters, sortedBy } from "../filter/filterApplying";
import { subjectUl } from "./subjectHtmlEl";

function generateSubject(subjectName, result) {
  return `<li class="subject ${result}">${subjectName}</li>`;
}

async function setAllSubject() {
  clearSubjectList();
  const categorys = await getCategorys();
  const responseUserResult = await getUserResultQuery();
  const userResult = await responseUserResult.json();
  categorys.forEach((category) => {
    category.subjectsName.forEach((subject) => {
      subjectUl.insertAdjacentHTML(
        "beforeend",
        generateSubject(subject, subjectResult(subject, userResult))
      );
    });
  });
  setSubjectOnFilter();
}

async function setSbjectOnCategory(categoryName) {
  clearSubjectList();
  const categorys = await getCategorys();
  const responseUserResult = await getUserResultQuery();
  const userResult = await responseUserResult.json();
  categorys
    .find((category) => category.categoryName === categoryName)
    .subjectsName.forEach((subject) => {
      subjectUl.insertAdjacentHTML(
        "beforeend",
        generateSubject(subject, subjectResult(subject, userResult))
      );
    });
  setSubjectOnFilter();
}

function clearSubjectList() {
  document.querySelectorAll(".subject").forEach((subjectEl) => {
    subjectEl.remove();
  });
}

//
function subjectResult(subjectName, userResult) {
  if (userResult.solved.includes(subjectName)) {
    return "solved";
  }
  if (userResult.failed.includes(subjectName)) {
    return "failed";
  }
  return "unstarted";
}
function setSubjectOnFilter() {
  const subjects = [...document.querySelectorAll(".subject")];
  const starterFilters = ["solved", "failed", "unstarted"];
  starterFilters.forEach((filter) => filterSubjects(filter, subjects, filters));

  sortSubjects(subjects, sortedBy);
}

function sortSubjects(list, sortedBy) {
  if (sortedBy === "alphabet") {
    list.sort((a, b) => {
      return sortByAlphabet(a, b);
    });
  }
  if (sortedBy === "unstarted") {
    list.sort((a, b) => {
      return sortByClasses(a, b, "unstarted", "failed", "solved");
    });
  }

  if (sortedBy === "failed") {
    list.sort((a, b) => {
      return sortByClasses(a, b, "failed", "unstarted", "solved");
    });
  }
  list.forEach((element) => element.remove());
  subjectUl.append(...list);
}

function sortByAlphabet(a, b) {
  if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
    return -1;
  }
  if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
    return 1;
  }
  return 0;
}
function sortByClasses(a, b, t1Class, t2Class, t3Class) {
  if (a.classList.contains(t1Class) && b.classList.contains(t1Class)) {
    return sortByAlphabet(a, b);
  }

  if (
    (a.classList.contains(t1Class) && b.classList.contains(t3Class)) ||
    (a.classList.contains(t1Class) && b.classList.contains(t2Class))
  ) {
    return -1;
  }

  if (a.classList.contains(t2Class) && b.classList.contains(t3Class)) {
    return -1;
  }

  if (a.classList.contains(t2Class) && b.classList.contains(t2Class)) {
    return sortByAlphabet(a, b);
  }

  if (a.classList.contains(t3Class) && b.classList.contains(t2Class)) {
    return 1;
  }
  if (a.classList.contains(t3Class) && b.classList.contains(t3Class)) {
    return sortByAlphabet(a, b);
  }
  return 0;
}

function filterSubjects(filterCriterion, subjects, filtersValues) {
  if (!filtersValues.includes(filterCriterion)) {
    subjects.forEach((subject) => {
      if (subject.classList.contains(filterCriterion)) {
        subject.classList.add("hidden");
      }
    });
  }

  if (filtersValues.includes(filterCriterion)) {
    subjects.forEach((subject) => {
      if (subject.classList.contains(filterCriterion)) {
        subject.classList.remove("hidden");
      }
    });
  }
}
export { setAllSubject, setSbjectOnCategory, setSubjectOnFilter };

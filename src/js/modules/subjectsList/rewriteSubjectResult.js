let activeSubject = null;

function rewriteSubjectResult(newResult) {
  activeSubject.classList.remove("solved");
  activeSubject.classList.remove("failed");
  activeSubject.classList.add(newResult);
}

function getActiveSubject(subject) {
  activeSubject = subject;
}

export { rewriteSubjectResult, getActiveSubject, activeSubject };

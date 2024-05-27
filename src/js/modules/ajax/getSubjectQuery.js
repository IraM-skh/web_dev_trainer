import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

async function getSubjectQuery() {
  try {
    let urlSubject = "./php/getSubjects.php";
    return fetch(urlSubject);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getSubjectQuery;

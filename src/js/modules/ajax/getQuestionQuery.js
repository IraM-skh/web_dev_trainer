import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

async function getQuestionQuery() {
  try {
    let urlQuestion = "./php/getQuestion.php";
    return fetch(urlQuestion);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getQuestionQuery;

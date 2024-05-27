import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
async function getUserResultQuery() {
  try {
    let urlUserResult = "./php/getUserResults.php";
    return fetch(urlUserResult);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getUserResultQuery;

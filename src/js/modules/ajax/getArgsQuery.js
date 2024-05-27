import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
function getArgsQuery() {
  try {
    let urlGetArgs = "./php/getArgs.php";
    return fetch(urlGetArgs);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getArgsQuery;

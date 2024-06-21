import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
// import fetchQuery from "./fetchQuery";

function getArgsQuery() {
  // return fetchQuery("./php/getArgs.php", showGlobalErrorPopup);
  try {
    let urlGetArgs = "./php/getArgs.php";
    return fetch(urlGetArgs);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getArgsQuery;

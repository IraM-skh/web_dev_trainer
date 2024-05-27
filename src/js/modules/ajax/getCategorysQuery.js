import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

async function getCategorysQuery() {
  try {
    let urlGetCategorys = "./php/getCategorys.php";
    return fetch(urlGetCategorys);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getCategorysQuery;

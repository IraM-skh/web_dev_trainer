import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

function getOutputVariantQuery() {
  try {
    let urlOutputVariant = "./php/getOutputVariant.php";
    return fetch(urlOutputVariant);
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getOutputVariantQuery;

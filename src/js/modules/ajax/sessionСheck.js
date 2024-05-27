import logout from "./logout";
import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
async function sessionCheck() {
  try {
    let urlSessionCheck = "./php/sessionСheck.php";
    const response = await fetch(urlSessionCheck);
    const result = await response.json();
    if (!result) {
      logout();
    }
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default sessionCheck;

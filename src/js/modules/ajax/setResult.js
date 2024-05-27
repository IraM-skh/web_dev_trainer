import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
import logout from "./logout";
async function setResult(subjectName, userResult) {
  try {
    let data = {
      subjectName: subjectName,
      result: userResult,
    };
    const response = await fetch("./php/setResult.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result == "no_user") {
      return { result: false, message: result };
    }
    if (result == "result_added") {
      return { result: true, message: result };
    }
    if (result == "incorrect_id") {
      logout(false);
      return {
        result: false,
        message: "Результат не принят. Пожалуйста, войдите в профиль заново.",
      };
    }
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default setResult;

import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

async function getCorrectAnsversQuery(subjectName) {
  try {
    let urlCorrectAnsvers = "./php/getCorrectAnsvers.php";
    let userAnsvers = {
      subjectName: subjectName,
    };
    return await fetch(urlCorrectAnsvers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userAnsvers),
    });
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getCorrectAnsversQuery;

import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
async function setRegistration(login, password, boolRemember) {
  try {
    let urlRegistration = "./php/setRegistration.php";
    let userRegData = {
      login: login,
      password: password,
      remember: boolRemember,
    };
    const response = await fetch(urlRegistration, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userRegData),
    });
    const result = await response.json();

    const promise = new Promise(function (resolve, reject) {
      if (!result.error) {
        console.log(result);
        resolve("Регистрация: Данные приняты");
      } else {
        reject(result.error);
      }
    });

    return promise;
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default setRegistration;

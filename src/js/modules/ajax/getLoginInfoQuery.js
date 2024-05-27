import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";

async function getLoginInfoQuery(login, password, remember) {
  try {
    let urlLoginInfo = "./php/getLoginInfo.php";
    let dataLogin = {
      login: login,
      password: password,
      remember: remember,
    };
    const response = await fetch(urlLoginInfo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataLogin),
    });

    const result = await response.json();

    const promise = new Promise(function (resolve, reject) {
      if (result[0]) {
        console.log(result);
        resolve("Логин: Данные приняты");
      } else {
        reject("Неверные логин или пароль.");
      }
    });
    return promise;
  } catch (error) {
    showGlobalErrorPopup();
  }
}

export default getLoginInfoQuery;

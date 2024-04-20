function getLoginInfoQuery(login, password, rememder) {
  let urlLoginInfo = "./php/getLoginInfo.php";
  let dataLogin = {
    login: login,
    password: password,
    rememder: rememder,
  };
  fetch(urlLoginInfo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(dataLogin),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log("Что-то пошло не так");
    });
}

export default getLoginInfoQuery;

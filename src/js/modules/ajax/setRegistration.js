function setRegistration(login, password) {
  let urlRegistration = "./php/setRegistration.php";
  let userRegData = {
    login: login,
    password: password,
  };
  fetch(urlRegistration, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userRegData),
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

export default setRegistration;

function setResult(subjectName, result) {
  let data = {
    subjectName: subjectName,
    result: result,
  };
  fetch("./php/setResult.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Результат отправлен");
      return response;
    })
    .catch((error) => {
      console.log("Что-то пошло не так");
    });
}

export default setResult;

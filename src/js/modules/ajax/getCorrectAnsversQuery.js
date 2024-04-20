function getCorrectAnsversQuery(subjectName) {
  let urlCorrectAnsvers = "./php/getCorrectAnsvers.php";
  let userAnsvers = {
    subjectName: subjectName,
  };
  return fetch(urlCorrectAnsvers, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userAnsvers),
  });
  // .then((response) => response.json())
  // .then((response) => {
  //   console.log(response);
  //   return response;
  // })
  // .catch((error) => {
  //   console.log("Что-то пошло не так");
  // });
}

export default getCorrectAnsversQuery;

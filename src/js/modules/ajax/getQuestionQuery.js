function getQuestionQuery() {
  let urlQuestion = "./php/getQuestion.php";
  return fetch(urlQuestion);
  // .then((response) => response.json())
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getQuestionQuery;

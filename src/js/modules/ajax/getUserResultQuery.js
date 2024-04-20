function getUserResultQuery() {
  let urlUserResult = "./php/getUserResults.php";
  return fetch(urlUserResult);
  // .then((response) => response.json())
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getUserResultQuery;

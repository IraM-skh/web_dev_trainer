function getArgsQuery() {
  let urlGetArgs = "./php/getArgs.php";
  return fetch(urlGetArgs);
  // .then((response) => response.json())
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getArgsQuery;

function getCategorysQuery() {
  let urlGetCategorys = "./php/getCategorys.php";
  return fetch(urlGetCategorys);
  //.then((response) => response.json());
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getCategorysQuery;

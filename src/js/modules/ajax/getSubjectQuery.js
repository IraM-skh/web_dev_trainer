function getSubjectQuery() {
  let urlSubject = "./php/getSubjects.php";
  return fetch(urlSubject);
  // .then((response) => response.json())
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getSubjectQuery;

function getOutputVariantQuery() {
  let urlOutputVariant = "./php/getOutputVariant.php";
  return fetch(urlOutputVariant);
  // .then((response) => response.json())
  // .then((commits) => {
  //   console.log(commits);
  //   return commits;
  // });
}

export default getOutputVariantQuery;

function fetchQuery(url, errorFun) {
  try {
    return fetch(url);
  } catch (error) {
    errorFun();
  }
}

export default fetchQuery;

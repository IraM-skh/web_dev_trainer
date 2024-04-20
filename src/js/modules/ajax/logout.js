function logout() {
  let urlLogout = "./php/logout.php";
  fetch(urlLogout)
    .then((response) => response.json())
    .then((commits) => {
      return commits;
    });
}

export default logout;

function getLoginFromCookie() {
  const cookie = document.cookie.match(/user=(.+?)(;|$)/);

  return cookie ? cookie[1] : null;
}

export default getLoginFromCookie;

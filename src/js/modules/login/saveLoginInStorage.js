import { rememberLogin } from "./loginHtmlEl";
function saveLoginInStorage(loginName) {
  if (rememberLogin.checked) {
    localStorage.setItem("login", loginName);
  }
}

export default saveLoginInStorage;

import toggleLoginBtnDisplay from "../login/toggleLoginBtnDisplay";
import { userLogin } from "./ProfileHTMLEl";

function setLoginAtLocalStorage() {
  if (localStorage.getItem("login")) {
    toggleLoginBtnDisplay();
    userLogin.textContent = localStorage.getItem("login");
  } else {
    console.log("нет  src/js/modules/profile/setLoginAtLocalStorage.js");
  }
}

export default setLoginAtLocalStorage;

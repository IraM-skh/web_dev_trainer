import toggleLoginBtnDisplay from "../login/toggleLoginBtnDisplay";
import { userLogin } from "./ProfileHTMLEl";
import getLoginFromCookie from "../login/getLoginFromCookie";

function setLoginAtCookie() {
  if (getLoginFromCookie()) {
    toggleLoginBtnDisplay();
    userLogin.textContent = getLoginFromCookie();
  }
}

export default setLoginAtCookie;

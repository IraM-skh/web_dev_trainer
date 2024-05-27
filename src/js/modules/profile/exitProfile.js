import togglePopupDisplay from "../popups/togglePopupDisplay";
import toggleLoginBtnDisplay from "../login/toggleLoginBtnDisplay";
import { changeOpenPopup } from "../popups/changeOpenPopup";
import logout from "../ajax/logout";
function exitProfile() {
  logout();
  toggleLoginBtnDisplay();
  togglePopupDisplay();
  changeOpenPopup(null);
}

export default exitProfile;

import togglePopupDisplay from "../popups/togglePopupDisplay";
import toggleLoginBtnDisplay from "../login/toggleLoginBtnDisplay";
import { changeOpenPopup } from "../popups/changeOpenPopup";
function exitProfile() {
  localStorage.clear();

  toggleLoginBtnDisplay();
  togglePopupDisplay();
  changeOpenPopup(null);
}

export default exitProfile;

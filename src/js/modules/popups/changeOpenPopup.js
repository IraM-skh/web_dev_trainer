import { loginModalWindow } from "../login/loginHtmlEl";
import { profileModalWindow } from "../profile.js/ProfileHTMLEl";
import setCategoryInProfile from "../profile.js/setCategoryInProfile.js";
import countProfileResults from "../profile.js/countProfileResults.js";

let openPopup = null;

function changeOpenPopup(popupClassOrNull) {
  if (popupClassOrNull === null) {
    openPopup = popupClassOrNull;
  }
  if (popupClassOrNull === "login_modal_window") {
    openPopup = loginModalWindow;
  }
  if (popupClassOrNull === "profile_modal_window") {
    openPopup = profileModalWindow;
    setCategoryInProfile();
    countProfileResults();
  }
}

export { openPopup, changeOpenPopup };

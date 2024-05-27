import { loginModalWindow } from "../login/loginHtmlEl";
import { profileModalWindow } from "../profile/ProfileHTMLEl";
import setCategoryInProfile from "../profile/setCategoryInProfile";
import countProfileResults from "../profile/countProfileResults";

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
  if (popupClassOrNull === "error_message_modal_window") {
    openPopup = document.querySelector(".error_message_modal_window");
  }
}

export { openPopup, changeOpenPopup };

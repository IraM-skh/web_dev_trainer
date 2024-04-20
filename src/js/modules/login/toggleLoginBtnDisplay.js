import { showPopupLoginBtn } from "./loginHtmlEl";
import { showPopupProfileBtn } from "../profile/ProfileHTMLEl";
function toggleLoginBtnDisplay() {
  showPopupLoginBtn.classList.toggle("hidden");
  showPopupProfileBtn.classList.toggle("hidden");
}

export default toggleLoginBtnDisplay;

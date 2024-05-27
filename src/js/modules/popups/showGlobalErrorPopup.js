import { changeOpenPopup } from "./changeOpenPopup";
import togglePopupDisplay from "./togglePopupDisplay";
function showGlobalErrorPopup() {
  changeOpenPopup("error_message_modal_window");
  togglePopupDisplay();
}

export default showGlobalErrorPopup;

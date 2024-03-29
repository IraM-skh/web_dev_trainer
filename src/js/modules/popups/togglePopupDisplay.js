import { toggleDispay, overlayModal } from "../login/loginHtmlEl";

import { openPopup } from "./changeOpenPopup";
function togglePopupDisplay() {
  toggleDispay(overlayModal);
  toggleDispay(openPopup);
}

export default togglePopupDisplay;

import { loginModalWindow } from "../login/loginHtmlEl";
import chengeFocus from "./chengeFocus";
import formValidator from "../trainerSection/formValidator";

function ELForPopups() {
  loginModalWindow.addEventListener("keydown", function (event) {
    chengeFocus(event.key, event.target, event);
  });
}

export default ELForPopups;

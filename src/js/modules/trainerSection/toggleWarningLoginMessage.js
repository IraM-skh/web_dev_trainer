import { warningTrainerMessage } from "./trainerSectionHTML";
import { chooseTrainerMessage } from "./trainerSectionHTML";
function toggleWarningLoginMessage() {
  const cookie = document.cookie.match(/user=(.+?)(;|$)/);
  const isCookieSet = cookie ? true : false;
  const chooseTrainerMessageIsSet =
    !chooseTrainerMessage.classList.contains("hidden");
  if (!isCookieSet && chooseTrainerMessageIsSet) {
    warningTrainerMessage.classList.remove("hidden");
  } else {
    warningTrainerMessage.classList.add("hidden");
  }
}

export default toggleWarningLoginMessage;

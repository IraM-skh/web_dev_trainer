import { trainerMessageContainer } from "./setTrainerMessage";
function cleanTrainerMessage() {
  trainerMessageContainer.textContent = "";
  trainerMessageContainer.classList.remove("error_message");
  trainerMessageContainer.classList.add("hidden");
}

export default cleanTrainerMessage;

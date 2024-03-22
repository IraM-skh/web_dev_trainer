const trainerMessageContainer = document.querySelector(".trainer_message");
function setTrainerMessage(message, isError = false) {
  trainerMessageContainer.textContent = message;
  if (isError) {
    trainerMessageContainer.classList.add("error_message");
  }
  trainerMessageContainer.classList.remove("hidden");
}

export { trainerMessageContainer, setTrainerMessage };

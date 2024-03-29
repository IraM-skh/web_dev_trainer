import { chooseTrainerMessage, taskForm } from "./trainerSectionHTML";

function showTasks() {
  chooseTrainerMessage.classList.add("hidden");
  taskForm.classList.remove("hidden");
}

export { showTasks, chooseTrainerMessage, taskForm };

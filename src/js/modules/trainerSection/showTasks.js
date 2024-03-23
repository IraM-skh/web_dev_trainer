const chooseTrainerMessage = document.querySelector(".choose_trainer_message");
const taskForm = document.querySelector(".task_form");
function showTasks() {
  chooseTrainerMessage.classList.add("hidden");
  taskForm.classList.remove("hidden");
}

export { showTasks, chooseTrainerMessage, taskForm };

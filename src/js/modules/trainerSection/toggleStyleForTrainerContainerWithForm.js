import { trainerContainer, taskForm } from "./trainerSectionHTML";

function toggleStyleForTrainerContainerWithForm() {
  const isFormHidden = taskForm.classList.contains("hidden");
  if (isFormHidden) {
    trainerContainer.classList.remove("trainer_container_with_form");
  } else {
    trainerContainer.classList.add("trainer_container_with_form");
  }
}

export default toggleStyleForTrainerContainerWithForm;

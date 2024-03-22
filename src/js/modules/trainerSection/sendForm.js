import formEstimation from "./formEstimation";
function sendForm(inputsForEstimation, showMessage) {
  if (formEstimation(inputsForEstimation)) {
    showMessage("Все правильно, молодец!");
    return;
  }
  showMessage("Неправильно! Можете попробовать снова.", true);
}

export default sendForm;

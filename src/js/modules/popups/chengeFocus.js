import { rememberLogin } from "../login/loginHtmlEl";
import { passwordInput } from "../login/loginHtmlEl";
import { needToRegistrationBtn } from "../login/loginHtmlEl";
import { loginBtn } from "../login/loginHtmlEl";
import { taskForm } from "../trainerSection/trainerSectionHTML";
import { registrationBtn } from "../login/loginHtmlEl";
import { repeatPassword } from "../login/loginHtmlEl";
import loginFormValidate from "../login/loginFormValidate";

const loginFormContainer = document.querySelector(".login_form_container");
function chengeFocus(key, input, event) {
  if (key == "Enter") {
    event.preventDefault();
    const submitBtnClass = loginBtn.classList.contains("hidden")
      ? "registration_btn"
      : "login_btn";
    loginFormValidate(submitBtnClass);
    return;
  }
  if (key == "Tab") {
    if (input === passwordInput && !loginBtn.classList.contains("hidden")) {
      event.preventDefault();
      needToRegistrationBtn.focus();
      return;
    }

    if (input === repeatPassword && loginBtn.classList.contains("hidden")) {
      event.preventDefault();
      needToRegistrationBtn.focus();
      return;
    }
  }
}

export default chengeFocus;

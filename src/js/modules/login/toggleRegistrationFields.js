import {
  toggleDispay,
  registrationBtn,
  repeatPassword,
  loginBtn,
  needToRegistrationBtn,
} from "./loginHtmlEl";
import resetErrorStylesLogin from "./resetErrorStylesLogin";
let needToRegistration = true;
function toggleRegistrationFields() {
  toggleDispay(repeatPassword);
  toggleDispay(loginBtn);
  toggleDispay(registrationBtn);
  toggleMessage();
  resetErrorStylesLogin();
}

function toggleMessage() {
  !needToRegistration
    ? (needToRegistrationBtn.textContent = "У меня нет аккаунта")
    : (needToRegistrationBtn.textContent = "У меня есть аккаунт");
  needToRegistration = !needToRegistration;
}

export default toggleRegistrationFields;

import {
  loginInput,
  passwordInput,
  repeatPassword,
  loginErrorMessage,
} from "./loginHtmlEl";
function resetErrorStylesLogin() {
  loginErrorMessage.textContent = "";
  loginErrorMessage.classList.remove("hidden");
  [loginInput, passwordInput, repeatPassword].forEach((input) => {
    input.classList.remove("failed_validate");
  });
}

export default resetErrorStylesLogin;

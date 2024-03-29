import {
  loginInput,
  passwordInput,
  repeatPassword,
  loginErrorMessage,
} from "./loginHtmlEl";
import login from "./login";
import resetErrorStylesLogin from "./resetErrorStylesLogin";
import saveLoginInStorage from "./saveLoginInStorage";
import toggleLoginBtnDisplay from "./toggleLoginBtnDisplay";
import togglePopupDisplay from "../popups/togglePopupDisplay";
import { changeOpenPopup } from "../popups/changeOpenPopup";

function loginFormValidate(targetBtnClass) {
  let loginValidateResult = true;
  resetErrorStylesLogin();
  if (
    !loginInput.value.trim() ||
    !passwordInput.value.trim() ||
    (targetBtnClass === "registration_btn" && !repeatPassword.value.trim())
  ) {
    [loginInput, passwordInput, repeatPassword].forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("failed_validate");
      }
    });
    loginErrorMessage.textContent = "Заполните все поля.";
    loginValidateResult = false;
    return;
  }
  if (!checkSymbol(loginInput.value.trim())) {
    loginErrorMessage.textContent +=
      " Логин должен состять только из букв и/или цифр";
    loginInput.classList.add("failed_validate");
    loginValidateResult = false;
  }
  if (!checkSymbolLimit(4, 15, loginInput.value.trim())) {
    loginErrorMessage.textContent += " Логин должен состоять из 4-15 символов.";
    loginInput.classList.add("failed_validate");
    loginValidateResult = false;
  }
  if (!checkSymbolLimit(6, 30, passwordInput.value.trim())) {
    loginErrorMessage.textContent += " Пароль должен состоять из 6-30 символов";
    passwordInput.classList.add("failed_validate");
    loginValidateResult = false;
  }

  if (targetBtnClass === "registration_btn") {
    if (
      !checkPasswordEquival(
        passwordInput.value.trim(),
        repeatPassword.value.trim()
      )
    ) {
      loginErrorMessage.textContent += " Пароли не совпадают";
      repeatPassword.classList.add("failed_validate");
      loginValidateResult = false;
    }
  }
  if (loginValidateResult) {
    //отправка данных на php. Проверка логина и пароля. Если логина нет при выходе- ошибка такого логина не зарегестрированно. Если лоигн есть, но не совпадает пароль - неправильный пароль. Если при регистрации такой логин уже есть- ошибка "такой логин уже зарегистрирован, придумайте другой"
    console.log("данные приняты");
    loginErrorMessage.classList.add("hidden");
    login(loginInput.value.trim());
    saveLoginInStorage(loginInput.value.trim());
    toggleLoginBtnDisplay();
    togglePopupDisplay();
    changeOpenPopup(null);
  }
}

function checkSymbolLimit(minInclusive, maxInclusive, string) {
  if (string.length < minInclusive || string.length > maxInclusive) {
    return false;
  }
  return true;
}

function checkSymbol(string) {
  const regEx = /^[a-z0-9а-яё]+$/i;
  if (regEx.test(string)) {
    return true;
  }
  return false;
}
function checkPasswordEquival(pass1, pass2) {
  if (pass1 === pass2) {
    return true;
  }
  return false;
}

export default loginFormValidate;

import {
  loginInput,
  passwordInput,
  repeatPassword,
  loginErrorMessage,
  rememberLogin,
  messageAnyUnidentifiedErr,
} from "./loginHtmlEl";
import setLoginInProfile from "./setLoginInProfile";
import resetErrorStylesLogin from "./resetErrorStylesLogin";
import saveLoginInStorage from "./saveLoginInStorage";
import toggleLoginBtnDisplay from "./toggleLoginBtnDisplay";
import togglePopupDisplay from "../popups/togglePopupDisplay";
import { changeOpenPopup } from "../popups/changeOpenPopup";
import login from "./login";
import registration from "./registration";
import getLoginInfoQuery from "../ajax/getLoginInfoQuery";

import setRegistration from "../ajax/setRegistration";
import setCategory from "../categoryList/setCategorys";
import { setAllSubject } from "../subjectsList/subject";
import { categoryAll } from "../categoryList/categoryHtmlEl";
import toggleWarningLoginMessage from "../trainerSection/toggleWarningLoginMessage";
import toggleStyleForTrainerContainerWithForm from "../trainerSection/toggleStyleForTrainerContainerWithForm";
async function loginFormValidate(targetBtnClass) {
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
    if (targetBtnClass === "registration_btn") {
      try {
        await setRegistration(
          loginInput.value.trim(),
          passwordInput.value.trim(),
          rememberLogin.checked
        );
      } catch (error) {
        error === "Такой пользователь уже есть. Укажите другой логин."
          ? (loginErrorMessage.textContent += ` ${error}`)
          : (loginErrorMessage.textContent += ` ${messageAnyUnidentifiedErr}`);
        loginInput.classList.add("failed_validate");
        return;
      }
    } else {
      try {
        await getLoginInfoQuery(
          loginInput.value.trim(),
          passwordInput.value.trim(),
          rememberLogin.checked
        );
      } catch (error) {
        error === "Неверные логин или пароль."
          ? (loginErrorMessage.textContent += ` ${error}`)
          : (loginErrorMessage.textContent += ` ${messageAnyUnidentifiedErr}`);
        loginInput.classList.add("failed_validate");
        passwordInput.classList.add("failed_validate");
        return;
      }
    }

    loginErrorMessage.classList.add("hidden");
    setCategotyOnAll();
    setAllSubject();
    setLoginInProfile(loginInput.value.trim());
    toggleLoginBtnDisplay();
    togglePopupDisplay();
    clearFormFields([loginInput, passwordInput, repeatPassword]);
    changeOpenPopup(null);
    toggleWarningLoginMessage();
    toggleStyleForTrainerContainerWithForm();
  }
}

function clearFormFields(inputsArray) {
  inputsArray.forEach((input) => (input.value = ""));
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

function setCategotyOnAll() {
  const categoryElements = document.querySelectorAll(".category");
  categoryElements.forEach((el) => {
    el.classList.remove("category_selected");
  });
  categoryAll.classList.add("category_selected");
}
export default loginFormValidate;

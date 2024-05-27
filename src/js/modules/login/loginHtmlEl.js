const showPopupLoginBtn = document.querySelector(".show_popup_login_btn"); //не нужна???

const overlayModal = document.querySelector(".overlay_modal");
const loginModalWindow = document.querySelector(".login_modal_window");
const needToRegistrationBtn = document.querySelector(
  ".need_to_registration_btn"
);
const registrationBtn = document.querySelector(".registration_btn");
const loginErrorMessage = document.querySelector(".login_error_message");
const loginBtn = document.querySelector(".login_btn");
const repeatPassword = document.querySelector(".repeat_password");

const loginInput = document.querySelector(".login_input");
const passwordInput = document.querySelector(".password_input");
const rememberLogin = document.querySelector("#remember_login");

const messageAnyUnidentifiedErr =
  "Что-то пошло не так, попробуйте перезагрузить страницу.";

function toggleDispay(element) {
  element.classList.toggle("hidden");
}
export {
  overlayModal,
  loginModalWindow,
  registrationBtn,
  loginBtn,
  repeatPassword,
  toggleDispay,
  needToRegistrationBtn,
  loginInput,
  passwordInput,
  loginErrorMessage,
  rememberLogin,
  showPopupLoginBtn,
  messageAnyUnidentifiedErr,
};

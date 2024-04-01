import togglePopupDisplay from "../popups/togglePopupDisplay";
import { changeOpenPopup } from "../popups/changeOpenPopup";
function changeNavBtnStyle() {
  const navBtns = [...document.querySelectorAll(".nav_btn")];
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("show_popup_login_btn") ||
      event.target.classList.contains("profile_icon_login")
    ) {
      changeOpenPopup("login_modal_window");
      togglePopupDisplay();
      return;
    }

    if (
      event.target.classList.contains("show_popup_profile_btn") ||
      event.target.classList.contains("profile_icon_logined")
    ) {
      changeOpenPopup("profile_modal_window");
      togglePopupDisplay();
      return;
    }

    if (navBtns.includes(event.target)) {
      navBtns.forEach((btn) => btn.classList.remove("selected_section_btn"));
      event.target.classList.add("selected_section_btn");
    }
  });
}

export default changeNavBtnStyle;

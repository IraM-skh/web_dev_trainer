import setCategory from "./modules/categoryList/setCategory.js";
import { setAllSubject } from "./modules/subjectsList/subject.js";
import { addEventListenerOnTrainerList } from "./modules/subjectsList/toggleChosenVariantStyle.js";
import "../scss/main.scss";
import changeNavBtnStyle from "./modules/nav/changeNavBtnStyle";
import "../js/modules/filter/toggleFilter.js";
import formValidator from "./modules/trainerSection/formValidator.js";
import { taskForm } from "./modules/trainerSection/trainerSectionHTML.js";
import changeSubjectOnNextBtn from "./modules/trainerSection/changeSubjectOnNextBtn.js";
import { filterContainer } from "./modules/filter/filterHtmlElements.js";
import checkFilterData from "./modules/filter/checkFilterData.js";
import { filterApplying } from "./modules/filter/filterApplying.js";
import toggleFilter from "../js/modules/filter/toggleFilter.js";
import { overlayModal } from "./modules/login/loginHtmlEl.js";
import toggleRegistrationFields from "./modules/login/toggleRegistrationFields.js";
import loginFormValidate from "./modules/login/loginFormValidate.js";
import togglePopupDisplay from "./modules/popups/togglePopupDisplay.js";
import { changeOpenPopup } from "./modules/popups/changeOpenPopup.js";
import {
  statisticCategoryList,
  profileModalWindow,
} from "./modules/profile.js/ProfileHTMLEl.js";
import countProfileResults from "./modules/profile.js/countProfileResults.js";
import exitProfile from "./modules/profile.js/exitProfile.js";
import setLoginAtLocalStorage from "./modules/profile.js/setLoginAtLocalStorage.js";

setCategory();
setAllSubject();
changeNavBtnStyle();
addEventListenerOnTrainerList();
setLoginAtLocalStorage();

document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("filter_container")) {
    filterApplying(event.target);
    toggleFilter();
  }
  if (event.target.classList.contains("task_form")) {
    formValidator(event.target);
  }
});

taskForm.addEventListener("click", (event) => {
  if (event.target.classList.contains("next_btn")) {
    changeSubjectOnNextBtn();
  }
});

filterContainer.addEventListener("change", (event) => {
  checkFilterData(event.target);
});

overlayModal.addEventListener("click", (event) => {
  if (!event.target.classList.contains("overlay_modal")) {
    if (event.target.classList.contains("need_to_registration_btn")) {
      toggleRegistrationFields();
    }

    if (event.target.classList.contains("login_btn")) {
      loginFormValidate("login_btn");
    }
    if (event.target.classList.contains("registration_btn")) {
      loginFormValidate("registration_btn");
    }

    return;
  }
  togglePopupDisplay();
  changeOpenPopup(null);
});

statisticCategoryList.addEventListener("change", () => {
  countProfileResults();
});

profileModalWindow.addEventListener("click", (event) => {
  if (event.target.classList.contains("exit_profile_btn")) {
    exitProfile();
  }
});

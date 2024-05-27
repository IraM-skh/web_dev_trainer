import getUserResultQuery from "./getUserResultQuery";
import cleanTrainerMessage from "../trainerSection/cleanTrainerMessage";
import {
  chooseTrainerMessage,
  taskForm,
} from "../trainerSection/trainerSectionHTML";
import {
  activeSubject,
  getActiveSubject,
} from "../subjectsList/rewriteSubjectResult";
import showGlobalErrorPopup from "../popups/showGlobalErrorPopup";
import toggleWarningLoginMessage from "../trainerSection/toggleWarningLoginMessage";
import toggleStyleForTrainerContainerWithForm from "../trainerSection/toggleStyleForTrainerContainerWithForm";

async function logout(resetBool = true) {
  try {
    let urlLogout = "./php/logout.php";
    await fetch(urlLogout);
    if (!resetBool) {
      return;
    }
    await getUserResultQuery();
    resetAllResults();
    cleanTrainerMessage();
    chooseTrainerMessage.classList.remove("hidden");
    taskForm.classList.add("hidden");
    activeSubject?.classList.remove("subject_selected");
    getActiveSubject(null);
  } catch (error) {
    showGlobalErrorPopup();
    console.log("аргументы", error);
  }
  toggleWarningLoginMessage();
  toggleStyleForTrainerContainerWithForm();
}

function resetAllResults() {
  const subjects = document.querySelectorAll(".subject");
  subjects.forEach((subject) => {
    subject.classList.remove("solved");
    subject.classList.remove("failed");
    if (!subject.classList.contains("unstarted")) {
      subject.classList.add("unstarted");
    }
  });
}

export default logout;

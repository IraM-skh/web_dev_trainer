import { userLogin } from "../profile/ProfileHTMLEl";
function setLoginInProfile(login) {
  userLogin.textContent = login;
}

export default setLoginInProfile;

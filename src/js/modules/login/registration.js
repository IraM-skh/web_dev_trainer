import setRegistration from "../ajax/setRegistration";
import { loginErrorMessage } from "./loginHtmlEl";
async function registration(login, password, boolRemember) {
  try {
    const response = await setRegistration(login, password, boolRemember);
    console.log(response);
  } catch (err) {
    loginErrorMessage.textContent += err;
  }
}

export default registration;

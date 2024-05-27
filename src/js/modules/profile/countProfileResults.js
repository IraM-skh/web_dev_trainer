import {
  userSolved,
  userFailed,
  userUnstarted,
  statisticCategoryList,
} from "./ProfileHTMLEl";

import getUserResultQuery from "../ajax/getUserResultQuery";
import getCategorys from "../dataFromAjaxStatic/getCategorys";

async function countProfileResults() {
  const response = await getUserResultQuery();
  const userResult = await response.json();
  const categorys = await getCategorys();
  let countedUserSolved = 0;
  let countedUserFailed = 0;
  let countedUserUnstarted = 0;
  if (statisticCategoryList.value === "Все") {
    countedUserSolved = userResult.solved.length;
    countedUserFailed = userResult.failed.length;
    countedUserUnstarted =
      categorys.reduce(
        (acc, category) => acc + category.subjectsName.length,
        0
      ) -
      countedUserSolved -
      countedUserFailed;
  } else {
    const subjects = categorys.find((category) =>
      category.categoryName.includes(statisticCategoryList.value)
    ).subjectsName;

    userResult.solved.forEach((subjectSolved) => {
      if (subjects.includes(subjectSolved)) {
        countedUserSolved += 1;
      }
    });
    userResult.failed.forEach((subjectFailed) => {
      if (subjects.includes(subjectFailed)) {
        countedUserFailed += 1;
      }
    });
    countedUserUnstarted =
      subjects.length - countedUserSolved - countedUserFailed;
  }

  userSolved.textContent = countedUserSolved;
  userFailed.textContent = countedUserFailed;
  userUnstarted.textContent = countedUserUnstarted;
}

export default countProfileResults;

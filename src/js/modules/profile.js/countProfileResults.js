import {
  userSolved,
  userFailed,
  userUnstarted,
  statisticCategoryList,
} from "./ProfileHTMLEl";

import { userResults } from "../testData/categoryData";
import { categoryList } from "../ajax/parseFromJOSN";
function countProfileResults() {
  let countedUserSolved = 0;
  let countedUserFailed = 0;
  let countedUserUnstarted = 0;
  if (statisticCategoryList.value === "Все") {
    countedUserSolved = userResults.solved.length;
    countedUserFailed = userResults.failed.length;
    countedUserUnstarted =
      categoryList.reduce(
        (acc, category) => acc + category.subjectsName.length,
        0
      ) -
      countedUserSolved -
      countedUserFailed;
  } else {
    const subjects = categoryList.find((category) =>
      category.categoryName.includes(statisticCategoryList.value)
    ).subjectsName;

    userResults.solved.forEach((subjectSolved) => {
      if (subjects.includes(subjectSolved)) {
        countedUserSolved += 1;
      }
    });
    userResults.failed.forEach((subjectFailed) => {
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

import { trainerListContainer } from "../subjectsList/toggleChosenVariantStyle";
const filterBtn = document.querySelector(".filter_btn svg");
const filterContainer = document.querySelector(".filter_container");
filterBtn.addEventListener("click", (event) => {
  filterContainer.classList.toggle("hidden");
  trainerListContainer.classList.toggle("hidden");
});

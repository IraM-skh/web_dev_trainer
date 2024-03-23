import { trainerListContainer } from "../subjectsList/toggleChosenVariantStyle";
import { filterBtn, filterContainer } from "./filterHtmlElements";
function toggleFilter() {
  filterContainer.classList.toggle("hidden");
  trainerListContainer.classList.toggle("hidden");
}
filterBtn.addEventListener("click", (event) => {
  toggleFilter();
});

export default toggleFilter;

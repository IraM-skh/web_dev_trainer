import { trainerListContainer } from "../subjectsList/toggleChosenVariantStyle";
import { filterBtn, filterContainer } from "./filterHtmlElements";
function toggleFilter() {
  filterContainer.classList.toggle("show_filter_container");
}
filterBtn.addEventListener("click", (event) => {
  toggleFilter();
});

export default toggleFilter;

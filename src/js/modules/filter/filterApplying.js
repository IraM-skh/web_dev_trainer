import { filterSortElement } from "./filterHtmlElements";
import toggleFilter from "./toggleFilter";
import { setSubjectOnFilter } from "../htmlElements/subject";
const filters = ["solved", "failed", "unstarted"];
let sortedBy = "alphabet";
function filterApplying(form) {
  const checkedCheckboxes = [...form.querySelectorAll(".filter_checkbox")]
    .filter((checkboxElement) => checkboxElement.checked)
    .map((checkboxElement) => checkboxElement.value);
  const sortedBy = filterSortElement.value;
  setFilters(checkedCheckboxes);
  setSortedBy(sortedBy);
  setSubjectOnFilter(sortedBy);
  //toggleFilter();
}

function setFilters(newFilters) {
  filters.splice(0, filters.length);
  filters.push(...newFilters);
}

function setSortedBy(newSortedBy) {
  sortedBy = newSortedBy;
}
export { filterApplying, filters, sortedBy };

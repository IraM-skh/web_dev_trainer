import { filterSortElement } from "./filterHtmlElements";

const options = [...filterSortElement.querySelectorAll("option")];
function checkFilterData(chengeInput) {
  if (chengeInput.classList.contains("filter_checkbox")) {
    const optionForHide = options.filter(
      (optionElement) => optionElement.value === chengeInput.value
    )[0];
    if (optionForHide) {
      optionForHide.classList.toggle("hidden");
    }
    if (!chengeInput.checked) {
      if (filterSortElement.value === chengeInput.value) {
        filterSortElement.value = "alphabet";
      }
    }
  }
}

export default checkFilterData;

const nextBtn = `<button class="next_btn" type="button">Далее</button>`;
function addNextBtn(form) {
  const existingNextBtn = form.querySelector(".next_btn");
  if (existingNextBtn) {
    return;
  }
  form
    .querySelector(".send_answers_btn")
    .insertAdjacentHTML("afterend", nextBtn);
}

export default addNextBtn;

function changeNavBtnStyle() {
  const navBtns = [...document.querySelectorAll(".nav_btn")];
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (event) => {
    if (navBtns.includes(event.target)) {
      navBtns.forEach((btn) => btn.classList.remove("selected_section_btn"));
      event.target.classList.add("selected_section_btn");
    }

    return;
  });
}

export default changeNavBtnStyle;

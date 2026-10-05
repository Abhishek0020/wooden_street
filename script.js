const topButton = document.querySelector(".top-button");
const searchForm = document.querySelector(".search-form");
const tabButtons = document.querySelectorAll(".tabs button");
const dots = document.querySelectorAll(".slider-dots span");
const heroControls = document.querySelectorAll(".hero-control");

topButton.classList.toggle("is-visible", window.scrollY > 900);

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topButton.classList.toggle("is-visible", window.scrollY > 900);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = searchForm.querySelector("input");
  const value = input.value.trim();
  input.placeholder = value ? `Showing ideas for "${value}"` : "Search Products, Color & More...";
  input.value = "";
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

let activeDot = 0;

function updateDots(direction) {
  dots[activeDot].classList.remove("active");
  activeDot = (activeDot + direction + dots.length) % dots.length;
  dots[activeDot].classList.add("active");
}

heroControls.forEach((button) => {
  button.addEventListener("click", () => {
    updateDots(button.classList.contains("next") ? 1 : -1);
  });
});

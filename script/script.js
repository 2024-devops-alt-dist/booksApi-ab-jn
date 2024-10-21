const search = document.querySelector(".search");
const sectionsContainer = document.querySelector(".sections-container");

search.addEventListener("click", () => {
  sectionsContainer.classList.toggle("visible");
});

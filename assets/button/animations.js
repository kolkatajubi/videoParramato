function run(container) {
  container.addEventListener("animationend", () => {
    container.classList.remove("active");
    container.classList.add("remove");
  });
}

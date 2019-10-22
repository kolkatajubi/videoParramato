function run(container) {
  container.classList.toggle("active");
  container.addEventListener("animationend", () => {
    container.classList.remove("active");
    container.classList.add("remove");
  });
}

$(document).ready(() => {
  let classes = document.getElementsByClassName("container");
  for (let element of classes) {
    element.style.width =
      element.firstElementChild.innerHTML.length * 12 + "px";
  }
});

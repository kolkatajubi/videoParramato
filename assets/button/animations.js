function animateClick(event) {
  console.log("CLICKED");

  let padding = 20;
  let intervalEl = setInterval(() => {
    if (padding < 22) {
      $(event.srcElement).css("padding", "10px " + padding + "px");
      padding += 0.1;
    } else {
      clearInterval(intervalEl);
    }
  }, 100);
}

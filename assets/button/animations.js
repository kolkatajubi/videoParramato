function clickThis(el) {
  let width = $(el).width();
  setInterval(() => {
    if (width > 20) {
      width -= 0.5;
      $(el).html("i");
      $(el).css("width", width + "px");
    }
  }, 5);
}

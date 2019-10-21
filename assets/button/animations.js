function start(event) {
  let padding = 20;
  padding -= 2;
  $(event.srcElement).css("padding", "10px " + padding + "px");
}

function end(event) {
  let padding = 20;
  $(event.srcElement).css("padding", "10px " + padding + "px");
}

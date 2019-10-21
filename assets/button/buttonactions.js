var fullscreen = 0;

$(document).ready(() => {
  document.getElementById("stylesheet").href = theme[flow.theme];
  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  exitHandler(document);
});

function exitHandler(document) {
  if (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  ) {
    fullscreen = 0;
    // document.getElementById("fs").innerHTML = "FULLSCREEN";
    $(".display")
      .width(640)
      .height(360);
  }
}

function FS() {
  // console.log("fullscreen called...", fullscreen);
  if (fullscreen == 0) {
    if (document.body.requestFullscreen) document.body.requestFullscreen();
    else if (document.body.mozRequestFullScreen)
      document.body.mozrequestFullscreen();
    else if (document.body.webkitRequestFullscreen)
      document.body.webkitRequestFullscreen();
    else if (document.body.msRequestFullscreen)
      document.body.msRequestFullscreen();
    fullscreen = 1;
    // document.getElementById("fs").innerHTML = "EXIT FULLSCREEN";
    $(".display")
      .width("100%")
      .height("100%");
  }
}

// function toggleFS() {
//   // console.log("toggle fullscreen called...", fullscreen);
//   if (fullscreen == 0) FS();
// }

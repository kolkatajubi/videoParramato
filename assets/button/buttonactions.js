var fullscreen = 0;

$(document).ready(() => {
  console.log("ready");
  let classes = document.getElementsByClassName("button");
  for (let element of classes) {
    console.log(element);
    element.style.width =
      element.firstElementChild.innerHTML.length * 12 + "px";
  }
});
function run(button) {
  button.classList.toggle("active");
  button.addEventListener("animationend", () => {
    button.classList.remove("active");
    button.classList.add("remove");
    getSiblings(button).forEach(el => {
      el.classList.add("remove");
    });
  });
  getSiblings(button).forEach(el => {
    el.style.opacity = "0.2";
  });
}

var getSiblings = function(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

function playPause() {
  // FS();
  // console.log("play called fullscreen...");
  if (myVideo.paused) {
    removeBlurBackground();
    myVideo.play();
    // document.getElementById("playpause").innerHTML = "PAUSE";
  } else {
    myVideo.pause();
    blurBackground();
    // document.getElementById("playpause").innerHTML = "PLAY";
  }
}

function removeBlurBackground() {
  document.getElementById("myVideo").style.filter = "blur(0px)";
}

function blurBackground() {
  document.getElementById("myVideo").style.filter = "blur(10px)";
}

function exitHandler(document) {
  console.log("exit handler...");
  if (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  ) {
    fullscreen = 0;
    console.log("fullscreen = ", fullscreen);
    // document.getElementById("fs").innerHTML = "FULLSCREEN";
    // $(".display")
    //   .width(640)
    //   .height(360);
  }
}

function FS() {
  console.log("fullscreen called...FS");
  if (fullscreen == 0) {
    if (document.body.requestFullscreen) document.body.requestFullscreen();
    else if (document.body.mozRequestFullScreen)
      document.body.mozrequestFullscreen();
    else if (document.body.webkitRequestFullscreen)
      document.body.webkitRequestFullscreen();
    else if (document.body.msRequestFullscreen)
      document.body.msRequestFullscreen();

    console.log("fullscreen = ", fullscreen);
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
function moveTouch(ev) {
  FS();
  // Process the event
}

function init() {
  var el = document.getElementById("target1");
  el.ontouchmove = moveTouch;
}

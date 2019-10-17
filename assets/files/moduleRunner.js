var flow = {
  _id: "5c83c5150fff5393bdc48b4b",
  flowId: "insurance",
  projectId: "finservVoiceUat_111217597624559107965",
  id: "finservVoiceUat_111217597624559107965-insurance",
  theme: "light",
  stages: [
    {
      text: [
        "Choosing to insure is a great step indeed.😊 What can I assist you with specifically? "
      ],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/start.mp4",
      type: "button",
      stage: "start",
      next: {
        data: [
          {
            data: "Health Insurance",
            text: "Health Insurance🏥"
          },
          {
            data: "ULIP",
            text: " ULIP💸"
          },
          {
            data: "Travel Insurance",
            text: " Travel  Insurance ✈️"
          },
          {
            data: "Cyber Insurance",
            text: "Cyber Insurance💻"
          },
          {
            data: " MotorInsurance",
            text: " Motor Insurance 🚗"
          },
          {
            data: " pocket",
            text: " Sachet Insurance👝"
          },
          {
            data: "offer",
            text: " Group Term Life 🎁"
          }
        ],
        expectation: {
          invalidMessage:
            "Oh no, currently I can help you with Health, Cyber, Travel Insurance and ULIP only, but don’t worry, very soon I will be able to serve you with your broader financial needs as well 😊",
          val: {
            travel: "",
            cyber: "",
            health: "",
            ulip: "",
            motor: "",
            pocket: "",
            offer: ""
          },
          type: "wordList"
        }
      },
      firstMessage: "Awesome!",
      skipGhost: true
    },
    {
      text: [
        "Oh even I am happy to see you happy and will do my best to make you even more happy by solving your queries"
      ],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/name.mp4",
      stage: "name",
      type: "text"
    },
    {
      text: [
        "Insurance is a contract, represented by a policy, in which an individual or entity receives financial protection or reimbursement against losses from an insurance company."
      ],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/gender.mp4",
      type: "quickReply",
      stage: "gender",
      next: {
        data: [
          {
            data: "MALE",
            text: "MALE"
          },
          {
            data: "FEMALE",
            text: "FEMALE"
          }
        ]
      }
    },
    {
      text: [
        "Apart from the amount that you decide to invest, there are minimum charges to be paid when opening an account under National Pension Scheme. These include transaction charges, advisory charges and applicable GST. Do keep in mind that these charges are calculated basis the amount you invest. "
      ],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/dependent.mp4",
      type: "button",
      stage: "dependent",
      next: {
        data: [
          {
            type: "url",
            data: "https://www.bajajfinservmarkets.in/cust/#/?product=NPS",
            text: "Invest in NPS"
          },
          {
            data: "Skip",
            text: "Skip"
          }
        ]
      }
    },
    {
      text: [
        "Apart from the amount that you decide to invest, there are minimum charges to be paid when opening an account under National Pension Scheme. These include transaction charges, advisory charges and applicable GST. Do keep in mind that these charges are calculated basis the amount you invest. "
      ],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/salary.mp4",
      type: "button",
      stage: "salary",
      next: {
        data: [
          {
            type: "webView",
            data: "https://pixie.jubi.ai/videoParramato/webview",
            text: "Invest in NPS"
          },
          {
            data: "Skip",
            text: "Skip"
          }
        ]
      }
    },
    {
      text: [" What is the name of your Firm?(Eg: ABC Associates)"],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/expense.mp4",
      type: "text",
      stage: "expense",
      next: {
        expectation: {
          invalidMessage: "",
          type: "regex",
          val: "^[\\d]+$"
        }
      }
    },
    {
      text: [" What is the name of your Firm?(Eg: ABC Associates)"],
      video: "https://pixie.jubi.ai/videoParramato/static/videos/end.mp4",
      type: "generic",
      stage: "end",
      next: {
        data: [
          {
            image: "image_link_of_the_carousel",
            title: "title_of_the_carousel",
            text: "sub_text_of_carousel",
            buttons: [
              {
                text: "button_text_to_be_shown",
                data: "button_data_payoad"
              },
              {
                text: "button_text_to_be_shown",
                data: "button_data_payoad"
              }
            ]
          },
          {
            image: "image_link_of_the_carousel",
            title: "title_of_the_carousel",
            text: "sub_text_of_carousel",
            buttons: [
              {
                text: "button_text_to_be_shown",
                data: "button_data_payoad"
              }
            ]
          }
        ]
      }
    }
  ],
  folder: "personalLoanLending"
};

var theme = {
  default: "",
  dark: "https://pixie.jubi.ai/videoParramato/static/css/styledark.css",
  light: "https://pixie.jubi.ai/videoParramato/static/css/stylexls.css"
};
var currentStageNum = -1; // Stores current stage number
var flowJSON = {}; // Stores flow key(stage name) - value(stage data) pair
var currentData = {}; // Stores current stage data
var display = ""; // HTML DOM elements to be displayed
var status = 0; // Tracks if button is displayed or not
var fullscreen = 0; // Tracks if the view is fullscreen or not
// var base64loaded = "not yet"; // Checks if base64 value of video is loaded
// var videoData = {}; // Stores the base64 data of video

//======================================================================================

$(document).ready(() => {
  document.getElementById("stylesheet").href = theme[flow.theme];
  // console.log("document.ready...");

  // $.ajax({
  //   url: "https://pixie.jubi.ai/videoParramato/base64",
  //   type: "get",
  //   dataType: "json",
  //   contentType: "application/json",
  //   success: resp => {
  //     console.log("Ajax Success !!");
  //     base64loaded = resp.status;
  //     videoData = videoData;
  //   },
  //   error: err => {
  //     console.log("Error");
  //   }
  // });
  // -----------------------------------------input onchange listener--------------------------------
  // $(".response-text").addEventListener("change", function() {
  //   console.log("validate name called ");
  //   validate_name();
  // });
  // ------------------------------------------------------------------------------------------

  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  function exitHandler() {
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

  (() => {
    // getNextStageData("stageWV");

    getNextStageData();
    function blurBackground() {
      getElementById("video").style.filter.blurBackground = true;
    }

    setInterval(() => {
      // console.log("setInterval...");
      var videoDuration = document
        .getElementById("myVideo")
        .duration.toFixed(2);
      var videoTime = document.getElementById("myVideo").currentTime.toFixed(2);
      // console.log(videoTime);
      if (status == 0)
        if (videoTime >= videoDuration - 1.0) {
          status = 1;
          // console.log("1secs left...");
          blurBackground();
          createUI(currentData);
        }
    }, 100);
  })();
});

function playPause() {
  FS();
  // console.log("play called fullscreen...");
  if (myVideo.paused) {
    $("#playImg").hide();
    myVideo.play();
    // document.getElementById("playpause").innerHTML = "PAUSE";
  } else {
    myVideo.pause();
    $("#playImg").show();
    // document.getElementById("playpause").innerHTML = "PLAY";
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

function exitFS() {
  // console.log("exit fullscreen called...", fullscreen);
  if (fullscreen == 1) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    fullscreen = 0;
    // document.getElementById("fs").innerHTML = "FULLSCREEN";
    $(".display")
      .width(640)
      .height(360);
  }
}

function toggleFS() {
  // console.log("toggle fullscreen called...", fullscreen);
  if (fullscreen == 0) FS();
  else exitFS();
}

//======================================================================================

// Creating Flow JSON of key(stage name) - value(stage data) pair
for (i = 0; i < flow.stages.length; i++) {
  //   var key = flow.stages[i].stage;
  //   var value = flow.stages[i];
  //   data[key] = value;
  flowJSON[flow.stages[i].stage] = flow.stages[i];
}

// console.log(JSON.stringify(flowJSON, 0, 3));

// getNextStageData("stageWV");
// getNextStageData("offNameGeneric");
// createUI(currentData);

// getNextStageData will return the next stage data and display video
function getNextStageData(nextStage) {
  // console.log("getNextStageData...");
  clearChat();
  $("#playImg").hide();
  status = 0;
  currentData = {}; // Stores current stage data
  display = ""; // HTML DOM elements to be displayed
  if (nextStage == undefined) {
    currentStageNum += 1;
    // console.log("currentStageNum : ", currentStageNum);
    currentData = flow.stages[currentStageNum];
    // console.log(JSON.stringify(currentData, 0, 3));
    // if (base64loaded == "not yet") {
    // console.log("Video Data from URL...");
    videoDisplay(currentData.video);
    // } else {
    //   console.log("Video Data from base64...");
    //   videoDisplay("data:video/mp4;base64," + videoData[currentData.stage]);
    // }
    // createUI(currentData);
  } else {
    currentStageNum = Object.keys(flowJSON).indexOf(nextStage);
    // console.log("currentStageNum : ", currentStageNum);
    currentData = flowJSON[nextStage];
    // console.log(JSON.stringify(currentData, 0, 3));
    // if (base64loaded == "not yet") {
    // console.log("Video Data from URL...");
    videoDisplay(currentData.video);
    // } else {
    //   console.log("Video Data from base64...");
    //   videoDisplay("data:video/mp4;base64," + videoData[currentData.stage]);
    // }
    // createUI(currentData);
  }
}

function videoDisplay(videoData) {
  // console.log("videoDisplay...");
  // console.log(videoData);
  $("#myVideo").empty();
  $("#myVideo").append(
    "<source id='start' type='video/mp4' src='" + videoData + "' />"
  );
  // console.log("<source id='start' type='video/mp4' src='" + videoData + "' />");
  // $("#myVideo").attr("poster", "");
  var video = document.getElementById("myVideo");
  // console.log(video);
  video.load();
  if (currentStageNum == 0) $("#playImg").show();
  else video.play();
}

function createUI(currentData) {
  // console.log("createUI...");
  // console.log(currentData);
  switch (currentData.type) {
    case "text":
      // console.log("text");
      if (
        currentData.next &&
        currentData.next.expectation &&
        currentData.next.expectation.type == "regex"
      ) {
        display = display + createText(currentData.next.expectation.val);
      } else {
        display = display + createText();
      }
      // validateButton();
      break;
    case "button":
    case "quickReply":
      // console.log("button / QuickReply");
      for (i in currentData.next.data) {
        if (!currentData.next.data[i].type) {
          display =
            display +
            createButton(
              currentData.next.data[i].data,
              currentData.next.data[i].text
            );
        } else if (currentData.next.data[i].type === "url") {
          display =
            display +
            createButtonURL(
              currentData.next.data[i].data,
              currentData.next.data[i].text
            );
        } else if (currentData.next.data[i].type === "webView") {
          display =
            display +
            createButtonWebView(
              currentData.next.data[i].data,
              currentData.next.data[i].text
            );
        }
      }
      // console.log(display);
      break;
    case "generic":
      // console.log("generic");
      display = display + createGeneric(currentData.next.data);
      // console.log(display);
      break;
    default:
      // console.log("Not a type");
      break;
  }

  if (currentStageNum == flow.stages.length - 1) replayFlow();
  displayChat(display);
}

function displayChat(view) {
  // console.log("displayChat...");
  $(".chat").append(view);
}

function clearChat() {
  // console.log("clearChat...");
  $(".chat").empty();
}

function createButton(data, text) {
  // console.log("Create Button");
  // console.log("data", data);
  // console.log("text", text);
  return (
    `<button class ='response-button' value='` +
    data +
    `' onclick='getNextStageData();' >` +
    text +
    `</button>`
  );
}

function createButtonURL(data, text) {
  // console.log("Create Button URL");
  // console.log("data", data);
  // console.log("text", text);
  return (
    `<button class ='response-button' onclick='window.open("` +
    data +
    `");'>` +
    text +
    "</button>"
  );
}

function createButtonWebView(data, text) {
  // console.log("Create Button Web View");
  // console.log("data", data);
  // console.log("text", text);
  return (
    `<iframe class='response-webview' src='` +
    data +
    `' onclick='getNextStageData();' >` +
    text +
    `</iframe>`
  );
}

function createText(pattern) {
  // console.log("Create Text");
  // console.log(pattern);
  if (pattern == undefined) {
    pattern = /\w+/;
  } else {
    pattern = `/` + pattern + `/`;
  }
  return (
    `<input id='name' class='response-text' type='text' onkeyup='validate(` +
    pattern +
    `);' placeholder='enter here ...' /> <button class='send' style='display:none;' onclick='getNextStageData();'>Send</button>`
  );
}

function createGeneric(data) {
  // console.log("Create Carousel");
  // console.log("data", data);
  var carousel = "";
  for (i in data) {
    // console.log("Carousel -> Next -> Data[]", i);
    var value =
      `<div class="generic"><h3>` +
      data[i].title +
      `</h3><img src='` +
      data[i].image +
      `' /><div class="genericText">` +
      data[i].text +
      `</div>` +
      carouselButtons(data[i].buttons) +
      `</div>`;
    carousel = carousel + value;
  }
  return carousel;
}

function carouselButtons(buttons) {
  // console.log("Carousel Buttons");
  var genericButtons = "";
  for (i in buttons) {
    // console.log("Carousel -> Next -> Data[] -> Buttons[]" + i);
    genericButtons =
      genericButtons + createButton(buttons[i].data, buttons[i].text);
  }
  return genericButtons;
}

function replayFlow() {
  // console.log("replayFlow()");
  currentStageNum = -1;
  display =
    display +
    `<button class ='response-button' value='replay' onclick='getNextStageData();'>Replay</button>`;
}

function validate(pattern) {
  //var pattern = /^[a-zA-Z]+$/;
  // console.log("validate...");
  // console.log(pattern);
  var input = $(".response-text").val();
  // console.log("response-text.val() = ", input);
  if (input == "") {
    $(".send").hide(); //attr("disabled", true);
  } else if (pattern.test(input) && input != "") {
    // console.log("correct input...");
    $(".send").show(); //attr("disabled", false);
  } else {
    // console.log("reject input...");
    $(".send").hide(); //attr("disabled", true);
  }
}

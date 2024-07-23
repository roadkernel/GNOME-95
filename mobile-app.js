// player
$(document).ready(function () {
  $("#player").click(function () {
    $(".music-player").fadeIn();
    $(this).addClass("active");
  });
  $("#play").click(function () {
    document.getElementById("audio-player").play();
  });
  $("#stop").click(function () {
    var audio = document.getElementById("audio-player");
    audio.pause();
  });
  $("#mute").click(function () {
    var audio = document.getElementById("audio-player");
    audio.muted = !audio.muted;
  });
  function updateSongIndicator() {
    $("#current-song").text(songs[currentSongIndex].name);
  }
  $("#close").click(function () {
    $(".music-player").fadeOut();
    $("#player").removeClass("active");
  });
  //songs-logic
  var songs = [
    { name: "Heat Stick", path: "music/heat-stick.mp3" },
    { name: "If We Being Real", path: "music/yeat.mp3" },
    { name: "NO DIDDY", path: "music/diddy.mp3" },
    { name: "Кожура", path: "music/kojura.mp3" },
    { name: "simswap", path: "music/simswap.mp3" },
    { name: "walmart", path: "music/walmart.mp3" },
  ];

  var currentSongIndex = 0;
  var audio = document.getElementById("audio-player");
  audio.src = songs[currentSongIndex].path;
  updateSongIndicator();

  $("#skip").click(function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].path;
    updateSongIndicator();
    audio.play();
  });
});

//ui-related
$(document).ready(function () {
  $("#app1").on("touchstart", function () {
    $("#popupfamily").fadeIn();
  });
  $("#closeBtn").on("click", function () {
    $("#popupfamily").fadeOut();
  });
  $("#app4").on("touchstart", function (event) {
    $(".music-player").fadeOut();
    $("#popupfamily").fadeOut();
    $(".noteswindow").fadeOut();
    $("#rpopup").fadeOut();
    $(".test-retard").removeClass("active");
    $("#player").removeClass("active");
    $(".game").removeClass("active");
    $("#tpopup").fadeOut();
    $(".conwin").fadeOut();
    $(".updates").fadeOut();
    $(".feed").removeClass("active");
    $(".feed-window").fadeOut();
    $(".icon").css({ top: 0, left: 0 });
  });
  $("#app3").on("touchstart", function () {
    $(".noteswindow").fadeIn();
  });
  $("#close-notes-ui").on("click", function () {
    $(".noteswindow").fadeOut();
  });
  $("#app5").on("touchstart", function () {
    $(".updates").fadeIn();
  });
  $("#close-up-ui").on("click", function () {
    $(".updates").fadeOut();
  });
  $(".start").on("touchstart", function () {
    $("#start-window").toggle();
    $(this).toggleClass("active");
  });
  $(".test-retard").on("touchstart", function () {
    var randomPercentage = Math.floor(Math.random() * 101);
    $("#retard-level").text(randomPercentage);
    $("#rpopup").fadeIn();
    $(this).addClass("active");
  });
  $("#reroll-btn").on("click", function () {
    var randomPercentage = Math.floor(Math.random() * 101);
    $("#retard-level").text(randomPercentage);
  });
  $("#close-btn").on("click", function () {
    $("#rpopup").fadeOut();
    $(".test-retard").removeClass("active");
  });
  $("#app6").on("touchstart", function () {
    $(".feed-window").fadeIn();
  });
  $("#close-feed").on("click", function () {
    $(".feed-window").fadeOut();
  });
  $(".game").on("touchstart", function () {
    $("#tpopup").fadeIn();
    $(this).addClass("active");
  });
  $("#close-btn2").on("click", function () {
    $("#tpopup").fadeOut();
    $(".game").removeClass("active");
  });
  $("#app2").on("touchstart", function () {
    $(".conwin").fadeIn();
  });
  $("#close-console-ui").on("click", function () {
    $(".conwin").fadeOut();
  });
  $(function () {
    $(".feed-window").resizable({
      handles: "se",
    });
  });
});

//time
$(document).ready(function () {
  function updateUTCTime() {
    var now = new Date();
    var hours = ("0" + now.getUTCHours()).slice(-2);
    var minutes = ("0" + now.getUTCMinutes()).slice(-2);
    var timeString = hours + ":" + minutes;
    $("#utc-time").text(timeString);
  }
  setInterval(updateUTCTime, 1000);
});

//paint
$(document).ready(function () {
  let mode = "";
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  document.getElementById("draw-btn").addEventListener("click", function () {
    mode = "draw";
  });
  document.getElementById("erase-btn").addEventListener("click", function () {
    mode = "erase";
  });
  document.getElementById("clear-btn").addEventListener("click", function () {
    mode = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  canvas.addEventListener("mousedown", function (e) {
    if (e.button === 0) {
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    }
  });
  canvas.addEventListener("mousemove", function (e) {
    if (isDrawing) {
      if (mode === "draw") {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = document.getElementById("color-picker").value;
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
      } else if (mode === "erase") {
        ctx.clearRect(e.offsetX, e.offsetY, 30, 30);
      } else {
      }
    }
  });
  canvas.addEventListener("mouseup", function () {
    isDrawing = false;
  });
});

//wallpaper
$(document).ready(function () {
  var images = [
    "shikib.png",
    "rb.png",
    "sunakobC.png",
    "duob.png",
    "mainb.png",
  ];
  var currentIndex = 0;
  $("#changeBackground").click(function () {
    $("body").css(
      "background-image",
      "url(pics/wallpaper/" + images[currentIndex] + ")"
    );
    currentIndex = (currentIndex + 1) % images.length;
  });
});

//bootmenu
$(document).ready(function () {
  $("#redirectButton").on("click", function () {
    window.location.href = "/bootmenu.html";
  });
});

//console
$(document).ready(function () {
  const asciiArt = [
    "",
    "",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "CBO CBO CBO CBO CBO >:)",
    "EGIRL.DEV EGIRL.DEV <3",
    "",
    "edgelord",
    "",
    "kys",
    "",
  ];
  const consoleElement = document.querySelector(".console");
  let lineIndex = 0;
  function displayNextLine() {
    consoleElement.textContent += asciiArt[lineIndex] + "\n";
    lineIndex = (lineIndex + 1) % asciiArt.length;
    if (lineIndex === 0) {
      setTimeout(() => {
        consoleElement.textContent = "";
        setTimeout(displayNextLine, 400);
      }, 3000);
    } else {
      setTimeout(displayNextLine, 400);
    }
  }
  displayNextLine();
});

//post-logic
$(document).ready(function () {
  $.getJSON("shitpost.json", function (data) {
    data.forEach(function (post) {
      var postElement = `
              <div class="post">
                  
                  <div><strong>${post.header}</strong></div>
                  <div>${post.content}</div>
                  ${
                    post.picture
                      ? `<img src="${post.picture}" alt="Post Picture">`
                      : ""
                  }
              </div>
          `;
      $("#feedContainer").append(postElement);
    });
  });
});

//HOA-logic
$(document).ready(function () {
  $("#feedContainer").on("click", ".post img", function () {
    $(".expanded").remove(); // Удаляем существующий клон, если он есть
    var $clone = $(this).clone().addClass("expanded");
    $("#Feed, #HOA").css("overflow", "hidden");
    $("body").append($clone);
  });

  //TAB-logic
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".post img").length) {
      $("#Feed, #HOA").css("overflow", "auto");
      $(".expanded").remove();
    }
  });
});

//TAB-logic-2
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("Feed").style.display = "block";

// THIS SHIT GOES TO THE END OR IT MIGHT BREAK ALL THE SHIT
//drag-function-buggy
$(document).ready(function () {
  $(".icon").draggable();
  $(".draggable").draggable({
    handle: ".bar",
    start: function () {
      $(this).addClass("dragZ");
      $(this).css({
        transform: "none",
        top: $(this).offset().top + "px",
        left: $(this).offset().left + "px",
      }); //I stole this sorry <3
    },
  });
});
// THIS SHIT GOES TO THE END OR IT MIGHT BREAK ALL THE SHIT
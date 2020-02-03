$(document).ready(function () {

  $('#playtheme').click(function (event) {
    event.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("Play Breaking Bad theme")
      $('#push').toggle("slide");

    }
    else {
      $(this).addClass("active");
      $(this).text("Close");
      $('#push').toggle("slide");

    }
  });
  
});

/////////////////////////// PLAY THEME SONG ///////////////////////////////

/////////////////////////// VIDEO 1 ///////////////////////////////


var ppbutton1 = document.getElementById("vidbutton1");
ppbutton1.addEventListener("click", playPause1);
myVideo1 = document.getElementById("myvid1");
function playPause1() { 
    if (myVideo1.paused) {
        myVideo1.play();
        ppbutton1.innerHTML = "Pause";
        }
    else  {
        myVideo1.pause(); 
        ppbutton1.innerHTML = "Play";
        }
} 




/////////////////////////// VIDEO 2 ///////////////////////////////

var ppbutton2 = document.getElementById("vidbutton2");
ppbutton2.addEventListener("click", playPause2);
myVideo2 = document.getElementById("myvid2");
function playPause2() { 
    if (myVideo2.paused) {
        myVideo2.play();
        ppbutton2.innerHTML = "Pause";
        }
    else  {
        myVideo2.pause(); 
        ppbutton2.innerHTML = "Play";
        }
} 

/////////////////////////// VIDEO 3 ///////////////////////////////

var ppbutton3 = document.getElementById("vidbutton3");
ppbutton3.addEventListener("click", playPause3);
myVideo3 = document.getElementById("myvid3");
function playPause3() { 
    if (myVideo3.paused) {
        myVideo3.play();
        ppbutton3.innerHTML = "Pause";
        }
    else  {
        myVideo3.pause(); 
        ppbutton3.innerHTML = "Play";
        }
} 




/////////////////////////// SEASON ACCORDION ///////////////////////////////



  $(function () {
    $("#accordion").accordion({
      animate: 500,
      heightStyle: "content"
    });
  });

  




/////////////////////////// SKETCH ///////////////////////////////



var sketch = {
  offsetBackgroundColor: 0
};



$(document).ready(function () {

  $("#blackwhite").click(function () {
    coloredText = !coloredText;

  });

  $("#colors").click(function () {
    rainbowColors = !rainbowColors;

  });


});

$(function () {
  $("#background").slider({
    value: 0,
    min: 0,
    max: 255,
    step: 1,
    slide: function (event, ui) {
      sketch.offsetBackgroundColor = ui.value;
      updateP5();
    }
  });

  function updateP5() {
    offsetBackgroundColor = sketch.offsetBackgroundColor

  }

});





/* PRELOADER */

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function letItSnow(){
    var snowflakes = document.querySelectorAll('.snow');
    for (var i = 0; i < snowflakes.length; i++) {
      var snowflake = snowflakes[i];
      snowflake.setAttribute('cx', getRandom(1,100) + '%');
      snowflake.setAttribute('cy', '-' + getRandom(1,100));
      snowflake.setAttribute('r', getRandom(1,3));
    }
})();

var progress = 0;
document.onreadystatechange = function() {
    if(document.readyState == "interactive") {
        var allElement = $("*");
        var length = allElement.length;
        for(var i=0; i<length; i++) {
            set_element(allElement[i], length);
        }
    }
}

function set_element(element, totalElement) {
    var percetage = 100 /totalElement;
    if ($(element).length==1) {
        $("#fill").animate({
            width: progress + percetage + "%"
        }, 10, function(){
            if(document.getElementById("fill").style.width=="100%") {
                $(".main").fadeOut(500);
            }
        });
        progress = progress + percetage;
    }
}


// POPUP VIDEO/TEASER

function toggle() {
    var teaser = document.querySelector(".teaser")
    var video = document.querySelector("video")
    teaser.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}


// CHATBOX

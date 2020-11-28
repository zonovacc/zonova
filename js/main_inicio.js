/* PRELOADER */

$(window).on("load", function(){
    $(".loader-container").fadeOut(1500);
});


// POPUP VIDEO/TEASER

function toggle() {
    var teaser = document.querySelector(".teaser")
    var video = document.querySelector("video")
    teaser.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
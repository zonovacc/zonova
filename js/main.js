// POPUP VIDEO/TEASER
function toggle() {
    var teaser = document.querySelector(".teaser")
    var video = document.querySelector("video")
    teaser.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
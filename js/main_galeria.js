/* PRELOADER */

$(window).on("load", function(){
    $(".loader-container").fadeOut(1500);
});


/* VENOBOX */

$(document).ready(function(){
    $('.venobox').venobox({
        closeColor: '#f4f4f4',
        spinColor: '#f4f4f4',
        closeBackground: '#17191D',
        overlayColor: 'rgba(23, 25, 19, 0.8)',
    }); 
});
/* PRELOADER */

$(window).on("load", function(){
    $(".loader-container").fadeOut(1500);
});


/* MODO NOCTURNO */

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});


/* VENOBOX */

$(document).ready(function(){
    $('.venobox').venobox({
        arrowsColor: '#f29100',
        bgcolor: '#000',
        closeColor: '#35a7f5',
        frameWidth: '30px',
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        spinColor: '#f29100',
        spinner: 'three-bounce',
        share: ['facebook', 'twitter', 'linkedin'],
    }); 
});
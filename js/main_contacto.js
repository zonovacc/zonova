/* PRELOADER */

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


/* MODO NOCTURNO */

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
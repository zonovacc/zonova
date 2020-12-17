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


/* EN PROMOCIÓN */

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

var popup = function(popupClick) {
	popupViews [popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
	popupBtn.addEventListener("click", () => {
		popup(i);
	});
});

closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener("click", () => {
		popupViews.forEach((popupView) => {
			popupView.classList.remove('active');
		});
	});
});


/* SLIDER DE PRODUCTOS */

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});


/* PRODUCTOS */

$(".default_option").click(function(){
	$(this).parent().toggleClass("active");
})
  
$(".select_ul li").click(function(){
	var currentele = $(this).html();
	$(".default_option li").html(currentele);
	$(this).parents(".select_wrap").removeClass("active");
})

var containerEl = document.querySelector('.container');

var mixer = mixitup(containerEl);

	
/* TABS */

$('.paso a').click(function(){
	$('.paso.active').removeClass('active');
	$(this).closest('.paso').addClass('active');
	return false;
});

	
/* CONTACTO */

$(document).ready(function(){
    $('.fa-share').on('click', () => {
        $('.hide').toggle();
    })
})

const btn = document.querySelector('.btn-rate');
const post = document.querySelector('.post');
const widget = document.querySelector('.star-widget');

btn.onclick = () => {
	widget.style.display = "none";
	post.style.display = "block";
	return false;
}
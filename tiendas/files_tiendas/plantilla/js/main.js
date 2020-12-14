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

const grid = new Muuri('.grid', {
	layout: {
	    rounding: false,
	}
      });
      
      window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');
      
	// Agregué los Listener de los enlaces para filtrar por categoría.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach( (elemento) => {
	    elemento.addEventListener('click', (evento) => {
	        evento.preventDefault();
	        enlaces.forEach((enlace) => enlace.classList.remove('activo'));
	        evento.target.classList.add('activo');
      
	        const categoria = evento.target.innerHTML.toLowerCase();
	        categoria === 'todo' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
	    });
	});
      
	// Agregué un Listener para las imágenes.
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
      
	    elemento.addEventListener('click', () => {
	        const ruta = elemento.getAttribute('src');
	        const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
      
	        overlay.classList.add('activo');
	        document.querySelector('#overlay img').src = ruta;
	        document.querySelector('#overlay .descripcion').innerHTML = descripcion;
	    });
	});
      
	// Event Listener del botón de cerrar.
	document.querySelector('#btn-cerrar-popup').addEventListener('click',  () => {
	    overlay.classList.remove('activo');
	});
      
	//Event Listener del overlay
	overlay.addEventListener('click', (evento) => {
	    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
      });
      

	
/* TABS */



	
/* CONTACTO */

$(document).ready(function(){
    $('.fa-share').on('click', () => {
        $('.hide').toggle();
    })
})
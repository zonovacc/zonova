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

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
    
    tabIndicator.style.left = 'calc(calc(100% / 6) * ${i})';
  });
}

	
/* CONTACTO */

$(document).ready(function(){
    $('.fa-share').on('click', () => {
        $('.hide').toggle();
    })
})
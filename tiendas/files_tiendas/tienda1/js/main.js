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
        loop:true,
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
      

/* CONTACTO */

$(document).ready(function(){
    $('.fa-share').on('click', () => {
        $('.hide').toggle();
    })
})
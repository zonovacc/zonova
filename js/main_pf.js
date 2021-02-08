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


/* PREGUNTAS Y RESPUESTAS */

const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
        categorias.forEach((elemento) => {
            elemento.classList.remove('activa');
        });

        e.currentTarget.classList.toggle('activa');
        categoriaActiva = categoria.dataset.categoria;

        contenedorPreguntas.forEach((contenedor) => {
            if(contenedor.dataset.categoria === categoriaActiva){
                contenedor.classList.add('activo');
            } else {
                contenedor.classList.remove('activo');
            }
        });
    });
});
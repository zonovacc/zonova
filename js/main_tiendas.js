/* PRELOADER */

$(window).on("load", function(){
    $(".loader-container").fadeOut(1500);
});


/* FILTER */

$('.portfolio-content').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});

$('.filter li').click(function(){
    $('.filter li').removeClass('active');
    $(this).addClass('active');
  
    var selector = $(this).attr("data-filter");
    $(".portfolio-content").isotope({
        filter: selector
    });
    return false
});

    /* RESPONSIVE */

$(document).ready(function() {
    $(".default_option").click(function() {
        $(this).parent().toggleClass("active");
    })

    $(".select_ul li").click(function() {
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
    })
});


/* BUSCADOR */

    /* Lista de Tiendas */

let suggestions = [
    "channel",
    "codingLab",
    "codingNepal",
    "youTube",
    "youTuber",
    "youTube Channel",
    "blogger",
    "bollywood",
    "vlogger",
    "vechiles",
    "facebook",
    "freelancer",
    "facebook Page",
    "designer",
    "developer",
    "web Designer",
    "web Developer",
    "login Form in HTML & CSS",
    "how to learn HTML & CSS",
    "how to learn JavaScript",
    "how to became Freelancer",
    "how to became Web Designer",
    "how to start Gaming Channel",
    "how to start YouTube Channel",
    "what does HTML stands for?",
    "what does CSS stands for?",
];


    /* Obteniendo todos las sugerencias */

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


    /* Si el usuario presiona cualquier sugerencia */

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; /* Datos ingresados por el usuario */
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://zonovacc.github.io/zonova/tiendas/" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            /* Filtrar el valor y los carácteres en minúsculas; devolviendo solo las palabras que comienzan con los carácteres introducidos por el usuario */
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            /* Pasar datos de retorno dentro de la etiqueta li */
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); /* Mostrar caja autocompleta */
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            /* Agregando el atributo onclick en todas las etiquetas li */
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); /* Ocultar caja autocompleta */
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://zonovacc.github.io/zonova/tiendas/" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


/* MODO NOCTURNO */

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
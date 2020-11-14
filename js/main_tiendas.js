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
        }, 20, function(){
            if(document.getElementById("fill").style.width=="100%") {
                $(".main").fadeOut(500);
            }
        });
        progress = progress + percetage;
    }
}


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


/* BUSCADOR */

    /* Lista de Tiendas */

let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
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
'use strict'

// DOM document object model

function cambiaColor(color){
    caja.style.background = color;
}

//conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde js";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";



//Conseguir elementos por su etiqueta
var todos_los_Disv = document.getElementsByTagName("div");

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");

/*var Contenido = todos_los_Disv[2];
Contenido.innerHTML = "Nuevo contenido del segundo elemento";
Contenido.style.background = "blue";*/

    var valor;
    for (valor in todos_los_Disv) {
        if(typeof todos_los_Disv[valor].textContent == "string"){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todos_los_Disv[valor].textContent);
            parrafo.append(texto);
            seccion.append(parrafo);
        }
    }

    seccion.append(hr);


    //Coseguir elementos pro su clase css
var divsRojos = document.getElementsByClassName("Rojo");
var divsAmarillos = document.getElementsByClassName("Amarillo");
var matches = document.querySelectorAll("div");
var div;

for (div in divsRojos) {
    if(divsRojos[div].className == "Rojo"){
        divsRojos[div].style.background = "red";
    }
    
    for (div in divsAmarillos) {
        if(divsAmarillos[div].className == "Amarillo"){
            divsAmarillos[div].style.background = "yellow";
        }
    }
}

/*for (div in divsAmarillos) {
    if(divsAmarillos[div].className == "Amarillo"){
        divsAmarillos[div].style.background = "yellow";
    }
}*/

//Query selector

var ID = document.querySelector("#Encabezado");
console.log(ID);

var etiqueta = document.querySelector("div.Rojo");
console.log(etiqueta);

var matches = document.querySelectorAll("div");
console.log(matches);
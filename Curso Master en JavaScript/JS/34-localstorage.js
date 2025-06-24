'use strict'

//localstorage

//verificar si el localstorage esta disponible en el navegador
if(typeof(Storage)!== 'undefined'){
    console.log("localstorage disponible");
} else{
    console.log("localstorage incompatible");
}

//Guardar datos en el localstorage

localStorage.setItem("Titulo", "Curso de Udemy");


//Recuperar elemento 
document.querySelector("#Peliculas").innerHTML = localStorage.getItem("Titulo");

//Guardar objetos

var usuario = {
    nombre: "Israel camarena",
    email: "Israel@gmail.com",
    Tel: 9981400563
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#Datos").append(" "+ userjs.email + " - " + userjs.nombre);

//eliminar localstorage
//localStorage.removeItem("usuario");
localStorage.clear();

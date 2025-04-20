'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Israel Camarena";
var nombre = ["Israel Camarena", "Luis hernandez", "Jose Martin", "Fernando Gonzalez", 52, true];

var lenguajes = new Array("PHP", "JS", "GO", "JAVA", "C++");

/*
var elemento = parseInt(prompt("Que elemento del arreglo quieres visualizar", 0));
if(elemento >= nombre.length){
    alert("introduce el numero correcto menor que: "+ nombre.length);
}else{
    alert("El numero seleccionado es: " + nombre[elemento]);

}*/
//console.log(lenguajes);

document.write("<h1>Lenguajes de programacion del curso</h1>");
document.write("<ul>");

/*for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("<ul>");*/

/*lenguajes.forEach((elemento, indice, arr)=> {
    //console.log(arr);
    document.write("<li>"+indice+"-"+elemento+"</li>");
});*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Busquedas

/*Primera manera
var busqueda = lenguajes.find(lenguaje =>{
    return lenguaje == "PHP";
});*/
var precios = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precios => precios < 20);
console.log(busqueda);
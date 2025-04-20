'use strict'

//Arrays multidimencionales
var categorias = ["Accion", "Terror", "Comedia", "Drama"];
var peliculas = ["Lavida duele", "La vida es bella", "Lo que el viento se llevo"];

//peliculas.sort();
peliculas.reverse();
console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[1][2]);

/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "acabar")

peliculas.pop();

console.log(peliculas);*/


var indice = peliculas.indexOf("La vida es bella");
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_Sting = peliculas.join();

var cadena = "texto1, texto2, texto3"
var cadena_array = cadena.split(", ")
console.log(cadena_array);


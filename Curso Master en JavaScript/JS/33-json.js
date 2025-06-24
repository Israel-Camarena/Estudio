'use strict'

// JSON - javascript object notation

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "EEUU"
};

pelicula.titulo = "Batman Arkham";


var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais:"Francia"},
    pelicula
];

var caja_peliculas = document.querySelector("#Peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}
console.log(peliculas);
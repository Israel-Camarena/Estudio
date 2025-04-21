'use strict'
/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.ordenar y mostrarlo
4.invertir su orden y mostrarlo
5.Mostar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que no diga si lo encuentra en su indice
*/


function mostrarArray(elementos, textoCustom= ""){
document.write("<h1>Contenido del array"+textoCustom+"</h1>")
document.write("</ul>");
elementos.forEach((elementos, index) => {
    document.write("<strong>"+elementos+"</strong></br>")
});
}


//Pedir 6 numeros
// var numeros = new Array(6);
var numeros = [];
for (var i = 0; i <=5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero: ",0));
    numeros.push(parseInt(prompt("Introduce un numero: ",0)));
}
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar array en consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, " Ordenados");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, " Revertidos");

// contar elementos
document.write("<h1> El Array tiene: "+numeros.length+" elementos <h1>");

// Busqueda 
var Busqueda = parseInt(prompt("Busca un numero: ",0));

var posicion = numeros.findIndex(numeros => numeros == Busqueda);

if(posicion && posicion != 1){ 
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda es: "+posicion+ "</h1><hr/>");
}else{
    document.write("<hr/><h1>No encontrado</h1>");
}


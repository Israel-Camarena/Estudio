'use strict'

var formulario = document.querySelector("#FormPeliculas");

formulario.addEventListener('submit', function(){
    console.log("Entrar");
    var titulo = document.querySelector("#AddPelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#PeliculasList");
for(var i in localStorage){

    if(typeof localStorage[i]== 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulario = document.querySelector("#FormBorrarPeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#DeletePelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
    }
});
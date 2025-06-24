'use strict'

//eventos de raton

window.addEventListener('load', () => {
    function cambiarColor(){

        var bg = boton.style.background;
    
        if(bg =="green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    
    var boton = document.querySelector('#boton');
    
    //click
    boton.addEventListener('click', function(){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });
    
    //mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });
    
    //mouse over
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });
    
    
    //Focus
    var input = document.querySelector("#campoNombre")
    input.addEventListener('focus', function(){
        console.log("[Focus] estas dentro del input");
    });
    
    //Blur
    var input = document.querySelector("#campoNombre")
    input.addEventListener('blur', function(){
        console.log("[blur] estas fuera del input");
    });
    
    //keydown
    var input = document.querySelector("#campoNombre")
    input.addEventListener('keydown', function(event){
        console.log("[keydown] Pulsando una tecla", String.fromCharCode(event.keyCode));
    });
    
    
    //Keypress
    var input = document.querySelector("#campoNombre")
    input.addEventListener('keypress', function(event){
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    //keyup
    
    var input = document.querySelector("#campoNombre")
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    });
});//final de load

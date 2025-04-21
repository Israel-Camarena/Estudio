'use strict'

// que nos diga si un numero es par o impar 

var numero = parseInt(prompt("Intorduce un numero: ", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Intorduce un numero: ", 0));
}

if(numero % 2 == 0){
    alert("es un numero par");
}else{
    alert("Es un numero impar");
}
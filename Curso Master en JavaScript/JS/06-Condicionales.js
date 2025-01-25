'use strict'

//condicional IF

var edad = 19;
var nombre = "David Suarez";
/*Operadores racionales
    Mayor: >
    Menor: <
    Mayor o igual: =>
    Menor o igual: =<
    igual:==
    Distinto = !=
*/
if(edad >= 18){
    console.log(nombre+ " Tiene "+edad+" años, es mayor de edad");
    if(edad <= 33){
        console.log("todavia eres milenian");

    }else if(edad >= 70){
        console.log("Eres de la tercera edad");
    }else{
        console.log("Ya no eres milenian")
    }
}else{
    console.log(nombre+ " Tiene "+edad+" años, es menor de edad");
}

/*
//Operadores logicos
 AND(Y): &&
 OR(O): ||
 Negacion:!
*/

//Negacion 
var year = 2018;

if (year !=2016){
    console.log("el año no es 2016, realmente es: "+ year);
}

//AND
    if(year >= 2000 && year <= 2020 && year != 2018){
        console.log("estamos en la era actual");
    }else{
        console.log("Estamos en otra era");
    }

//OR

if(year == 2008 || (year >= 2018 && year ==2028)){
    console.log("el año acaba en 8");
}else{
    console.log("año no registrado");
}
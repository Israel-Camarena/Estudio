'use strict'
//LET = permite definir variable limitando su alcance a la declaracion donde se esta usando
//VAR = define una variable local o global de una funcion sin importar el ambito del bloque 


//prueba con var
var numero = 40 ;
console.log(numero);//valor 40

if(true){
    var numero = 50;
    console.log(numero);//valor 50
}

console.log(numero);//valor 50



//prueba con let
var texto ="Prueba de curso";
console.log(texto);//valor js


if(true){
    let texto = "Curso Prueba con valor LET"
    console.log(texto);//valor  prueba con let
}

console.log(texto);//valor js
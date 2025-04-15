'use strict'

//parametros REST Y SPREAD

//parametros REST
function listadofrutas(fruta1, fruta2, ...Frutas__Restanes){
    console.log("fruta1: ", fruta1);
    console.log("fruta2: ", fruta2);
    console.log(Frutas__Restanes);
}

listadofrutas("naranja", "pera", "piña", "manzana", "melon", "coco");

//parametros SPREAD
var frutas =["naranja", "pera" ]
listadofrutas(...frutas, "piña", "manzana", "melon", "coco");
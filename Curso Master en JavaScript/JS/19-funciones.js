'use strict'

//funciones 
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones 

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Divicion: " + (numero1/numero2));
   // return "Hola soy la calculadora";
     console.log("********************************************");
}

function porPantalla(numero1,numero2){
    document.write("Suma: " + (numero1+numero2)+ "<br/>");
    document.write("Resta: " + (numero1-numero2)+ "<br/>");
    document.write("Multiplicacion: " + (numero1*numero2)+ "<br/>");
    document.write("Divicion: " + (numero1/numero2)+ "<br/>");
    document.write("********************************************"+ "<br/>");
}



//defino funcion
function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instruccion

    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    
}

//invocar o llamar funcion
calculadora(10,8);
calculadora(10,3);
calculadora(10,10);
calculadora(10,2, true);
calculadora(10,4, true);
calculadora(10,6, true);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/
'use strict'

//funciones 
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones 


//defino funcion
function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instruccion

    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numero1*numero2));
        console.log("Divicion: " + (numero1/numero2));
       // return "Hola soy la calculadora";
       console.log("********************************************");
    }else{
        document.write("Suma: " + (numero1+numero2)+ "<br/>");
        document.write("Resta: " + (numero1-numero2)+ "<br/>");
        document.write("Multiplicacion: " + (numero1*numero2)+ "<br/>");
        document.write("Divicion: " + (numero1/numero2)+ "<br/>");
        document.write("********************************************"+ "<br/>");
    }
    
}

//invocar o llamar funcion
calculadora(1,4);
calculadora(2,5, true);




/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/

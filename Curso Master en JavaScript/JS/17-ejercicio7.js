'use strict'

// Tabla de multiplicar por un numero introducido en pantalla 

var numero = parseInt(prompt("Introduce un numero para realizar tabla de multiplicar",1));

document.write("Tabla del:  "+numero+"</br>");
for(var i =1; i<=10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"</br>");

}

//todas las tablas de multiplicar 

for(var a =1; a<=10; a++){
    document.write("<h1>Tabla del:  "+a+"</h1></br>");
    for(var b =1; b<=10; b++){
        document.write(b+" x "+a+" = "+(b*a)+"</br>");
    }
}
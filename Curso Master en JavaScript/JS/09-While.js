'use strict'

//Bucle while 

var year = 2018;
while(year != 1991){
    //ejecuta esto
    console.log("estamos en el año: "+ year);
    year++;
    if(year == 2000){
        break;
    }
}


// Do while 
var years = 30;
do{
    alert("Solo cuando sea diferente a 20");
    years--;
}while(years > 25)
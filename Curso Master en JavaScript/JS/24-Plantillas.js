'use strict'

//plantillas de texto

var nombre = prompt("Escribe tu nombre");
var apellidos = prompt("escribe tus apellidos");

//var texto = "Mi nombre es: " +nombre + " Mi apellido es: "+apellidos;
var texto = `     
  <h1>Hola que tal</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mi apellido es: ${apellidos}</h3>
`;
document.write(texto);
/*Tipos de definicion de variables:*/

// Una variable es una espcie de caja donde se almacena 
// un valor.

var variable;
let variablelet;

const constante = 1;

////// example //////

var a = 1; // El problema con la var es que puede ser renombrado
console.log(a);
a = 4; // aqui la renombro la variable a.
console.log(a);

const saludo = "Hola Yorman";
console.log(saludo);
//saludo = "Hola Yorman Amaro"; // al renombrar con const no lo permite, al correr te dara error.
//console.log(saludo);

let b = 3; // Con let es igual que var
console.log(b);
b = 4; // permite renombrar variable.
console.log(b);

//NOTA> lA DIFERENCIA ENTRE VAR Y LET RADICA EN QUE 
 // VAR> AFECTA A TODA LA VARIABLE EN TODO EL DOCUMENTO.
 // LET> AFECTA SOLO A LA VARIABLE DENTRO DEL BLOQUE DE CODIGO.
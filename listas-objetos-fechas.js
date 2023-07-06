        /*Lista, arrays o vectores*/

// Son un conjunto de variables puesta en orden.

const listas = ["perros", "gatos", 1, 2, true, null]; // Los arrays pueden tener numeros, textos, booleanos.
const listas2 = new Array("perros", "gatos", 1, 2, true, null);
const listas3 = new Array(3);

// Puedo agregar elementos al array llamando al mismo he indicando la posicion que la quiero.
listas3[0] = "soy un nuevo valor en la posicion 0";

// Array de Arrays

const listas4 = [listas, listas2, listas3];

console.log(listas);
console.log(listas2);
console.log(listas3);
console.log(listas4);




            /*Objetos*/

// Son representaciones de datos de la vida real agrupadas.

const mascota = { // objeto
    raza: "Pastos Catalan",
    color: "Aleonado",
    edad: 2,
    tamano: "Grande",
    grupo: "Trabajo",
    propietario: "Yorman Amaro",
    criadero: { // objeto dentro de objeto
        nombre: "Dakota-Catalan",
        numregistro: 123456
    },
};   

console.log(mascota.raza,mascota.criadero.numregistro); // Con el . nos movemos en el objeto

// Si queremos agregar o modificar el objeto:
mascota.altura = 56; // Agregamos un atributo 'altura' al objeto mascota
mascota.edad = 3; // Tambien se puede modificar uno que este existente en el objeto

console.log(mascota);



            /*Fechas*/

// Basicamente es sobre la creacion de fechas en Javascript 
const ahora = new Date(); // crea una fecha en el momento

console.log(ahora);

const fecha_milis = new Date(10) // fecha en milisegundos

console.log(fecha_milis);

const dia = ahora.getDate(); // obteniendo solo una parte de la fecha
const mes = ahora.getMonth() + 1; // obteniendo solo una parte de la fecha
const anyo = ahora.getFullYear(); // obteniendo solo una parte de la fecha

console.log(dia, mes, anyo);



/*var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);


var c ={
    nombre:"Juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

d.nombre="Pedro";
console.log("c: ", c);
console.log("d: ", d);*/

/*var persona = {
    nombre: "Reinaldo",
    apellido: "Franco",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San José",
        edificio: {
            nombre: "Edificio Principal",
            telefono: "2222-3333"
        }
    }
}

persona.direccion.zipCode = 11101;

var edificio = persona.direccion.edificio;

edificio.nro_piso="8vo Piso";

console.log(persona);

var campo="edad"

console.log(persona[campo]);
console.log(persona.edad2);*/

/*FUNCIONES*/

/*function primeraFuncion(){
   console.log("Invocada");
}

var miFuncion = primeraFuncion;*/

/*function imprimir(nombre, apellido){
    apellido = apellido || "xxx";
    /*if(apellido === undefined){
        apellido = "xxx"
    }*/
/*console.log(nombre+" "+apellido);
}

imprimir("Juan");*/
/*------------------------------------------------------------*/
/*function imprimir(persona){
    console.log(persona.nombre+" "+persona.apellido);
    persona.nombre="Maria";
}

var obj={
    nombre:"Juan",
    apellido:"Padilla"
}

imprimir(obj);
console.log(obj);
*/
/*---------------------------------------------------------*/
/* EJ 1
function imprimir(fn) {
    fn();
}

var persona = {
    nombre: "Reinaldo",
    apellido: "Franco"
}

imprimir(function () {
    console.log("Funcion Anónima");
})
*/



//EJ 2 
/*
function imprimir(fn) {
    fn();
}

var persona = {
    nombre: "Juan",
    apellido: "Padilla"
}

var miFuncion = function () {
    console.log("miFuncion");
}

imprimir(miFuncion);*/
/*---------------------------------------------*/
//Funcion que regresa un numero
/*
function obtenerAleatorio(){
    return Math.random();
}

console.log(obtenerAleatorio() + 10);
*/

//Funcion obtener nombre-------------------------------
/*
function obtenerNombre(){
    return "juan"
}

//console.log(obtenerNombre() + " Padilla");

var nombre= obtenerNombre();

console,console.log(nombre);*/

//Retornar booleano----------------------------------
/*function obtenerAleatorio() {
    return Math.random();
}

function mayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

console.log(obtenerAleatorio());

console.log(mayor05());

if (mayor05()) {
    console.log("es mayor a 0.5");
} else {
    console.log("es menor a 0.5");
}

//console.log(mayor05());*/


//EJ DE FUNCION QUE RETORNA OBJETO
/*
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("maria","susana");
console.log(persona.nombre);
console.log(persona.apellido);

//EJ DE FUNCION QUE RETORNA FUNCION

function creaFuncion(){
    return function(nombre){
        console.log("Me creó " + nombre);

        return function(){
            console.log("Segunda Función");
        }
    }
}

var nuevaFuncion = creaFuncion();
// nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();*/


//-------------------------------------------------------------------
/*FUNCIONES SON OBJETOS
function a(){
    console.log("Función a");
}

a();

a.nombre = "María";
a.direccion={
    pais:"Paraguay",
    ciudad:"San jose",
    edificio:{
        piso:"8vo",
        nombre:"Edificio principal"
    }
}*/
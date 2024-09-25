import { Console, log } from "console";

// Imprimir por consola
console.log("Hola Antonio");

/**
 * Tipos de datos
 * String
 * number - enteros y decimales
 * boolean - true / fase
 * null
 * undefined
 * 
 */


var nombre: String = "Antonio"; // Variable global
let apellido: String = "Antonio"; // Variable local
const EDAD: Number = 20; // Constante

//Formas de concatenar textos

console.log("hola " + nombre , apellido);
console.log(`Hola ${nombre} tu edad es: ${EDAD}`); // de esta forma injectamos variables


// Arrays  de datos

let alumnos: String[] = ["Juan","Jose","Alex"];
let valores: (String | Number) [] = ["Hola",2];
let batiburrillo = [...alumnos, ...valores];

console.log(batiburrillo);

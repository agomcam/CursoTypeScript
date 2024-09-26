import { Console, log } from "console";
import { type, version } from "os";
import { Interface } from "readline";

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

console.log("hola " + nombre, apellido);
console.log(`Hola ${nombre} tu edad es: ${EDAD}`); // de esta forma injectamos variables


// Arrays  de datos

let alumnos: String[] = ["Juan", "Jose", "Alex"];
let valores: (String | Number)[] = ["Hola", 2];
let batiburrillo = [...alumnos, ...valores];

console.log(batiburrillo);

// Objetos

let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
}

let configuracion = {
    version: "Es6",
    versionCodigo: "1.0",
    ...misDatos // Propagamos el objeto anterior y lo meteos en este, por lo que este ahora tiene todas las propiedades del objeto anterior
}

// Enumerados
enum EstadoTarea { Pendiente, EnProceso, Terminado };

let estadoTarea: EstadoTarea = EstadoTarea.EnProceso;

// Interfaces (Objetos que podemos crear) (Se suele utilizar más con las clases)

interface Tarea {
    nombre: String,
    prioridad: Number,
    estado: EstadoTarea
}

let tarea1: Tarea = { nombre: "Hacer deberes", prioridad: 2, estado: EstadoTarea.EnProceso };

console.log(tarea1);

// Tipos son objetos tambien

type Empleado = {
    nombre: String,
    edad: Number,
    sueldo: Number
};

let empleado1: Empleado = { nombre: "Antonio", edad: 18, sueldo: 1500 };

type Jefe = {
    condigoIdentificacion: String,

}

// De esta forma podemos unir 2 objetos
let empleado2: Empleado & Jefe = { condigoIdentificacion: "44232", edad: 20, nombre: "Manuel", sueldo: 1500 };

console.log(empleado2);

// Estructuras de control

// Operador ternario (Condicion ? verdadero : falso)

console.log(tarea1.estado == EstadoTarea.Terminado ? `la tarea ${tarea1.nombre} se encuentra en ejecución` : `la tarea ${tarea1.nombre} aun no se ha ejecutado`);

// if - else

if (tarea1.estado == 0) {
    console.log(`1 La tarea es ${tarea1.estado}`);
} else if (tarea1.estado == 1) {
    console.log(`2 La tarea es ${tarea1.estado}`);
} else {
    console.log(`3 La tarea es ${tarea1.estado}`);

}

// Swich

switch (tarea1.estado) {
    case EstadoTarea.EnProceso:
        console.log("Estado 1");

        break;
    case EstadoTarea.Pendiente:
        console.log("Estado 2");
        break;
    case EstadoTarea.Terminado:
        console.log("Estado 3");
        break;

    default:
        console.log("No tenemos este resultado")
        break;
}

// try catch

try {
    let numero1: Number = 1;
    console.log(numero1.toString())
} catch (error) {
    console.log("Se ha producido un error al convertir el numero en String ", error);

}
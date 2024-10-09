/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
var nombre = "Antonio"; // Variable global
let apellido = "Antonio"; // Variable local
const EDAD = 20; // Constante
//Formas de concatenar textos
console.log("hola " + nombre, apellido);
console.log(`Hola ${nombre} tu edad es: ${EDAD}`); // de esta forma injectamos variables
// Arrays  de datos
let alumnos = ["Juan", "Jose", "Alex"];
let valores = ["Hola", 2];
let batiburrillo = [...alumnos, ...valores];
console.log(batiburrillo);
// Objetos
let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
};
let configuracion = Object.assign({ version: "Es6", versionCodigo: "1.0" }, misDatos // Propagamos el objeto anterior y lo meteos en este, por lo que este ahora tiene todas las propiedades del objeto anterior
);
// Enumerados
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea[EstadoTarea["Pendiente"] = 0] = "Pendiente";
    EstadoTarea[EstadoTarea["EnProceso"] = 1] = "EnProceso";
    EstadoTarea[EstadoTarea["Terminado"] = 2] = "Terminado";
})(EstadoTarea || (EstadoTarea = {}));
;
let estadoTarea = EstadoTarea.EnProceso;
let tarea1 = { nombre: "Hacer deberes", prioridad: 2, estado: EstadoTarea.EnProceso };
console.log(tarea1);
let empleado1 = { nombre: "Antonio", edad: 18, sueldo: 1500 };
// De esta forma podemos unir 2 objetos
let empleado2 = { condigoIdentificacion: "44232", edad: 20, nombre: "Manuel", sueldo: 1500 };
console.log(empleado2);
// Estructuras de control
// Operador ternario (Condicion ? verdadero : falso)
console.log(tarea1.estado == EstadoTarea.Terminado ? `la tarea ${tarea1.nombre} se encuentra en ejecución` : `la tarea ${tarea1.nombre} aun no se ha ejecutado`);
// if - else
if (tarea1.estado == 0) {
    console.log(`1 La tarea es ${tarea1.estado}`);
}
else if (tarea1.estado == 1) {
    console.log(`2 La tarea es ${tarea1.estado}`);
}
else {
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
        console.log("No tenemos este resultado");
        break;
}
// try catch
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("Se ha producido un error al convertir el numero en String ", error);
}
// Bucles
let listaTareas = [{
        nombre: "Sacar al perro",
        estado: EstadoTarea.Pendiente,
        prioridad: 4
    },
    {
        nombre: "Fregar",
        estado: EstadoTarea.EnProceso,
        prioridad: 0
    },
    {
        nombre: "Tirar la basura",
        estado: EstadoTarea.Pendiente,
        prioridad: 15
    }];
// Mostramos todas las tareas
// foreach
listaTareas.forEach((tarea, i) => {
    console.log(`La tarea ${i} es ${tarea.nombre}`);
});
// for clasico
for (let index = 0; index < listaTareas.length; index++) {
    console.log(`La tarea ${listaTareas[index].nombre} tiene una prioridad de: ${listaTareas[index].prioridad}`);
}
// Bucles while
while (tarea1.estado != EstadoTarea.Terminado) {
    if (tarea1.prioridad == 20) {
        tarea1.estado = EstadoTarea.Terminado;
        break;
    }
    else {
        tarea1.prioridad++;
    }
}
// Bucle do While
do {
    tarea1.prioridad++;
    tarea1.estado == EstadoTarea.Terminado;
} while (tarea1.estado != EstadoTarea.Terminado);
// Funciones
/**
 * Funcion que salua a una persona con el nombre que le indiques
 * @param nombre - nombre que queremos saludar
 */
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Antonio");
// Funcion con parametros opcionales
/**
 * Funcion que sirve para decirle adios a una persona, en caso de no decir nungun nombre diremos adios
 * @param nombre - nombre a despedirse de la persona
 */
function despedir(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log(`Adios`);
    }
}
despedir("Antonio");
// funcion pasandole varios tipos
function algo(n) {
    if (typeof (n) == "string") {
        console.log("Soy un String");
    }
    else {
        console.log("Soy un numero");
    }
}
algo("A");
algo(1);
// Funcion que devulve un parametro
function suma(number1, number2) {
    return number1 + number2;
}
console.log(suma(1, 19));
// funcion con propagacion
/**
 * Esta funcion le puedes introducir tantos esstring como quieras
 * @param nombre - lita de string
 */
function multiplesValores(...nombre) {
    nombre.forEach(n => {
        console.log(`nombre: ${n}`);
    });
}
multiplesValores("Antonio", "Andres", "Cristoval", "Enrrique", "Veronica", "Carla", "Enrriquita");
// Que es muy distinto que la siguiente funcion que en este caso si recibe una lista
/**
 * Funcion que muestra los valores de una lista
 * @param lista - lista de valores a mostrar
 */
function mostrarLista(lista) {
    lista.forEach(element => {
        console.log(element);
    });
}
let lista = ["Antonio", "Pedro", "Maria de las Carmen"];
// Se puede pasar la lista de esta forma
mostrarLista(lista);
let almacen = { nombre: "tecnologia", capacidad: 20 };
let datosAlmacen = (almancen) => `El almacen de ${almacen.nombre} tiene una capacidad de ${almacen.capacidad}`;
console.log(datosAlmacen(almacen));
let obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); // Callbalck a Ejecutar
    }
};
let cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleado1, () => "Cobra Antonio");
// Funciones asincronas
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Completado");
        return "Completado";
    });
}
ejemploAsync().then((respuesta) => {
    console.log("Respueta", respuesta);
}).catch((error) => {
    console.log("Ha avido un error", error);
}).finally(() => "Todo ha terminado");
// Generatos
function* ejemploGenerator() {
    // yield --> para emitir valores
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3
console.log(generadora.next().value); // 4
// worker
function* watcher(valor) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del wolker
    yield valor + 10; // emitimos el valor final
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha echo el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha echo el wolker)
console.log(generatorSaga.next().value); // 2 (lo ha echo el wolker)
console.log(generatorSaga.next().value); // 3 (lo ha echo el wolker)
console.log(generatorSaga.next().value); // 10 (lo ha echo el watcher)
function asincronas() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let index = 0; index < 100; index++) {
            suma += index;
        }
        return suma;
    });
}
asincronas().then((data) => {
    console.log(`El resultado de ejecutar async = ${data}`);
});
console.log("Línea de codigo posterior a llamada asincrona");
// Funcion asincronas y generadoras
function* fgeneradora2() {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}
let llamadafgen2 = fgeneradora2();
let str = llamadafgen2.next();
while (str.done == false) {
    console.log(str.value);
    str = llamadafgen2.next();
}
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let index = 0; index < datos.length; index++) {
            yield yield __await(datos[index]);
        }
    });
}
let datosWebPage = obtenerDatosWeb();
datosWebPage.next().then(({ value, done }) => {
    console.log(`Nombre pagina: ${value.Name} Descripcion pagina: ${value.Description}`);
});
function saludarSobrecargado(nombre, apellido, edad) {
    let saludo = `Hola ${nombre}`;
    if (apellido) {
        saludo += ` ${apellido}`;
    }
    if (edad) {
        saludo += `${edad}`;
    }
    return saludo;
}
console.log(saludarSobrecargado("Antonio", "Pepito de los grillos", "23"));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map
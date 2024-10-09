import { Console, log } from "console";
import { type, version } from "os";
import { Interface } from "readline";
import Cookies from 'js-cookie'
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
const EDAD: number = 20; // Constante

//Formas de concatenar textos

console.log("hola " + nombre, apellido);
console.log(`Hola ${nombre} tu edad es: ${EDAD}`); // de esta forma injectamos variables


// Arrays  de datos

let alumnos: String[] = ["Juan", "Jose", "Alex"];
let valores: (String | number)[] = ["Hola", 2];
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
    prioridad: number,
    estado: EstadoTarea
}

let tarea1: Tarea = { nombre: "Hacer deberes", prioridad: 2, estado: EstadoTarea.EnProceso };

console.log(tarea1);

// Tipos son objetos tambien

type Empleado = {
    nombre: String,
    edad: number,
    sueldo: number
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
    let numero1: number = 1;
    console.log(numero1.toString())
} catch (error) {
    console.log("Se ha producido un error al convertir el numero en String ", error);

}

// Bucles

let listaTareas: Tarea[] = [{
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
listaTareas.forEach((tarea: Tarea, i: number) => {
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
    } else {
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
function saludar(nombre: String) {
    console.log(`Hola ${nombre}`);

}

saludar("Antonio");

// Funcion con parametros opcionales

/**
 * Funcion que sirve para decirle adios a una persona, en caso de no decir nungun nombre diremos adios 
 * @param nombre - nombre a despedirse de la persona
 */
function despedir(nombre?: String) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    } else {
        console.log(`Adios`);
    }

}

despedir("Antonio");

// funcion pasandole varios tipos
function algo(n: String | number) {

    if (typeof (n) == "string") {
        console.log("Soy un String");
    } else {
        console.log("Soy un numero");

    }
}

algo("A");
algo(1);

// Funcion que devulve un parametro
function suma(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(suma(1, 19));

// funcion con propagacion
/**
 * Esta funcion le puedes introducir tantos esstring como quieras
 * @param nombre - lita de string
 */
function multiplesValores(...nombre: String[]) {
    nombre.forEach(n => {
        console.log(`nombre: ${n}`)
    });

}

multiplesValores("Antonio", "Andres", "Cristoval", "Enrrique", "Veronica", "Carla", "Enrriquita");
// Que es muy distinto que la siguiente funcion que en este caso si recibe una lista
/**
 * Funcion que muestra los valores de una lista
 * @param lista - lista de valores a mostrar
 */
function mostrarLista(lista: String[]) {
    lista.forEach(element => {
        console.log(element);
    });

}

let lista: String[] = ["Antonio", "Pedro", "Maria de las Carmen"];

// Se puede pasar la lista de esta forma
mostrarLista(lista);


// Funciones flechas (Son funciones que se llaman y se almacenan en una variable)
// Declaramos los datos para usarlo a continuacion
type Almacen = {
    nombre: string,
    capacidad: number
};

let almacen: Almacen = { nombre: "tecnologia", capacidad: 20 };

let datosAlmacen = (almancen: Almacen) => `El almacen de ${almacen.nombre} tiene una capacidad de ${almacen.capacidad}`;

console.log(datosAlmacen(almacen));

let obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return;
    } else {
        cobrar(); // Callbalck a Ejecutar
    }
};

let cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);

};

obtenerSalario(empleado1, () => "Cobra Antonio");


// Funciones asincronas

async function ejemploAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
    console.log("Completado");

    return "Completado"

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
function* watcher(valor: number) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del wolker

    yield valor + 10; // emitimos el valor final
}

function* worker(valor: number) {
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

async function asincronas() {
    let suma = 0;
    for (let index = 0; index < 100; index++) {
        suma += index;

    }
    return suma;

}

asincronas().then((data: number) => {
    console.log(`El resultado de ejecutar async = ${data}`);

});
console.log("Línea de codigo posterior a llamada asincrona");

// Funcion asincronas y generadoras

function* fgeneradora2(): Generator<String> {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}

let llamadafgen2 = fgeneradora2();
let str = llamadafgen2.next()

while (str.done == false) {
    console.log(str.value);
    str = llamadafgen2.next()
}

type WebPage = {
    Name: String,
    Domain: String,
    Descripcion: String
}

async function* obtenerDatosWeb(): AsyncGenerator<WebPage> {
    let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    let datos: WebPage[] = await peticion.json() as WebPage[];

    for (let index = 0; index < datos.length; index++) {
        yield datos[index];

    }

}

let datosWebPage = obtenerDatosWeb();

datosWebPage.next().then(({ value, done }) => {
    console.log(`Nombre pagina: ${value.Name} Descripcion pagina: ${value.Description}`);
})

function saludarSobrecargado(nombre: String): String;
function saludarSobrecargado(nombre: String, apellido: String): String;
function saludarSobrecargado(nombre: String, apellido: String, edad: String): String;

function saludarSobrecargado(nombre: String, apellido?: String, edad?: String) {
    let saludo = `Hola ${nombre}`;

    if (apellido) {
        saludo += ` ${apellido}`;
    }
    if (edad) {
        saludo += `${edad}`;
    }

    return saludo
}

console.log(saludarSobrecargado("Antonio", "Pepito de los grillos", "23"));

console.log("-----------------tareas-----------------");


/**
 * Funcion que sirve para guardar datos en el navegador
 * @param type - indicamos session si queremos guardar los datos en la sesion o local en caso de que queramos guardar estos de forma local
 * @param key - nombre de los datos guardados
 * @param data  - array de tarea que son los datos que vamos a guardar
 */
function saveData(type: String = "SessionStorage", key: string, data: Tarea[]) {

    try {
        if (type.toLowerCase() == "session" || type == "SessionStorage") {
            sessionStorage.setItem(key, JSON.stringify(data))
        } else if (type.toLowerCase() == "local") {
            localStorage.setItem(key, JSON.stringify(data));
        }
    } catch (error) {
        console.log("Error no esta definido el almacenamiento de los datos");

    }

}
let tarea2: Tarea = { nombre: "Estudiar", prioridad: 1, estado: EstadoTarea.Terminado };
let tareas: Tarea[] = [tarea1, tarea2];

console.log("Guardamos los datos en las sesiones");

saveData("session", "datos", tareas);
saveData("local", "datos", tareas);

// Crea una función en tu proyecto que permita la recuperar la información almacenada en SessionStorage y LocalStorage.
// Dicha función debe recibir dos parámetros: type que será un string y tendrá como valor por defecto "session", 
// y un string llamado "key". El funcionamiento de la función debe ser el siguiente: dependiendo el valor de type, si es "sessión" o "local", 
// se recuperará la información empleando el objeto "SessionStorage" o "LocalStorage" y la key pasada como parámetro.
function getData(type: String = "session", key: string) {

    let datos;

    try {
        if (type.toLowerCase() == "session") {
            datos = sessionStorage.getItem(key);
            console.log(`Datos recuperados de sessionStorage: ${datos}`);
        } else if (type.toLowerCase() == "local") {
            datos = localStorage.getItem(key);
            console.log(`Datos recuperados de localStorage: ${datos}`);
        }


    } catch (error) {
        console.log("Error no esta definido el almacenamiento de los datos");

    }

}

getData("session", "datos");
getData("local", "datos");


function removeData(type: String = "session", key: string) {

    try {
        if (type.toLowerCase() == "session") {
            sessionStorage.removeItem(key);
            console.log(`Datos eliminados de sessionStorage`);
        } else if (type.toLowerCase() == "local") {
            localStorage.removeItem(key);
            console.log(`Datos eliminados de localStorage`);
        }


    } catch (error) {
        console.log("Error no esta definido el almacenamiento de los datos");

    }

}

removeData("session", "datos");
removeData("local", "datos");

Cookies.set('Nombre', 'Antonio', { expires: 7, path: "/", sameSite: 'Strict', secure: false })
Cookies.set('Apellido', 'Gómez Camarena', { expires: 2, path: "/", sameSite: 'Strict', secure: false })
Cookies.set('Email', 'agomcam813@iescarrillo.es', { expires: 4, path: "/", sameSite: 'Strict', secure: false })

console.log(Cookies.get('Nombre'));
console.log(Cookies.get('Apellido'));
console.log(Cookies.get('Email'));

Cookies.remove("Nombre")
Cookies.remove("Apellido")
Cookies.remove("Email")
console.log("Datos eliminados correctamente");

console.log("-----------------Fin-tareas-----------------");
const numeros = [];

console.log(numeros.length);
// Los arreglos tienen multiples funciones.

numeros.push(1);
numeros.push(2);

console.log(numeros.length);

// Funciones: estructuras de código reutilizables. Existen dos tipos, funciones que retornan y funciones que no retornan.

// Funcion que no retorna:
function sumar (a,b){
    const resultado = a + b;
    console.log(resultado);
};
// Funciones de tipo flechado (arrow function)
const sumarVersionDos = (a,b) => {
    const resultado = a + b;
    console.log(resultado);
};
// Funciones de tipo flechado (arrow function)
sumar(1,5);
sumar(2,3);
sumarVersionDos (2,3);
// Funcion que no retorna.

// Funcion con retorno: hace operacion interna pero devuelve un valor.
const multiplicacion = (a,b) =>{
    const resultado = a*b;
    return resultado;
};
const resultadoOperacion = multiplicacion (2,3);
console.log(resultadoOperacion);
// Llamo la funcion y le doy valor. Sirve para guardar el resultado en una variable.
console.log(multiplicacion(2,5));
// Llamo la funcion y le doy valor. Sirve para guardar el resultado en una variable.
// Funcion con retorno.

const monstrarNombre = (nombre) =>{
    const resultado ="Hola" + nombre;
    console.log(resultado);
};

monstrarNombre("Juan");

const retornarNombre = (nombre) =>{
    return "Hola " + nombre; 
};

const nombreEsperado = retornarNombre("Pedro");
console.log(nombreEsperado);
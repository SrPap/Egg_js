
const frase = prompt("Ingrese una palabra o frase a gusto");

const cantidad = frase.length;

const  mensajeCantidad = "La palabra " + frase + " tiene " + cantidad + " letras.";

// alert (mensajeCantidad)

const fraseMinusculas = frase.toLowerCase();

const fraseMayusculas = frase.toUpperCase();

const minMay = fraseMinusculas + fraseMayusculas;

console.log (minMay);

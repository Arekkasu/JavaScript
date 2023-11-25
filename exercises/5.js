// ?
/* 
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function reverse_string(string = undefined){
    if (!string || typeof(string) === 'number') return ("Ingresa una cadena de texto valida");

    return [...string].reverse().join("")
}

console.log(reverse_string("dsa"))
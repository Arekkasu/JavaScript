// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá 10.

function caracteres_string (palabra) {
    let tipo_dato = typeof(palabra)
    let cantidad_letras = palabra.length
    if (tipo_dato === "string") {
        return `La palabra "${palabra}" tiene ${cantidad_letras} caracteres`
    }

    return "Error, Verifica los datos enviados"
}

console.log(caracteres_string(""))
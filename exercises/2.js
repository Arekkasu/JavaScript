
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function receortar (palabra, cantidad) {
    let tipo_dato = typeof(palabra)
    let tipo_numero = typeof(cantidad)
    if (tipo_dato === "string" && tipo_numero === "number") {
        return palabra.slice(0,cantidad)
    }
    return "INGRESA VALORES VALIDOS"
}

console.log(receortar("Hola Mundo", 4))
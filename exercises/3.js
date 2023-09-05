//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


function Str_to_Array (palabra, caracter) {
    let tipo_dato = typeof(palabra)
    let tipo_caracter = typeof(caracter)
    
    if (tipo_dato === "string" && tipo_caracter === "string") {
        
        return palabra.split(caracter)
    }

    return "Error, Verifica los datos enviados"
}

console.log(Str_to_Array("Hola Mundo", ' '))
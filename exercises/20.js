/*
Programa una función que dado un array numérico devuelve otro array con los 
números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */


function pow_array (list_number) {

    if (!(list_number instanceof Array)) return console.log("Ingresa un valor valido")

    if (list_number.every((elemento) => typeof elemento !== 'number' && isNaN(elemento))){
        return console.log("Los datos del Array no son numeros")
    }

    return list_number.map(elemento => Math.pow(elemento, 2))

}

let array_numeros = [1,4,5,6]

let elevados = pow_array(array_numeros)


console.log(elevados)
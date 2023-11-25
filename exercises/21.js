/* 22) Programa una función que dado un array devuelva el número mas alto 
y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

function min_max (list_number) {

    if (!(list_number instanceof Array)) return console.log("Ingresa un valor valido")

    if (list_number.every((elemento) => typeof elemento !== 'number' && isNaN(elemento))){
        return console.log("Los datos del Array no son numeros")
    }

    let max = Math.max(...list_number)
    let min = Math.min(...list_number)

    return [min, max]


}


let numero = min_max([1, 4, 5, 99, -60])

console.log(`Este es el mayor y el menor ${numero}`)


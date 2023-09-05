/* Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el 
primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

function odd_par (list_number) {

    if (!(list_number instanceof Array)) return console.log("Ingresa un valor valido")

    if (list_number.every((elemento) => typeof elemento !== 'number' && isNaN(elemento))){
        return console.log("Los datos del Array no son numeros")
    }

    let odd = []
    let par = []

    for (i of list_number){

        if (i%2 != 0) {
            odd.push(i) 
            continue
        }

        par.push(i)
    }

    return {"par": par, 
    "odd": odd}


}




let numero = [1,2,3,4,5,6,7,8,9,0]

console.log(odd_par(numero))
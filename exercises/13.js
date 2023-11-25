//? Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let par_or_impar = (number) => {

    if (isNaN(number)) return `El valor ingresado no es valido`;

    if (number%2 !== 0) return `${number} es impar`;

    return `${number} es par`

}


console.log(par_or_impar(345678))
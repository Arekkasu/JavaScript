// Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
// pe. miFuncion(7) devolverá true.

function prime_number (number) {
    
    if ( isNaN(number) || Math.sign(number) === -1) return "EL valor ingresado no es valido";

    if (number == 0 || number == 1) return `${number} No es un numero primo`
    

    let raiz_cuadarda = Math.sqrt(number)

    for (let i = 1; i <= raiz_cuadarda; i++){

        if (raiz_cuadarda%i == 0) return `${number} no es un numero primo`
    }

    return `${number} es un numero primo`
}


console.log(prime_number("100"))
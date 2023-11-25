/*
   * 7) Programa una función que valide si una palabra o frase dada, 
   * es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/



function Polindromo(string) {

    if(!string || typeof string !== "string") return "El valor ingresado de ver ser de texto";

    //! Haciendo inverso de la palabra

    let upper_string = string.toUpperCase()

    let reverse_string = [...upper_string].reverse().join("")

    
    //? SI ES POLINDROMO
    if (upper_string == reverse_string) return `${string} es un polindromo.`;


    return `${string} no es un polindromo`

}


console.log(Polindromo("sds"))




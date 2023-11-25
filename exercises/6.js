//?
/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */


function count_word(string, word) {

    
    if (!string || !word || typeof string !== 'string' || typeof word !== 'string') return "No deben haber datos vacios, intenta de nuevo";

    const regex = new RegExp(word, "gid")
    const find = string.match(regex);

    if (!find) return "No hay coincidencia con el texto"

    const count = find.length


    return `La palabra ${word} se presenta ${count} ves/veces en el texto`




}


console.log(count_word())
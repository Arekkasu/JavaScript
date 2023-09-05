/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

function delete_repeat (list_number) {

    if (!(list_number instanceof Array)) return "El valor enviado no es un Array";

    if (list_number.length < 2 ) return "El Array debe tener 2 o mas elementos"

    list_number = [...new Set(list_number)] 
    return list_number


}


console.log(delete_repeat())
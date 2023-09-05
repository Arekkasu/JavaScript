// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


function asc_desc (list_number) {

    if (!(list_number instanceof Array)) return console.log("Ingresa un valor valido")

    if (list_number.every((elemento) => typeof elemento !== 'number' && isNaN(elemento))){
        return "Los datos del Array no son numeros"
    }
    
    // 
    list_number = list_number.map((elemento) => parseInt(elemento))

    let asc = [...list_number].sort((a, b) => a - b)
    
    let desc = [...asc].reverse()

    return {"Ascendente": asc, 
    "Descendente": desc}


}


console.log(asc_desc(["1","23",-3]))

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente 
//y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


function asc_desc (array_numbers) {


    if (!(array_numbers instanceof Array)) return console.log("Ingresa un valor valido")

    if (array_numbers.every((elemento) => typeof elemento !== 'number' && isNaN(elemento))){
        return console.log("Los datos del Array no son numeros")
    }

    const numeros_asc = array_numbers.map(el => el).sort((a,b) => a-b)
    const numero_desc = numeros_asc.map(el => el).reverse()

    return console.info(
        array_numbers,
        numeros_asc,
        numero_desc)

} 



asc_desc([123,652,5473,9834,9765,10676,547,26,45,64,830,2])

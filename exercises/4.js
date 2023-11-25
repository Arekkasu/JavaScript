/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repeat_string (palabra, numero_veces) {

    let tipo_dato = typeof(palabra)
    let tipo_caracter = typeof(numero_veces)
    
    if (tipo_dato === "string" && tipo_caracter === "number") {
        
        console.log(`El texto se repetira ${numero_veces}`)

        for (let i = 1; i <= numero_veces; i++){

            console.log(`${i}. ${palabra}\n`)

        } 
        
        
        
        return "Proceso Finalizado"
    }

    return "Error, Verifica los datos enviados"
}

console.log(repeat_string("Hola Mundo", 6))
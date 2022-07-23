try{
    console.log('En el try se agrega el codigo a evaluar')
} catch(error){
    console.log(error)
}finally{
    console.log('El bloque finally se ejecutara siempre al final de un try-catch')
}

//Ejemplo

let numero = prompt('Digite un numero que no sea mayor del 1 al 10');
    try{
            if(numero > 10){
                throw new Error('El numero es mayor del rango')
            }
    } catch (error){
        alert(`${error}`)
    }finally{
    console.log(numero)
    }
alert(`tu numero es ${numero}`)
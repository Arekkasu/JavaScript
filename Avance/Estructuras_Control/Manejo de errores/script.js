try{

    throw new Error('ERROR PERSONALIZADO')
    
} catch(error){

    console.log('CATCH EJECUTA EL ERROR')

}
//Ejemplo

let numero = 20

    try{
            if(numero > 10){
                throw new Error('El numero es mayor del rango')
            }
    console.log('Rango permitido')
    } catch (error){
        console.log(`Se produjo el siguiente error:
${error}`)
    }
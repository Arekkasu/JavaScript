// ** CORTOCIRCUITO OR

//? Este hara una comprobacion, si hay valor
//? en la izquierda dara True, en caso que no, 
//? se mostrara el de la derecha

function creacion_usuario(nombre, apellido) {
    let uknown = "Desconocido"

    nombre = nombre || uknown
    apellido = apellido || uknown
    return console.log("Hola %s %s", nombre, apellido)
}


// ! SERA DESCONOCIDO YA QUE SE ENVIO UN VALOR VACIO
creacion_usuario("Alex")



// ** CORTOCIRCUITO AND

//?El operador de cortocircuito && puede 
//?ser útil para realizar evaluaciones condicionales 
//?más eficientes y evitar errores en caso de que una
//?condición sea falsa.
//! El operador AND va a devolver el primer valor que evalúe a falso o sino el ultimo valor



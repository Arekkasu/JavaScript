
// SET --> lo mismo que en python, arreglo que no tiene
// datos repetidos

// Creacion

const set = new Set([1,2,3,3,3,true,false,false,{},{}])

console.log(set)

// Saber su longitud es con size

console.log('Su longitud es: ', set.size)

//Agregar elemento

const set2 = new Set();

set2.add(4)

console.log(set2)

//Acceder un indice del set

console.log(Array.from(set)[0])

//Eliminar elemento set


console.log("set.delete(elemento)", set2.delete(4))

console.log(set2)

//Saber si tiene el elemento

console.log('set.has(3)',set.has(3))

//limpiar

console.log("Limpiar set.clear()")

set.clear()

console.log(set)

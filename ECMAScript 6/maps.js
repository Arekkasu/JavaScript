/*

MAPS: Parecido a un objeto, usado para una coleccion de datos que 
tiene relacion entre si

requiere llaver y valor

*/


let mapa = new Map(); //creacion de map

mapa.set("nombre", "Alex")
mapa.set("apellido", "lozada")
mapa.set("edad", 18)

console.log(mapa)
console.log(`Saber longitud usando map.size, ${mapa.size}`)

// Saber si existe una propiedad

console.log(`saber la existencia es con map.has(propiedad), 
${mapa.has("nombre")}`)

//obtener valor

console.log(`map.get(), ${mapa.get("nombre")}`)

// eleminar

console.log(`map.delete(), ${mapa.delete("edad")}, ${mapa}`)

// Iteracion

console.log("ITERACION")


for (let [key, value] of mapa) {

	console.log(key, value)

}


// OTRA FORMA DE CREAR

const mapa2 = new Map([
['nombre', 'Daniel :D'],
['apellido', 'Ruiz'],
['apodo', 'Mi primito con asperger']
])

//almacenar las llaves y valores en un array


const llavesmapa2 = [...mapa2.keys()]
const valoresmapa2 = [...mapa2.values()]

console.log(llavesmapa2, valoresmapa2)

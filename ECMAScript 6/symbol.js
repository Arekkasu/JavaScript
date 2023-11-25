/*

SYMBOL, es un tipo de dato primitivo, su valor mantiene privado y 
es para uso interno, se agregan como caracteristicas de objetos 
como propiedades para que sean privada, su creacion es Symbol(),
esto permite crear identificadores de pertenencia
*/

let id = "hola";
let id2 = "hola";

console.log(id == id2) // ---> esto dara true ya que no son unicos

// Mientras que si se usa symbol

id = Symbol("id"); //--> dentro de los parentesis se puede poner una 
	       // descripcion

id2 = Symbol("id2");

console.log(id === id2) // --> False ya que no son lo mismo

console.log(id, id2) //Entrega  Symbol(Descripcion)

console.log(typeof id) // Da symbol

/*
SU USO:

Suelen usarse a menudo para identificar las propiedades de 
objetos evitar colisiones entre propiedades para evitar que estan 
se sobreescriban

*/

// USARLO EN OBJETOS

//BUENA PRACTICA

const NOMBRE = Symbol("NOMBRE")


const persona = {

	[NOMBRE]: "ALEX" //esto hace que el usuario no vea como se 
			 // llama la propiedad

	
}

console.log(persona)

persona.NOMBRE = "ALEXANDER" //AUNQUE SE CREO UNA PROPIEDAD 
			     // CON EL MISMO NOMBRE, ESTE NO LO AFECTARA

console.log(persona)

console.log(persona[NOMBRE]) //se imprime

// PROPUEDAD CON VALOR DE FUNCION

const SALUDAR = Symbol("SALUDAR")

persona[SALUDAR] = function () {
	console.log(`Soy ${persona[NOMBRE]}`)
}


persona[SALUDAR]()

// COMO ACTUA EN UN CILO

for (let propiedad in persona) {

	console.log("ESTA IMPRIMIENDO LA PROPIEDAD"+' '+propiedad)
	console.log(persona[propiedad])

}



console.log(Object.getOwnPropertySymbols(persona))

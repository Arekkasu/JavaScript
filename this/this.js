
/*
THIS: Palabra que hace refernecia al objeto en el cual
se esta trabajndo que permite invocar propiedad y metodos de este.

Aunque en JS se trabaja de forma distinta.

LO QUE DEVUELVE THIS EN NODEJS

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}

//Lo que devuelve This en navegadores

Window --> este es el enfoque globar del archivo

Window === this

*/


this.nombre = "Contexto global" //Se le asigno un contexto nombre
console.log(this.nombre) // Imprime nombre del contexto global


function imprimir(){

	console.log(this.nombre)
	/*
	Sigue siendo un ambito global de este
	*/

}

imprimir()

const obj = {

	nombre: "Contexto Objeto",
	imprimi: function (){
		console.log(this.nombre)
	}
}

obj.imprimi() 
//Usando this en un objeto se vuelve un ambito solo 
//en este, osea se creo en el contexto del objeto ignorando del global


const obj2 = {

	nombre: "Contexto objeto 2",
	imprimir //Es la funcrion imprimir del this global


}

obj2.imprimir();

const obj3 = {

	nombre: "Contexto objeto 3",
	imprimir: () => {
	console.log(this.nombre)
	} //al ser una arrow function este no sera un scope del obj

}
obj3.imprimir()

function Persona (nombre) { 
	this.nombre = nombre
	//return console.log(this.nombre)
	/*return function () {
	console.log(this.nombre)
	}//esta funcion es llamada closure
	*/
	return () => console.log(this.nombre, 18) 
	// en este no se afecta si es anonima
}//esta funcion crea su propio SCOPE (Esto es una clase)

let alex = new Persona("Alx")
alex()

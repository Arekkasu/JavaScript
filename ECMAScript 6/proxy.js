/*
PROXY, es similar a las clases sino que s eutiliza objetos literales
el cuagenera una copia que permitira hacer operaciones con las propiedad
de la copia que se estara creando de un objeto 

*/

const persona = {

	nombre: "",
	apellido: "",
	edad: 0

}

const manejador = {

	set(obj,prop,valor) {
		if (!Object.keys(obj).includes(prop)){
			return console.error(`${prop} no existe`)
		}
		obj[prop] = valor;
	}




}

const alex = new Proxy(persona, manejador)
alex.nombre = "alex"; //se usa el handler
alex.apellido = "Lozada"; //se usa el handler
alex.edad = 18; //se usa el handler
console.log(alex);
console.log("SE LE AGEGARA UNA NUEVA PROPIEDAD LLAMA RED SOCIA");
alex.redsocial = "Arekkasu"
console.log(alex)

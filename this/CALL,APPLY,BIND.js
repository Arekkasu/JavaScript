/* JS ofrece tres metodos para poder almacenar la referencia de 
algun scope para usarlo en otro codigo

Call y Apply, son practicamente lo mismo, su diferencia es que
al pasar los valores 


*/


console.log(this);

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
	
	//Como tal el this.variable, tomara el scope del mencionado
	//con apply o call
	console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)

}

saludar();

const obj = {

	lugar: "Contexto Objeto"

}

saludar.call(obj, "hola", "Alex")
saludar.apply(obj, ["Adios","Alex"])
// Si tiene null o this sera en contexto global


const persona = {

	nombre: "Alex",
	saludar: function () {
	console.log(`hola ${this.nombre}`)
	}


}

persona.saludar()

const otraPersona = {
	//COMO TAL ENLAZA EL THIS CON OTRO
	//SIN QUE ESTE AFECTE
	saludar: persona.saludar.bind(persona)
	//EL VALRO ES ALEX YA QUE EL THIS QUE HAY EN PERSONA
	//ESTA SENALANDO A NOMBRE ENTONCES COMO PROPIEDAD 
	//ESTA NOMBRE: "ALEX", ESE SERAI EL THIS.NOMBRE
}

console.log("BIND")
otraPersona.saludar()

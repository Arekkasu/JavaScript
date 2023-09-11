/*
Esto se refiere a una forma de automatizar la asignacion de 
propiedades a los objetos
*/

const idAleatorio = Math.round(Math.random()*100 + 5)
			//5 para que inicie desde cinco

const objUsuarios = {
	[`id_${idAleatorio}`]: "VALRO ALEATORIO"
}

const usuarios = ["Alexander","julian","miguel","juan"]

console.log(objUsuarios)
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario)
console.log(objUsuarios)


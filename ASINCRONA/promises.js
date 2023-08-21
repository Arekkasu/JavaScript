/* PROMESAS EN JS*/

/* Las promesas surgieron en la necesidad de evitar el callback 
hell, que es practimamente un hadouken en el codigo, esto 
complicaba en la lectura del codigo, entonces se decidio 
implementar las promesas que facilitaba su lectura y manejo, 
anadiendo dos nuevas funciones que son then() y catch(), pero 
tiene la misma funcion */


function Promesa(value){

	if (typeof value !== "number") return Promise.reject("no es un numbero")

	return new Promise((resolve, reject) => {
	
	setTimeout(() => {
	resolve( {
		value,
		result: value*value
	});
	}, 0 | Math.random()*1000)
	});

}




Promesa('Nd')
	//PRIMERA EVALUACION
	.then(obj => {
	console.log("Inicio Promise");
	console.log(`ESTO ES EL RETURN DE LA PROMESA ${obj.value}, ${obj.result}`)
	return Promesa(obj.result)
	})
	/*
	Por decirlo asi el return que hay en el primer then se le entregara al siguiente
	con tal de continuar una forma tipo cadena
	*/
	//SEGUNDA EVALUACION
	.then(obj => {
	console.log("Inicio Promise");
	console.log(`ESTO ES EL RETURN DE LA PROMESA ${obj.value}, ${obj.result}`)
	return Promesa(obj.result)	
	})
	//EN CASO DE ERROR	
	.catch( () => {
	console.log("ERRORES HECHO EN LA PROMESA :)")
	})
	


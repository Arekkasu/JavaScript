/* ASYNC - AWAIt*/

/*estan disenadas para gtrabajra en conjunto con las promesas mas 
no las reemplaza que es lo importante*/

// ASINCRONA DECLARADA


function promesa(value) {

	if (typeof value !== "number") {
	
	return Promise.reject(
	`Error, el valor "${value}" no es un numero`
	)
	
	}


	return new Promise( (resolve, reject) => {

	setTimeout(() => {
		resolve({
			value,
			result: value*value
		});
	}, 0 | (Math.random() * 2000));

	});

}



async function Asincronia_Declarada (){

	// EN ESTAS FUNCION ASYN_AWAIT ES NECESARIO USAR
	
	let obj = await promesa(6)

	console.log(`Async function: ${obj.value}, ${obj.result}`)
	
	obj = await promesa(3)

	console.log(`Async function: ${obj.value}, ${obj.result}`)

	obj = await promesa(2)

	console.log(`Async function: ${obj.value}, ${obj.result}`)

	obj = await promesa(8)

	console.log(`Async function: ${obj.value}, ${obj.result}`)

	console.log("ESTO ESTA A LO ULTIMO")

}

Asincronia_Declarada()

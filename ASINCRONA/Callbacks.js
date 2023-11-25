// CALLBACK

/* Un callback es la funcion que se pasa de argumento a otra 
funcion haciendo que se ejecute dentro de otra funcion */

function operacion_Asincrona(valor = 0, callback){

	setTimeout(function() {
	console.log("EN EL TIMEOUT");
	console.log(callback());
	console.log("Fin timeout");
	}, 1000);

	console.log("FUERA DEL TIMEOUT")


}

function Callback_part(){
	
	return 2+2

}


operacion_Asincrona(3,Callback_part)

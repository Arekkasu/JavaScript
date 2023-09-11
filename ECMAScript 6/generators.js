/*

GENERADORES o GENERATORS:

generadores es function* nombre_funcion () {}, es una funcion 
que permite trabajar de forma mas amigable con iteradores e iterables


*/

function* iterable () {

//yield es como un return que indicia a la funcion, se deja el 
//cursor o el apuntador que cuando se ejecute denuevo lo buscara 
//y si no esta es porque ha acabado con los valores de la funcion 
//iterable, en donde en next dara true en done

	yield "HOLA";
	console.log("Hola consola");
	yield "Hola2"
	console.log("yield dos")
	yield "hola3"
	yield "hola4"

}


let iterador = iterable();

for (let y of iterador) {

	console.log(y)

}

const arr = [...iterable()];
console.log(arr)

function cuadrado(value){

	setTimeout( () =>  {
	
	return console.log({value, resultado: value*value})

	}, Math.random()*1000)
}

function* generador(){
	console.log("Inicia Generator");

	yield cuadrado(0);
	yield cuadrado(1);
	yield cuadrado(2);
	yield cuadrado(3);
	yield cuadrado(4);
	yield cuadrado(5);
	console.log("Termina Generator")

}


let gen = generador();

for (let y of gen) {
	console.log(y)
}

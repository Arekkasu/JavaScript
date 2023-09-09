/*

Iterador es una especio de apuntador que recorre los elementos de la estructura de datos

iterable es el elemento que se peud iterar
*/

const iterable = new Map([['hola', 3]]);

//ACCEDEN AL ITERADOR DEL ITERABLE
const iterador = iterable[Symbol.iterator]();

console.log(iterable, iterador)

console.log(`iterador.next() demuestra en que valor esta del iterable pero en forma de objeto`,
`iterador.next() donde value es el elemento que esta apuntando y donde es si recorrio todo el iterable`)

console.log(`Recorriend un iterable con un iterador`)
let next = iterador.next()
console.log(`iteracionc con un MAP`)
while (!next.done){
	console.log(next)
	next = iterador.next()
}
let text = ` ESTOS SON LAS ESTRUCTURAS DE DATOS QUE ADMITE
Arrays: Una colección ordenada de elementos, accesibles por un índice numérico.
Strings: Secuencias de caracteres. Cada carácter tiene un índice numérico y es iterable.
Sets: Colecciones de valores únicos.
Maps: Colecciones de pares clave-valor.
Typed Arrays: Arrays de datos binarios con un tipo específico de elementos (como enteros de 8 bits, enteros sin signo de 32 bits, etc.).
NodeLists: Listas de nodos de un documento HTML.
Arguments Object: El objeto arguments que está disponible dentro de una función y contiene los argumentos pasados a esa función.
Promises: Representan un valor que puede estar disponible ahora, en el futuro, o nunca.
Iterables personalizados: Puedes crear tus propios objetos iterables implementando el método [Symbol.iterator].
Generators: Funciones especiales que pueden ser pausadas y reanudadas.
`;

console.log(text)

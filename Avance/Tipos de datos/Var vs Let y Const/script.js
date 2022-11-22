//Declaracion de Variable

var hola = 'Hello world';

const saludo = 'Hello World';

let hello  = 'Hello world';

console.log(hola);
console.log(saludo);
console.log(hello);


//Ejemplo de como var y Let trabajan

var musica = 'Rock'
console.log('El genero de la cancion es:', musica)
//Bloque de codigo

{
let musica = 'Thrash Metal'
console.log('El genero de la cancion es:', musica)
}

//Codigo fuera del bloque

console.log('El genero de la cancion es:', musica);

//Const

console.log('El error es debido que puse un variable \'const\' reescrita pero no se puede hacer.');

const pi = 3.1416

console.log(pi)

pi = 15

//recuerda que no se puede iniciar una variable de const sin establecerle un valor.


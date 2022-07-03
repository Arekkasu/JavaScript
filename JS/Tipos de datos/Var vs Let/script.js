var hola = 'Hello world';
console.log(hola);
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
pi = 15
//recuerda que no se puede iniciar una variable de const sin esablecerle un valor, no se puede es malo


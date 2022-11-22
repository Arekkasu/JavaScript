//Los 2 versiones de hacer String
var espacio = ' ';

let nombre = 'Pepito'; 
let apellido = 'Perez';

console.log(nombre);
console.log(apellido);


//---------------
 //Esta es la segunda forma, la cual es la formal y al usarla te dira cuantos valores hay en la cadena
let strings = new String('Hola mundo')
console.log(strings)

console.log(espacio)


//---------------


//Metodos Strings

console.log(nombre.length)//Para saber la cantidad de caracteres que tiene la cadena

console.log(espacio)


//Para poner en mayusculas

console.log(nombre.toUpperCase())
    
console.log(espacio)


//para poner en minusculas

console.log(apellido.toLowerCase())

console.log(espacio)

//Include

console.log(nombre.includes('a'))

console.log(espacio)


//trim

apellido = '     Lozada             ',

console.log(apellido)

console.log(espacio)

console.log(apellido.trim())

console.log(espacio)

//Split

text = 'Hola, como estan todos',

console.log(text)

console.log(text.split(","))



//Template Strings

//Concatenar

let saludo = 'Hola' + ' ' + nombre;

console.log(saludo) // Esta forma esta bien, pero puede ser confuso para entender el condigo en ocasiones

console.log(espacio)

//Template strings

let saludo2 = `Hola a todos, mi nombre es ${nombre} ${apellido}`;


console.log(saludo2) //En esta forma no es necesario hacer la suma de un espacio, automaticamente lo hara


console.log(espacio)

let ejemplo_1 = `Hola a todos
            muy bien
como estan ahora`;


console.log(ejemplo_1)

console.log(espacio)


//otras formas de concatenar

let ejemplo_2 = '5';
    ejemplo_2 += '6';
    ejemplo_2 += '7';
    ejemplo_2 += '8';
    ejemplo_2 += '9';
    ejemplo_2 += '10';

console.log(ejemplo_2)
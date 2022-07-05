//Los 2 versiones de hacer String
let nombre = 'Alexander';      //1 - forma normal
let apellido = 'Lozada';
console.log(nombre);
console.log(apellido);
//---------------
 //Esta es la segunda forma, la cual es la formal y al usarla te dira cuantos valores hay en la cadena
let strings = new String('Hola mundo')
console.strings
//Metodos Strings
console.log(
    nombre.toUpperCase(),//Para poner en mayusculas
    apellido.toLowerCase(),//para poner en minusculas
    nombre.includes('a'),//Detecta si hay cierot caracter en la cadena, si hay sera True sino seta False
    //------//
    apellido = '     Lozada             ',
    apellido.trim(),//trim sirve para eliminar los espacios del principio y final
    //-----//
    text = 'Hola, como estan todos',
    text.split(",")//Para separar los caracteres en un Array.
);


//Template Strings

//Concatenar

let saludo = 'Hola' + ' ' + nombre;
console.log(saludo) // Esta forma esta bien, pero puede ser confuso para entender el condigo en ocasiones

//Template strings (el mejor)
let saludo2 = `Hola a todos, mi nombre es ${nombre} ${apellido}`;
console.log(saludo2) //En esta forma no es necesario hacer la suma de un espacio, automaticamente lo hara
let ejemplo_1 = `Hola a todos
            muy bien
como estan ahora`;//respeta hasta el flujo de como esta la candena
console.log(ejemplo_1)
//otras formas de concatenar
let ejemplo_2 = '5';
    ejemplo_2 += '6';
    ejemplo_2 += '7';
    ejemplo_2 += '8';
    ejemplo_2 += '9';
    ejemplo_2 += '10';
console.log(ejemplo_2)
//Numeros: pueden declararse como
var number_1 = 3.333;
var number_2 = new Number(4);

//---------


var no_number = '5.6'; 
// no es un numero



// METHODS
console.log(
    number_1.toFixed(1), // el numero es 3.333
    typeof(no_number),  // Para saber el tipo de dato
    parseFloat(no_number), //Hacer conversion a decimal
    String(number_2), // Hacer conversion a cadena
    parseInt(no_number) // Hacer conversion a entero
    )


// Booleanos
    //True
let ejem_1 = true;
let ejem_2 = {};
let ejem_3 = [];
let ejem_4 = +1;
let ejem_5 = 'Hola';
let ejem_6 = new Date();
let ejem_7 = -1;
let ejem_8 = 3.4;
let ejem_9 = -3.4;
let ejem_10 = Infinity;
let ejem_11 = -Infinity;

    //False
let ejem_12 = false;
let ejem_13 = null;
let ejem_14 = undefined;
let ejem_15 = 0;
let ejem_16 = -0;
let ejem_17 = 0n; // es el 0 binario
let ejem_18 = NaN;
let ejem_19 = '';

// Undefined, Null, NaN

//Undefined

let indefinido;

//Null

let vacio = null;

//Nan

let str = 'Hola';

let int  = parseInt(str)

console.log(int)
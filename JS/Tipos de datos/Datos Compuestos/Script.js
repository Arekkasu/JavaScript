//Funciones
    //Declaracion
function Nombre(){
    console.log('Esto es de la funcion de como declarar')
}

//Como hacer el llamado a la funcion
Nombre()

//Como devolver valor en Funciones
function ejemplo(){
    let numero = 1;
    let numero_2 = 1;
    return numero+numero_2
}

//se debe llamar con console.log o que este asignada a un variable
console.log(ejemplo());

var ejemplo = ejemplo();

console.log(ejemplo)

//Funcion con valores

let nombre = 'Alexander';
let edad = 17;

function usuario(nombre, edad){
    console.log(`Hola ${nombre} de ${edad} de edad`)
}

usuario(nombre, edad)


//Funciones expresadas o anonimas

var expresada = function(){
    console.log('Hola esto es una funcion expresada')
}
expresada()

console.log('-----------------------------------------------------')

//Arrays

    //como hacer un array

const Gustos_Musica = ['Rock', 'Meltal', ['Trash Metal', 'Nu metal'], 'Lo-fi', 'Indie', 'Alternativo']

// Como ver lo que tiene un array

console.log(Gustos_Musica)

//para ver un elemento del Array especifico

console.log(Gustos_Musica[2][1])

//Methods Array

//Longitud del Array
console.log(Gustos_Musica.length)


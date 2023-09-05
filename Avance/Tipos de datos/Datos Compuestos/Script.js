//Funciones




    //Declaracion

function sumar(a, b){
    
    return a+b

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

const array = [ ]

    //como hacer un array

const Gustos_Musica = ['Rock', 'Meltal', 
    
    ['Trash Metal', 'Nu metal'],
    
    'Lo-fi', 'Indie', 'Alternativo']

// Como ver lo que tiene un array


console.log(Gustos_Musica);


//para ver un elemento del Array especifico


console.log(Gustos_Musica[2][1]);


//Methods Array

//Longitud del Array


console.log(Gustos_Musica.length);


//Agregar un Nuevo Elemento

Gustos_Musica.push('Folk', 'Ranchera');

console.log(Gustos_Musica);


//Eliminar elemento del final

Gustos_Musica.pop();



// Splice


Gustos_Musica[2].splice(0, 1) // ----> 



// Hacer funcion por Array



console.log('Tus gustos son los siguientes:')

Gustos_Musica.forEach(function (el/*Nombre del elemento*/, index/*ID del elemento*/){
    console.log(`${index+1} ${el}`)
})



console.log('--------------------------------------------------')





//Objetos




//Como hacer un objeto

const user = {
    //Clave     //Valor
    nombre,
    Apellido:   'Perez',
    Edad:        17,
    Pasatiempos: ['Escuchar Musica', 'Tocar Guitarra', 
                'Jugar Videojuegos', 'Ver anime'],
    Contact:    {
                Correo: 'Arek3071@gmail.com',
                Numero: +5770377746603
                    },
    saludo:     function ()     {
                    console.log(`Hola ${this.nombre} ${this.Apellido}, Edad ${17} años.`)
                }

}

//Como llamar

user.saludo()


//Con Array


console.log(user.Pasatiempos);


//Seleccionar un elemento de un array

console.log(user.Pasatiempos[3])


//seleccionar el objeto de un objeto



console.log(user.Contact.Correo);



//Methods Objetos

//Saber que contiene el objeto


console.log(Object.keys(user)); 



//Valores que tiene el objeto

console.log(Object.values(user));


// dara true o false si el objeto contiene lo que se le pide

console.log(user.hasOwnProperty('nombre')); 

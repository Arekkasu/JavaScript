//Funcion Constructora --- NECESARIO EL THIS

// lo ideal es que tengan los atrobutos en el contrusctor pero los metodos afuera del constructor


function AnimalOld (nombre, genero){
    
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodo --> Esto esta mal en tema de rendimiento ya que ocuparia mas memoria porque se duplica

    this.sonar_old = function (){
        console.log('Morir')
    }
}

const snoopy_old = new AnimalOld("Snoopy", "Macho"),
    lolaBunny_old = new AnimalOld('Lola Bunny', "Hembra")


//Funcion construcora V2.0

function Animal(nombre,genero){

    //Atributos
    this.nombre = nombre
    this.genero = genero
}

//Metodos
Animal.prototype.sonar = () => console.log('Hola');

const snoopy = new Animal('snoopy', 'Macho'),
    lolaBunny = new Animal('lolaBunny', 'Mujer');


/*HERENCIA PROTOTIPICA

EN ESTA SECCION SE USARA LA FUNCION CONSTRUCTORA LLAMA ANIMAL COMO SI FUESE PADRE, SE LE HEREDARA SUS ATRICUTOS (NOMBRE, GENERO) A LA NUEVA FUNCION CONSTRUCTORA LLAMA PERRO

*/


function Perro(nombre, genero, tamanio){

    this.super = Animal; // Se establece que tendra como padre a Animal

    this.super(nombre, genero) // se seleccionaron sus atributos

    this.tamanio = tamanio

}

//Heredando del padre

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Reescribiendo los metodos para el hijo

Perro.prototype.sonar = function(){
    console.log(`Hola soy un perro, mi nobre es ${this.nombre} soy de genero ${this.genero} y mido ${this.tamanio}`)
}

const snoop = new Perro('Arekkasu', 'Macho', '163cm')

console.log(snoop)

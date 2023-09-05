//Sin destructurar

let numeros = [1, 2, 3]

let uno = numeros[0]
dos = numeros[1]
tres = numeros[2]

//console.log(uno, dos, tres)

//Con destructuracion

const [one, two, three] = numeros

console.log(one, two, three)



//Construccion Objeto

const usuario = {
    nombre: 'Pepito',
    Apellido: 'perez',
    edad: 33
  }
  
//Sin Destructuracion
  
let name = usuario.nombre
  
//Con destructuracion
  
const {nombre, Apellido, edad} = usuario
  
console.log(nombre, Apellido, edad)

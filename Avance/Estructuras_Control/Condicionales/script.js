var numero_ejm = 10;
var numero_ejm_2 = 10;


// Condicion If

if(numero_ejm > numero_ejm_2){
    console.log('Es Mayor');
    } else if(numero_ejm === numero_ejm_2){
    console.log('Es menor');
        } else {
            console.log('Son Iguales')
        }
console.log('---------------------')
//While
var i = 0;
while(i <= 10){
    console.log(i)
    if( i % 450 == 4){
        break // si el modulo de i con 450 es igual 4 rompera el ciclo
    }
    i++

}
console.log(i)

//For
console.log('---------------------')
//Tradicional o 'antigua'
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const pares = []
console.log('Los pares')
for(let i = 0; i < numero.length; i++){
    if(numero[i] % 2 != 0){
        continue
    }
    pares.push(numero[i])
    pares.sort()
}
console.log(`${pares}`)

console.log('---------------------')
//For in
console.log('for in')
const usuario = {
    nombre: 'Alexander',
    Apellido: 'Lozada',
    Edad: 17
}

for(const propiedad in usuario){
    console.log(`keys: ${propiedad}, valor: ${usuario[propiedad]}`)
}


console.log('---------------------')
//for of

console.log('for of')
for(const i of numero){
    console.log(`${numero}`)
}
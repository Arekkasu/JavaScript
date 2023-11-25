
const $card = document.querySelector('.card')

// Verificando el DOM
console.log($card)


// Verificando en string que clase es
console.log($card.className)


// Verificando en 'array' que clase es
console.log($card.classList)

//Verificacion si tiene una clase
console.log($card.classList.contains('rotate-45'))


//Agregar clase
$card.classList.add('rotate-45')

// Verificando en 'array' que clase es
console.log($card.classList)


setTimeout(() => {

    //Eliminar clase    
    $card.classList.remove('rotate-45')
    console.log($card.classList)
    console.log($card.classList.contains('rotate-45'))



}, 6000)

// Toggle es para agregar o eliminar una clase pero con un condicional
// Si tiene la clase la elimina y si no la tiene la agrega
// cada vez que se escriba el codigo como una palanca

setTimeout(() => {

    console.log("Inicio toggle")
    
    $card.classList.toggle('rotate-45')


    setTimeout(() => {

        console.log("Fin de toggle")

        $card.classList.toggle('rotate-45')

    },10000);


}, 20000)



setTimeout(() => {

    console.log("\nReplazanado clase")
    
    $card.classList.toggle('rotate-45')


    setTimeout(() => {

        console.log("Cambiando a 135")

        $card.classList.replace('rotate-45', 'rotate-135')

    },15000);


}, 30000)


// Agregando mas de una clase
setTimeout(() => {

    console.log("\nAgregando mas de una clase")
    
    $card.classList.toggle('opcity-80', 'sepia')

    setTimeout(() => {

        $card.classList.toggle('opcity-80', 'sepia')

        console.log('OTRA FORMA ES classList.add(", ") y remove(", ")')

    },15000);

}, 40000)



//Transversando en el HTML

const $cards = document.querySelector('.cards');

console.log($cards);
console.log($cards.children); // devuelve un HTMLCollection

console.log($cards.children[2]); // devuelve un HTMLCollection

console.log($cards.parentElement); // devuelve el padre del elemento

console.log($cards.firstChild, "Este valor es como el caracter anterior en el documento html mas no de la estructura html"); // devuelve el primer hijo del elemento

console.log($cards.firstElementChild); // devuelve el primer hijo del elemento

console.log($cards.lastElementChild, "Este valor es como el caracter anterior en el documento html mas no de la estructura html"); // devuelve el ultimo hijo del elemento

//COMO SABER EL EL HERMANO ANTERIOR Y EL SIGUIENTE

console.log($cards.previousElementSibling); // devuelve el hermano anterior

console.log($cards.nextElementSibling); // devuelve el hermano siguiente


// CLOSEST()

//CLOSES busca el ancestro mas cercano que cumpla con el selector que le pasemos

console.log($cards.closest('div')); //regresa null

console.log($cards.closest('body')); //regresa el body

$console.log($cards.children[3].closest('section')); //regresa el section
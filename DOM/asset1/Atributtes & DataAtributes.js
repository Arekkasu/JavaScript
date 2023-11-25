//ATRIBUTOS DE LAS ETIQUTEAS
// Y LOS VALORES DE SUS ATRIBUTOS
// DATA-nombrequesea=""

console.log("\n\n------ATRIBUTOS----\n\n\n\n")


console.log("Obteniendo el valor del document.documentElement.lang es 'en' --> ", 
 document.documentElement.lang)

console.log('La mejor forma es document.documentElement.getAttribute("lang") --> ', 

document.documentElement.getAttribute("lang"))

console.log("Diferencia al obtener un valor de una etiqueta donde es href, en este caso document.querySelector('.link-dom').href --> ",
document.querySelector('.link-dom').href, "y document.querySelector('.link-dom').getAttribute('href') --> ",
document.querySelector('.link-dom').getAttribute('href'), "Su diferencai es que el primero",
" da toda la ruta y el otro solo el valor del documento del href")


//Editando el HTML

// CAMBIANDO CON .
document.documentElement.lang = "es"

//ASI COMO TIENE GET, tendra un SET

document.documentElement.setAttribute("lang", "JAP")

//Almacenar todos los selector que hay
// en consantes ese con DOM
// VARIABLES QUE HACEN REFERENCIA A DOM

console.log("\n\n\n\n")
const $linkDOM = document.querySelector(".link-dom")


//CAMBIANDO A QUE HABRA EN OTRA PESTANA
$linkDOM.setAttribute("target", "_blank")

//CAMBIANDO LINK
$linkDOM.setAttribute("rel", "noopener")

console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")

console.log($linkDOM.hasAttribute("rel"))



//DATA-ATRIBUTTE HTML:5

//ESTOS LOS GUARDA COMO UN MAP SI ES CON PUNTO
// SI NO LO ES SOLO LO ENTREGA


console.log("$linkDOM.dataset da un map --> ",$linkDOM.dataset,
"$linkDOM.getAttribute('data-nombre') dara solo su valor -->",  $linkDOM.getAttribute("data-description"),"\t",
"$linkDOM.dataset.nombre -->", $linkDOM.dataset.description, "\n\n"
)

$linkDOM.setAttribute("data-description", "Nuevo Valor")
console.log("PARA EL CAMBIO DE SU VALOR","\n\n",

"$linkDOM.setAttribute('data-nombre', 'valor nuevo') se cambiara -->",  $linkDOM.getAttribute('data-description'),"\t",
"$linkDOM.dataset.nombre = 'Nuevo valor' -->", $linkDOM.dataset.description, "\n\n",

"PARA REMOVER SIMPLEMENTE ES removeAtrribute('data-nombre')"

);
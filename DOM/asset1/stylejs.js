const $link_DOM = document.querySelector('.link-dom');
console.log("\n\n\n\----ESTILOS JS----n\n\n\n\n\n")
console.log('.style',$link_DOM.style) // DEVUELVE UN OBJETO CON TODOS LOS ESTILOS
//SE DEBE USAR LOWELCAMELCASE backgroundColor

//ENSENA Con 0, 1, n los que hay seleccionados

console.log($link_DOM.getAttribute('style')) // DEVUELVE EL VALOR DEL ATRIBUTO STYLE


// PROPIEDADES DINAMICAS DE CSS

console.log(getComputedStyle($link_DOM)) // DEVUELVE UN OBJETO CON TODOS LOS ESTILOS

//SU DIFERENCIA EN la notacion punto regresa solo las que ha afectado tienen valor
// MIentras que con window.getComputedStyle regresa todas las propiedades, y el valor por defecto
// QUE ESTE TENDRA

//COMO ACCEDER A SU VALOR

console.log(getComputedStyle($link_DOM).getPropertyValue('color')) // DEVUELVE EL VALOR DE LA PROPIEDAD


//FORMAS DE ACCEDER

$link_DOM.style.setProperty("text-decoration", "none") // CAMBIA EL VALOR DE LA PROPIEDAD

// FORMA DEL PUNTO

$link_DOM.style.display = "block" // CAMBIA EL VALOR DE LA PROPIEDAD



// EDITANDO CON VARAIABLES CSS -- CUSTOM properties CSS


const $html = document.documentElement,
    $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark_background"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow_color");


$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

// CAMBIANDO EL VALOR DE LAS VARIABLES CSS

$html.style.setProperty('--dark_background', 'pink')

varDarkColor = getComputedStyle($html).getPropertyValue("--dark_background")

$body.style.backgroundColor = varDarkColor

$link_DOM.style.setProperty("color", "red")
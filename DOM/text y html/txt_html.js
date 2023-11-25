const $whattisDOM = document.getElementById('que-es');

// TEMPLATE STRING
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

// innerText no es un estandar, no se recomienda usarlo
// se usaba en Internet explorer
// deprecado $whattisDOM.innerText = text;
$whattisDOM.textContent = text;
$whattisDOM.innerHTML = text; // en html no usa una sintaxis practica

//CUANDO USAR TEXTCONTET Y CUANDO INNERHTML
// cuando se quiere agregar texto plano se usa textContent
// cuando se quiere agregar HTML se usa innerHTML


setTimeout(() => {
    $whattisDOM.outerHTML = text; // reemplaza el elemento por el texto
}, 7000);


/*
.inserAdjacent...
    ! AGREGA ELEMENTO
    .insertAdjacentElement(position, el)
    !COMO INNER HTML
    .insertAdjacentHTML(position, html)
    !AGREGA TEXTO COMO TEXTCONTENT
    .insertAdjacentText(position, text)

*/

/* 
? POSICIONES
! AGREGADO ANTES DEL ELEMENTO
* beforebegin(hermano anterior)
! AGEGADO DENTRO DEL ELEMENTO
* afterbegin(primer hijo)
!AGREGADO COMO EL ULTIMO DENTRO DEL ELEMENTO
* beforeend(ultimo hijo)
! AGREGADO DESPUES DEL ELEMENTO
* afterend(hermano siguiente)
*/ 

const $cards = document.querySelector(".cards"),
$card = document.querySelectorAll(".card");
    $newCard_one = document.createElement("figure");
    $newCard_sec = document.createElement("figure");

console.log(document.querySelectorAll(".card"));

$newCard_one.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="BEFOREBEGIN">
<figcaption>Any</figcaption>
`;


$newCard_one.classList.add("card");


//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard_one);

//! ADJACENT HTML
let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="ADJACENTTEXT contentcard">
<figcaption></figcaption>
`;
$newCard_sec.classList.add("card");

//SE LE AGREGO EL CONTENIDO PRACTICAMENTE INNERHTLML QUE ESTA EN LA VARIABLE CONTENT CARD
//EN EL DOMR NEWCARD_SEC o bueno FIGURE
$newCard_sec.insertAdjacentHTML("afterbegin", $contentCard);

//AGREGANDOLE NODO DE TEXTO A ETIQUETA FIG CAPTIOn

$newCard_sec.querySelector("figcaption").insertAdjacentText("afterbegin", "insetADJACENTtext");

$cards.insertAdjacentElement("afterbegin", $newCard_sec);


/*
 !ABREVIADAS

 * PREPREND --> PRIMER HIJO DENTRO ELEMENTO
 * BEFORE --> HERMANO ANTERIOR
 * APPEND --> ULTIMO HIJO DENTRO ELEMENTO
 * AFTER --> HERMANO SIGUIENTE
 ? estructura $elemento.prepend($anadir)
 */
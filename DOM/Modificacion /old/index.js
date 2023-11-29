const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure")
    // MANUALEMNTE LO DE CLONENODE

    $cloneCards = $cards.cloneNode(true); // SI SE DEJA EN FALSE SOLO CLONA EL ELEMENTO PADRE, SI SE DEJA EN TRUE CLONA TODO EL CONTENIDO

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//REPLACE CHILD, replaceChild(new, old)

/*
! $cards.replaceChild($newCard, $cards.children[2]);
*/

//INSERT BEFORE, insertBefore(new, old)

// ! $cards.insertBefore($newCard, $cards.firstElementChild);

//REMOVE CHILD, removeChild(old)

document.body.appendChild($cloneCards);
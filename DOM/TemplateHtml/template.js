const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnologia",
            img: "https://p7.hiclipart.com/preview/343/942/571/kirby-s-return-to-dream-land-super-smash-bros-for-nintendo-3ds-and-wii-u-clip-art-kirby-free-download-png.jpg"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        }
    ];

cardContent.forEach(el => {

    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //ESTO HACE QUE COPIO TODO LO QUE TIENE EL NODO DE TEMPLATE
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

});


//COMO TAL EL CODIGO LO QUE HIZO ES QUE EN TEMPLATE SE GENERO EL CODIGO DONDE INCLUYE
//FIGURE,IMG,FIGCAPTION, ESTOS COMO TAL ES UNA PLANTILLA QUE TIENE ESAS ETIQUETAS
// LO CUAL SE HACE UN FOR EACH DONDE CLONARA POR CADA INTERACCION DE LA PLANTILLA
// Y SE LE ADJUNTA A UN FRAGMENTO DE CODIGO QUE SE CREO, Y ESTE FRAGMENTO SE LE ADJUNTA
// AL CONTENEDOR DE CARDS, AL FINAL QUEDANDO AGREGADO EXACTAMENTE PARA LA SECTION CARDS.
$cards.appendChild($fragment);
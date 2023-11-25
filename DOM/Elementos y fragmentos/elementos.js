const $figure = document.createElement("figure")
    $img = document.createElement("img")
    $figcaption = document.createElement("figcaption")
    $figcaptionText = document.createTextNode("Animals")
    $cards = document.querySelector(".cards");


//ESTABLECIENDO QUE ATRIBUTOS TIENE EL ELEMENTO


$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "SS");

$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);


// AGREGANDO EL NUEVO ELEMENTO
$cards.appendChild($figure);


//FORMA DOS

const $figure2 = document.createElement("figure")

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>FIG2</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


//ESCRIBIR TITULOS
const $titulo = document.createElement("h1");
$titulo.textContent = "COSAS DINAMICAS :D";
document.body.appendChild($titulo);


//USANDO CREATEELEMENT
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});


//USANDO INNERHTML
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//LA FORMA CORRECTA Y MAS EFICIENTE ES CON FRAGMENTOS

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  //ESTE ES EK FRAGMENTO
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
 //Se crea el LI
  const $li = document.createElement("li");
  //SE DEFINE EL VALOR QUE TENDRA
  $li.textContent = el;

  //Y ESTA ES LA FORMA EN COMO IR ANADIENDO ESTO
  $fragment.appendChild($li);
});

//AL FINAL SE AGREGA EL FRAGMENTO AL PADRE 
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
function attHTML(){


    alert("HOLA HTML")
    console.log(event)



}


const $eventoSemantico = document.getElementById("evento-semantico");
//VARIABLE.onclick = funcion --> sin parentesis
$eventoSemantico.onclick = attHTML;

// LA FUNCIONES PUEDEN SER DECLARA O SER ANONIMAL
//! CADA EVENTE SEMANTICO SOLO SE PUEDE PONER UNA FUNCION A FUNCIONAR


// * el parametro es e --> evento 
$eventoSemantico.onclick = function(e){

   alert("Hola manejador de eventos semantico")
    console.log(e)
    console.log(event)

}


//? EVENTO MULTIPT 

const $eventoMultiple = document.getElementById("evento-multiple");




//! EVENTO, FUNCION EVENTO

//REALIZA VARIAS FUNCIOENES SIN QUE SE SOBREESCRIBAN

$eventoMultiple.addEventListener("click", attHTML)
$eventoMultiple.addEventListener("click", (e) => {
    alert("Manejador de eventos multiple")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(event)
})
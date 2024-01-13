/*
 * 
 *
 * */ 

//TRAE LAS DIVS QUE ESTAN DENTRO DEL DIV DE LA CLASE FLUJO
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
      $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
            //SE EFECTUA DE ACUERDO del orden que esta osea
            // DEL INTERNO AL EXTERNO
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    
    //Stoppreopagation
    e.stopPropagation()
}


console.log($divsEventos);


// PARTE DE STOP Y PREVENDEFAULT







$divsEventos.forEach((div) => {
    //AÑADE UN EVENTO A CADA DIV
    // TRUE es del externo al interno (FASE CAPTURA)
    //? div.addEventListener("click", flujoEventos, true);
    // FALSE PARA el interno al externo (FASE BURBUJA)
    //div.addEventListener("click", flujoEventos, false;
    

    //div.addEventListener('click', flujoEventos, {

        //capture: false, //BURBUJA
        //capture: true, //CAPTURA
        //once: true //SOLO SE EJECUTA UNA VEZ


    //})

    div.addEventListener("click", flujoEventos); 
})

alert($linkEventos);
$linkEventos.addEventListener("click", (e) => {

  alert("HOLA SOY ALEX")
  e.preventDefault()
  e.stopPropagation()
})

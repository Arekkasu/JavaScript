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
    
    //EL stopPropgation no es necesario
}


document.addEventListener("click", (e) => {

  console.log(`click`, e.target)

  if (e.target.matches(".eventos-flujo div")){
    flujoEventos(e)

  }

  if (e.target.matches(".eventos-flujo a")){

    alert("HOLA SOY ALEX")
    e.preventDefault()
  }
})


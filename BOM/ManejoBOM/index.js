//! MANEJO DEL DOM

window.alert("ESTO ES UNA ALERTA");

window.confirm("ESTO ES DE CONFIRMACION");

window.prompt("ESTO ES UN INPUT DE BOM");

// ESTO NO ES NECEASRIO PONERLE SIEMPRE PONERLE WINDOW

const $open_ventana = document.getElementById("abrir-ventana"),
    $close_ventana = document.getElementById("cerrar-ventana"),
    $print_ventana = document.getElementById("imprimir-ventana");


//MALA PRACTICA ADS en ventanas apartes
//
//

$open_ventana.addEventListener("click", (e) => {

  ventana = window.open("google.com")  
})

$close_ventana.addEventListener("click", (e) => {

  ventana.close()

}
  
)

$print_ventana.addEventListener("click", (e) => {


print()


})



          

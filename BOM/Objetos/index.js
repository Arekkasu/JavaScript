//! MANEJO DEL DOM

//window.alert("ESTO ES UNA ALERTA");

//window.confirm("ESTO ES DE CONFIRMACION");

//window.prompt("ESTO ES UN INPUT DE BOM");

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


console.log("*******OBJETOS URL (location)**********")
console.log(location); // --> Esto es para el OBJETO URL E HISTORIAl
console.log(location.origin); // --> Esto es para el origen de la direccion
console.log(location.protocol); // --> Que porotocolo esta usando https o http
console.log(location.host); // --> Host que usa
console.log(location.hostname); // --> Nombre del dominio
console.log(location.port); // --> que puerto esya usando el servidor
console.log(location.href); // -->  es toda la URL
console.log(location.hash); // --> Modificar parte de la URL que vien despues del simbolo #, para trabajar dentro de enlaces web
console.log(location.search)// --> Pasando valores
console.log(location.pathname); // --> Archivo consultado



console.log("******Obejto History*****")
console.log(history) // --> historial de la navegacion del web
console.log(history.length) //--> la cantidad de veces que puede retroceder o volver a una pagina

//History.back(n) --> retroceder 
// history.forward(n) --> pagina hacia adelante
//history.go(n) --> esto hace que n positivos haciaadleante y negativos hacia atras
//
//
//
console.log("*********Objeto Navigator***********")

//<Es un objeto bastante complejo con un monton d apis y objetos , da propiedades como el lenguaje , 
//la plataforma , el sistema operativo , ahora vamos a ver las propiedades del navigator.
//

console.log(navigator.connection) //informacion si estan conectaciod e informacion del a conexion
console.log(navigator.geolocation)//api de google que muestra la ubicacion
console.log(navigator.mediaDevices)// indica  que hardwares hay presentes
console.log(navigator.mimeTypes)
console.log(navigator.onLine) // si esta en linea
console.log(navigator.serviceWorker) //api para sotio web sea instalable
console.log(navigator.storage) //api de almacenamiento
console.log(navigator.usb) //detecta usb
console.log(navigator.userAgent) //informacion conetada de la plataforma de la aplicacion
























console.log(window.innerWidth) // se obtiene el valor del ventanta 
console.log(window.innerHeight) // pero sin contar otros objetos
console.log(window.outerWidth) // se obtiene el valro de la ventanta
console.log(window.outerHeight) // pero cuenta los objetos que hay laredor como la barra de herramientas de web

window.addEventListener("resize", (e) => {
  console.clear()
  console.log("***Listener de window****")

console.log(window.innerWidth) // se obtiene el valor del ventanta 
console.log(window.innerHeight) // pero sin contar otros objetos
console.log(window.outerWidth) // se obtiene el valro de la ventanta
console.log(window.outerHeight) // pero cuenta los objetos que hay laredor como la barra de herramientas de web






})


window.addEventListener("scroll", (e) => {
  console.clear()
  console.log("***Listener de scroll****")
  console.log(window.scrollY) //ESTO SE DEFINE EN PIXELES Y ES
  console.log(window.scrollX) // QUE TAN ALEJADO ESTA DEL MARGIN 0 del scroll
})


window.addEventListener("load", (e) => {

  console.clear()
  console.log("**Listener Load**")
  //Esto detectara la poscion de la ventana segun
  //el monitor que este
  //osea  de terminara en que pixeles de la pantalla estara
  //la ventana del navegador

  console.log(window.screenY);
  console.log(window.screenX)
  
})



document.addEventListener("DOMContentLoaded", (e) =>{})

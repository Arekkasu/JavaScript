// METODOS ANTIGUOS QUE SE USABAN

//? DEVOLVERA TODAS LA ETIQUETAS QUE HAY QUE SEA LI
console.log(document.getElementsByTagName('li'))

//! DEVOLVORE LOS ELEMENTOS QUE TENGAN LA CLASE
console.log(document.getElementsByClassName('li'))

//? DEVOLVERA LOS LA ETIQUETA QUE TENGA EL NAME (en etiqueta como formulario)
console.log(document.getElementsByName('nombre'))



//! SELECCION DE ID

console.log(document.getElementById('menu'))

//TODO El escoger elementos se usa ahora con querySelector

                //! SELECCION DEL DOM PERO DEBE REFERENCIAS
                //! QUE ES SI ES CLASE O ID
                //! Y ESTE ES ALGO MAS LENTO QUE EL ANTIGUO
                //! QUERY SELECTOR SOLO DEVUELVE EL PRIMERO
console.log(document.querySelector("a"))

console.log(document.querySelectorAll("a")) //! DEVUELVE TODOS
//TODO Tambien eso trae un array de los elementos que hay
//TODO TAmbien puede traer Hijos por decirlo asi

//SELECCIONAR NAME
console.log(document.querySelectorAll('input[name="nombre"]'))

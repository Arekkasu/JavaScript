// EVENTOS CON PARAMETROS

function saludar(nombre = "Desconocido"){

    alert('Hola ' + nombre);

}


const $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-delete");
//la arrow funciton tiene los parametros dentro de la arrow funciton se ponen los parametros
$eventoMultiple.addEventListener("click", () => {
    saludar()
    saludar("d")
    saludar("sss")    
    saludar("red")

});



const removerEvento = (e) => {
    alert(`removiendo el evento de tipo ${e.type} al elemento ${e.target}`)
    console.log(e)

    //DA ERROR PORQUE ES ANONIMA
    //! $eventoRemover.removeEventListener("dblclick", )

    $eventoRemover.removeEventListener("dblclick", removerEvento)
    //VALOR HTML
    $eventoRemover.disabled = true;
}
//ELIMINAR EVENTOS DE UN ELEMENTO

$eventoRemover.addEventListener("dblclick", removerEvento)
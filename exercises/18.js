//19) PRograma una funcion que valdie un texto se a un nombre valido


function validarNombre (nombre = "") {

    if (!nombre) return console.warn("No ingresaste un nombre")

    if (typeof nombre !== "string") return console.error(`El valor ${nombre} inbresado, no es una cadena de texto`)

    let expReg = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/g.test(nombre);

    return (expReg)
    ? console.info(`"${nombre}, es vlido"`)
    : console.warn(`${nombre}, no es valido`)


}
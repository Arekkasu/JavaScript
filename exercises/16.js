function CalcularAnios (fecha = undefined) {

    if (fecha === undefined) return console.warn("No ingresaste la fecha");

    if (!(fecha instanceof Date)) return console.error(`El valor ingresado no es valido`);


    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosEnMS = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosEnMS) === -1)
    ? console.info(`Faltan ${Math.abs(aniosEnMS)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosEnMS) === 1)
    ? console.info(`Han pasado ${aniosEnMS} años, desde ${fecha.getFullYear()}.`)
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)






}

console.log(CalcularAnios(new Date(1984,4,23)))
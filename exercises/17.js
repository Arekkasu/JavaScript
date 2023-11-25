//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.
//miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


function vocales_consonantes (string) {

    if (!string || typeof string !== "string") return "ingresa un texto valido";

    let regExpVoc = /[ec]/g                ///[aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ]/g
    let regExpCon = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g

    let numero_vocales = string.match(regExpVoc) === null ? 0 : string.match(regExpVoc)

    let numero_consonantes = string.match(regExpCon) === null? 0: string.match(regExpCon).length
    
    return console.info(
        string,
        numero_vocales,
        numero_consonantes
    
    
    )
    }




vocales_consonantes("lectura")
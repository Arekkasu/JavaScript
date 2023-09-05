//? 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


let numero_aleatorio =  () => {
    

    let rango = (600-501)+1

    return Math.floor(Math.random() * (rango) + 501)

}


console.log(numero_aleatorio())
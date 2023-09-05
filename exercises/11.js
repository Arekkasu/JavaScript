function factorial (number) {


    if ( isNaN(number) || Math.sign(number) === -1 || number === 0) {

        return "El dato ingresado no es valido"

    }

    if (number == 1) {


        return number


    }

    let factorial = 1
    
    for (let i = 1; i <= number; i++) {

        factorial = factorial*i

    }


    return factorial


}


console.log(factorial(-5465461))
// FUNCION DE DECIMAL A BINARIO Y VICEVERSA


function decimalToBinary(num,base) {

    if (base == 2) {

        return parseInt(num, base)
    }

    if (base == 10) {

        return num.toString(2)

    }


}

console.log(decimalToBinary(10,10))   
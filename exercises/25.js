function delete_repeat (list_number) {

    if (!(list_number instanceof Array)) return "El valor enviado no es un Array";

    if (list_number.length == 1 ) return `Tu promedio es ${parseInt(list_number[0])}`;

    suma = 0

    total = list_number.length
    
    for (i of list_number){

        suma += i
    }
    
    promedio = (suma/total).toFixed(2)

    return promedio
}


console.log(delete_repeat([2,5]))
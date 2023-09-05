function eliminarPatron(texto, patron) {

    // Utilizar una expresión regular con el patrón y la bandera 'g' (global) para eliminar todas las ocurrencias
    const regex = new RegExp(patron, 'gi');
    return texto.replace(regex, '');
}

// Ejemplo de uso:
const resultado = eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.log(resultado); // Salida: "1, 2, 3, 4 y 5"

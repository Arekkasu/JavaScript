// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


function Celsius_Fahrenheint (grados, unidad) {

    if (!unidad || isNaN(grados)) return "Datos enviados no son validos";


    if (unidad.toUpperCase == "F") {
        grados = parseInt(grados)
        
        let Celsius = (grados - 32) * (5/9)

        return `${grados}°${unidad} a grados es ${Celsius}°C` 
        
    }
    
    
    if (unidad.toUpperCase() == "C") {

        grados = parseInt(grados)
        
        let Fahrenheit = (grados * (5/9)) + 32

        return `${grados}°${unidad} a grados es ${Fahrenheit}°F` 
        

    }

    
}


console.log(Celsius_Fahrenheint(0, "C"))
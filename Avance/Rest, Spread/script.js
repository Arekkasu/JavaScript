
  //OBJETO ANIDADOS Y LISTSAS ANIDADAS

  let arr1 = [1, 2, [5, 7] , 4]

  let arr2 = [5, 6, 7, 8]
  
  let arr3 = [...arr1, ...arr2]
  
  
  //Unir objetos
  
  const persona = {
    nombre: 'pepe',
    edad: 15,
  }
  
  const fisico = {
    altura: '180cm',
    color_cabello: 'claro',
    discapacidades: {
      ciego: true,
    }
  }
  
  const usuario = {
    ...persona,
    ...fisico
  }
  
  usuario.discapacidades.ciego = false
  
  fisico.discapacidades
  
  
  
  //REST
  
  const [one, two, ...others] = arr1
          
         /*one, two, ...other
             1    ,   2 , [5, 7] , 4 */

//Funcion Rest

function sumar(a,b,c){
    let resultado = a+b;
    
    c.forEach(function(n){
        resultado += n
    })

}
    //a, b,   c
sumar(1, 2, 3,4, 5)
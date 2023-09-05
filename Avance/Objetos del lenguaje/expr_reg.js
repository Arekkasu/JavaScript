//Todo  EXPRESIONES REGULARES

//? Es una secuencia de caracteres  que forman
//? un patron de busqueda, se utiliza para aquellas
//? donde se requiere un dato con cualiadades espcificas
//? y comprobar si las cumple


let cadena = "Lorem ipsum dolorem sit amet, consectetur adipiscing elit. Ut malesuada non diam ut mattis. \
 Fusce vitae mattis lacus 4763. Sed quis ornare mi, sed eleifend elit. Donec neque sapien, scelerisque nec massa et, \
 commodo maximus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate lacus vel ornare rhoncus. \
 Vivamus justo diam, suscipit sit amet elit mollis, dapibus imperdiet leo. Maecenas gravida dictum diam.";

// ----------- BANDERAS ------

//! PARA QUE RECORRA TODO SE USA LA BANDERA QUE ES G
//! PARA QUE IGNORE MAYUS Y MINUS SE USA LA BANDERA QUE ES I
// ---------------------------


let expReg = new RegExp("lorem", "ig") 

//* OTRA FORMA DE HACERLO

// ESTABLECER RANGOS de encontrar la palabra
// {n,n} que se repeita n a n veces, o {n} debe repetirse si o si n veces
let expReg2 = /lorem{1,3}/ig



console.log(expReg.test(cadena)) //TRUE O FALSE CONDICION
console.log(expReg.exec(cadena)) // GENERA UN OBJETO CON LOS DATOS

console.log("\n\n")

console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))
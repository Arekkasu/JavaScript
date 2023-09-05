
//? CUANDO ES ALGO DE MANERA DEFAULT, 
//! SOLO TIENE QUE HABER UN DEFAULT NOMAS

import saludar, {Saludar,PI, usuario} from "./constans.js";
import {aritmetica} from "./aritmetica.js"
console.log(PI, usuario)

console.log(aritmetica.sumar(33,33));

saludar();
let saludo = new Saludar();
saludo;
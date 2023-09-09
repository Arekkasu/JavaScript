/* Tienen carencias, no se puede iterar en ellas no son 
iterables, tampoco se pueden borrar todos los elementos (usar 
clear) solo en uno en uno ni se puede verficiar su tamano */

// WEEKSETS

console.log(` no se puede hacer esto
const ws = new WeakSet([444,31,31,false])`)

const ws = new WeakSet();
let valor1 = {'valor1':33}
let valor2 = {'valor2':43}
let valor3 = {'valor3':44}
ws.add = (valor1)
ws.add = (valor2)
ws.add = (valor3)

console.log(ws)

let hola = setInterval( () => console.log(ws), 1000)

setTimeout(() => {
	console.log("AHORA SON NULL")
	valor1 = null;
	valor2 = null;
	valor3 = null;

}, 5000)

let adios = setInterval(() => console.log(`Depende del navegador si lo borra`), 10000)
setTimeout(() => {
clearInterval(hola)
clearInterval(adios)
}, 10000)

//Weakmaps

console.log('ESTOS SON WEAKMAPS')

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2, 2)
wm.set(llave3, 3)
console.log(wm);

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
   llave1 = null;
   llave2 = null;
   llave3 = null;
 }, 5000); 



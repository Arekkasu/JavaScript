export let PI = Math.PI;

export let usuario = "Alex";


/**
NO SE PUEDE USAR DEFAULT En UNA VARIABLE
 */
//? export default const password = 1234;

const passw = 456
//* forma correcta

//TOdo export default passw


const hello = () => console.log("HOLA")

//! DEFAULT 

export default function saludar () {
    console.log("HOLA")
};

// COMO HACER CON UNA CLASE

export class Saludar {
    constructor() {
        console.log("HOLA MUNDO")
    }
}
//Objeto en JS

const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
      twitter: "@jonmircha",
      email: "jonmircha@gmail.com"
    },
    nulo: null
  }

//METODOS DE JSON

//JSON.PARSE() --> ESTO HARA QUE JS VALIDE EL VALOR DE LA PROPIEDAD DEL JSON
//JSON.STRINGFY

console.log(JSON.parse("{}"), "el tipo de este valor usando parse es", typeof JSON.parse("{}"))

// EN JSON UNDEFINED NO ES VALIDO DARA ERROR


//EL STRINGFY LO QUE HACE ES PASARLO COMO UNA CADENA DE TEXTO, TAMBIEN SE USA PARA ENVIARLO A UN JSON

console.log(JSON.stringify({}), "el tipo de este valor usando stringfy es", typeof JSON.stringify({}))


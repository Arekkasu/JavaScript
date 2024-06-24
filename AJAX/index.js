//FORMACION ANTIGUA XMLHttpRequest
(() => {
  //INSTANCIA
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //SE REQUIERE INSTANCIA Y UN EVENTO

  //READYSTATE CHANGE --> INICIA CON CUALQUIER ACCION QUE SUCEDA
  xhr.addEventListener("readystatechange", () => {
    //Decir que xhr cuando tenga un propiedad disnta de 4 hazme otro procedimiento
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exit");
      let json = JSON.parse(xhr.responseText);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.id}: ${el.title}: ${el.completed}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      const $li = document.createElement("li");
      $li.innerHTML = `<p>Error en consumir la api</p>`;
      $xhr.appendChild($li);
      console.log("Error");
    }
  });

  //Metodo que hace la comunicacion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      //PONER A TEXTO PLANO
      //res.text()
      //res.json() //---> convertir a propiedad JSON
      //Esto hara que se ejecute el catch
      // esta validacion solo es valida en promesas
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.id} -- ${el.title} -- ${el.completed}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => console.log("se ejecutara no importa el resultado"));
})();

//NOTE: LA MEJOR FORMA PARA EVITAR EL "THEN HELL" se usa ASYNC AWAIT

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  console.log("ASINCORNO");

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos"),
        json = await res.json();

      if (!res.ok)
        throw {
          status: res.status,
          message: res.statusText,
        };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.id} -- ${el.title} -- ${el.completed}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "sucedio un error :)";
      $fetchAsync.innerHTML = `Error ${err.status} ${message}`;
    } finally {
      console.log("FIN");
    }
  }

  getData();
})();

//funcion con axios UNA LIBRERIA :);

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
    
    console.log(res)
    let json = res.data;
    console.log(json)
    json.forEach((el) => {
    const $li = document.createElement("li");
    $li.innerHTML = `${el.id}--${el.title}--${el.completed}`;
    $fragment.appendChild($li)
      console.log(el)
    $axios.appendChild($fragment);
    })})
    .catch((err) => {
      let error = err.message || "Ocurrio un error :("
      $axios.innerHTML = `<p>${err.name}: ${error}</p>`
      console.log(err)
    })
  .finally(() => {
      console.log("Fin de la ejecucion")
    })
})();


//AXIOS CON ASYN AWAIT

(() => {

const $axiosAsync = document.getElementById("axios-async"),
  $fragment = document.createDocumentFragment();

async function getData() {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos"),
      json = await res.data;

    console.log(res, json);

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.id} -- ${el.title} -- ${el.completed}`;
      $fragment.appendChild($li);
    });

    $axiosAsync.appendChild($fragment);
  } catch (err) {
    console.log(err.response);
    let message = err.response.statusText || "Ocurrió un error";
    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
  } finally {
    console.log("Esto se ejecutará independientemente del try... catch");
  }
}

getData();


})()

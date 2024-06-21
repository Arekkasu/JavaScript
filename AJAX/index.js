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
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.id} -- ${el.title} -- ${el.completed}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => console.log("se ejecutara no importa el resultado"));
})();

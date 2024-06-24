const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();
console.log($template);
const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      //funcion si sale bien
      success(json);
    } else {
      let message = xhr.statusText || "OCURRIO UN ERROR";
      error(message);
    }
  });

  xhr.open(method || "GET", url);
  //Nombre de atributo y Valor(contenido, valor)
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.send(JSON.stringify(data));
};

const getAllArmors = () => {
  ajax({
    method: "GET",
    url: "http://localhost:3000/armaduras_adicionales",
    success: (json) => {
      //json {id, nombre, juego, image}

      json.forEach((el) => {
        console.log(el.juego)
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".game").textContent = el.juego;
        $template.querySelector(".image img").srcset = el.image;
                                      //datasets 
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".delete").dataset.id = el.id

        //SIEMPRE SE DEBE HACER EL CLONE DEL TEMPLATE;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (error) => {
      console.log(error);
      $table.insertAdjacentHTML("afterend", `<p>Error: ${error}`);
    },
    data: null,
  });
};

d.addEventListener("DOMContentLoaded", getAllArmors);

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

  //Operador cortocircuto si en caso de no mandar el metodo sea GET
  xhr.open(method || "GET", url);
  //Nombre de atributo y Valor(contenido, valor)
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.send(JSON.stringify(data));
};

const getAllArmors = () => {
  ajax({
    method: "GET",
    url: "http://localhost:3000/armaduras_principales",
    success: (json) => {
      //json {id, nombre, juego, image}

      json.forEach((el) => {
        console.log(el.juego);
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".game").textContent = el.juego;
        $template.querySelector(".image img").srcset = el.image;
        //dataAttribute para añadirlo a la seccion si usar el this
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".edit").dataset.nombre = el.nombre;
        $template.querySelector(".edit").dataset.juego = el.juego;
        $template.querySelector(".edit").dataset.image = el.image;
        $template.querySelector(".delete").dataset.id = el.id;

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

/** NOTE:: COMO HACER UN POST CON AJAX  **/

d.addEventListener("submit", (e) => {
  e.preventDefault();

  //Aqui esta diciendo que si en input oculto no existe o no hay valor
  // en el cmapo oculto id se hara un post
  if (!e.target.id.value) {
    ajax({
      method: "POST",
      url: "http://localhost:3000/armaduras_principales",
      success: (json) => {
        //json {id, nombre, juego, image}
        location.reload();
      }, //Recargar la pagina ,
      error: (err) => {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      },
      data: {
        nombre: e.target.armadura.value,
        juego: e.target.juego.value,
        image: e.target.image.value,
      },
    });
  }
  //aqui se hace el PUT
  else {
    //se realiza la misma peticion ajax pero se agrega en el data
    //el dataAttribute de id

    ajax({
      method: "PUT",
      url: `http://localhost:3000/armaduras_principales/${e.target.id.value}`,
      success: (json) => {
        //json {id, nombre, juego, image}
        location.reload();
      }, //Recargar la pagina ,
      error: (err) => {
        $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      },
      data: {
        nombre: e.target.armadura.value,
        juego: e.target.juego.value,
        image: e.target.image.value,
      },
    });
  }
});

//AQUI SE HACE EL TEMA DE ELIMIONAR Y MANDAR LOS VALORES QUE HAY
//AL EDIT

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Armadura";
    $form.id.value = e.target.dataset.id;
    $form.armadura.value = e.target.dataset.nombre;
    $form.juego.value = e.targetif.dataset.juego;
    $form.image.value = e.target.dataset.image;
  }
  if (e.target.matches(".delete")) {
    ajax({
      method: "DELETE",
      url: `http://localhost:3000/armaduras_principales/${e.target.dataset.id}`,

      success: (json) => {
        //json {id, nombre, juego, image}
        alert("Objeto eliminado");
        location.reload();
      }, //Recargar la pagina ,
      error: (err) => {
        alert("ERROR AL ELIMINAR");
      },
    });
  }
});

const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();
console.log($template);

const getAllArmors = async () => {
  try {
    let res = await fetch("http://localhost:3000/armaduras_principales"),
      json = await res.json();

    console.log(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log("HOLA");
    json.forEach((el) => {
      console.log(el.nombre, el.juego, el.image);
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
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`,
    );
  }
};

d.addEventListener("DOMContentLoaded", getAllArmors);

/** NOTE:: COMO HACER UN POST CON AJAX  **/

d.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Aqui esta diciendo que si en input oculto no existe o no hay valor
  // en el cmapo oculto id se hara un post
  if (!e.target.id.value) {
    try {
      let options = {
        method: "POST",
        // NOTE: IMPORTANTE ESPECIFICAR LOS HEADERS DEL ENVIO OSERA COMO
        // EL TIPO DE DATO
        headers: { "Content-type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          nombre: e.target.armadura.value,
          juego: e.target.juego.value,
          image: e.target.image.value,
        }),
      };

      let res = await fetch(
        "http://localhost:3000/armaduras_principales",
        options,
      ),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`,
      );
    }
    //aqui se hace el PUT
  } else {
    try {
      //se realiza la misma peticion ajax pero se agrega en el data
      //el dataAttribute de id

      let options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          id: e.target.id.value,
          nombre: e.target.armadura.value,
          juego: e.target.juego.value,
          image: e.target.image.value,
        }),
      };

      let res = await fetch(
        `http://localhost:3000/armaduras_principales/${e.target.id.value}`,
        options,
      ),
        json = res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`,
      );
    }
  }
});

//AQUI SE HACE EL TEMA DE ELIMIONAR Y MANDAR LOS VALORES QUE HAY
//AL EDIT

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Armadura";
    $form.id.value = e.target.dataset.id;
    $form.armadura.value = e.target.dataset.nombre;
    $form.juego.value = e.target.dataset.juego;
    $form.image.value = e.target.dataset.image;
  }
  if (e.target.matches(".delete")) {

    try {

      let options = {
        method: "DELETE",
        header: {
          "Content-type": "application/json; charset=utf-8",
        },
      };
      let res = await fetch(`http://localhost:3000/armaduras_principales/${e.target.dataset.id}`, options),
        json = await res.json()
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      alert(`Error ${err.status}: ${message}`);
    }
  }});

const d = document;

const w = window;

export default function responsiveTester(form){

  const $form = d.getElementById(form)
  let tester;

  d.addEventListener("submit", (e) => {
    if(e.target === $form){
      e.preventDefault()

      /*Para acceder*/
      tester = w.open($form.direccion.value, "tester", 
        `innerWidth=${$form.ancho.value},
         innerHeight=${$form.alto.value}`);
    }

  })

  d.addEventListener("click", (e) =>{
    if(e.target === $form.Cerrar){
      tester.close()
      alert("SE SU PONE QUE SE CIERRA")
    }

  })


}

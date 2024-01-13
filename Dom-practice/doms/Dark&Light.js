const d = document;

export default function darkTheme(btn, classDark){

 const $themeBtn = d.querySelector(btn);
 const $selectors = d.querySelectorAll("[data-dark]") // ESLA DATA QUE SE CREO  y al poner los corchetes 
                                                      // Es como decira que todos los elemetnos que tengan ese query
  console.log($themeBtn.textContent)

 const sun = "☀️";
 const moon = "🌙";

  d.addEventListener("click", (e) =>{

  if(e.target.matches(btn)){
    if($themeBtn.textContent === moon){
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun
    }else{
      
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;

    }

  }



  })




}






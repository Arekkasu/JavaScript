import hamburgerMenu from "./doms/hamburguer.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  console.log(e)
  console.log(e.target)
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
})

const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
});
document.addEventListener("keyup", (e)=> {
  console.log(e.key);
  console.log(e.code);

  if(navPerfil.style.display == "block"){
    if(e.code == "Digit1"){
      linkDados.click()
    }
  }
  if(e.code == "Digit1"){
    console.log("Abrir menu secundario")
    navPerfil.style.display = "block" 
  }
 
});


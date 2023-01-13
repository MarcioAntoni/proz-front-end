// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup")
})


// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", (e)=>{
    let valor = e.target.value.trim()
    if(valor.length < 3){
        usernameInput.classList.add("error")
        usernameInput.classList.remove("correct")
        usernameHelper.innerText = "O seu username tem quer possuir no mínimo 3 caracteres"
        usernameHelper.classList.add("visible")
    }else{
        usernameInput.classList.add("correct")
        usernameInput.classList.remove("error")
        usernameHelper.classList.remove("visible")
    }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
        emailInput.classList.remove("error")
    }else{
        emailInput.classList.add("error")
        emailInput.classList.remove("correct")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Email invalida"

    }

})

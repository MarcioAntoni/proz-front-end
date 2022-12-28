let titulo = document.querySelector("h2");

titulo.style.color ="red";
titulo.style.fontSize = "5rem";

let username = document.getElementById("login-usuario");
let errorText = document.querySelector(".errorText");

username.classList.add("error");
errorText.classList.add("visible");
console.log(username);

//segunda iteração.

let senha = document.getElementById("login-senha");
username.classList.remove("error");
errorText[0].classList.remove("visible");
username.classList.add("correct");

console.log("CApitura de elementos via DOM");

const post01 = document.getElementById("post01");
console.log(post01);


const post02 = document.getElementById("post02"); //- post 02
console.log(post02);


const formulario = document.getElementById("formulario"); //- formulario
console.log(formulario);

const sectionPosts = document.getElementById("posts"); //- section com ambos os post
console.log(posts);

const postDatas= document.getElementsByClassName("post-data"); //- datas dos posts
console.log(postDatas);

const textosDosPosts = document.getElementsByClassName("post-texto"); //- textos dos posts
console.log(textosDosPosts);

const listaRedes = document.getElementsByClassName("lista_redes");//- listas com links das redes sociais
console.log(listaRedes);


console.log("Captura de elementos via DOM/CSS.");

linkDoPrimeiroTexto = document.querySelector("#post01 a");//O link dentro do texto do primeiro post
console.log(linkDoPrimeiroTexto);

palavraNegrito = document.querySelector("#post02 .post-texto strong");//- A palavra em negrito dentro do texto do segundo post
console.log(palavraNegrito);

const nomeFormulario = document.querySelector("#formulario #nome");//- O input de nome do formulário
console.log(nomeFormulario);

const listasDeRedes = document.querySelector("footer .lista_redes");// Os links da lista de redes no final da página
console.log(listasDeRedes);

const linksNavegacao = document.querySelectorAll("footer .lista_redes li a");//- Os links da navegação (só os links, não os elementos de lista)
console.log(linksNavegacao);

autorEData = document.querySelectorAll(".post > p");
console.log(autorEData);

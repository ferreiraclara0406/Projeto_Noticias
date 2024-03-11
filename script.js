const botaoAbri = document.querySelector (".header-mobile > button")
const botaofechar = document.querySelector (".header-mobile > nav button")
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click',abrirMenu)
botaoFechar.addEventListener ('click',FecharMenu)    

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
function FecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const pnombre = document.querySelector(".nombre")
const pemail = document.querySelector(".email")
const pcontraseña = document.querySelector(".contraseña")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    pnombre.innerHTML = ""
    pemail.innerHTML = ""
    pcontraseña.innerHTML = ""
    let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (nombre.value.length < 6){
        pnombre.innerHTML = `<p class="nombre">No has escrito un nombre valido</p>`
    }
    if (!validaremail.test(email.value)){
        pemail.innerHTML = `<p class="email">Escribe un mail valido</p>`
    }
    if (password.value.length < 8 || password.value.length > 16){
        pcontraseña.innerHTML = `<p class="contraseña">Escriba una contraseña acorde</p>`
    }
    e.SubmitEvent
})



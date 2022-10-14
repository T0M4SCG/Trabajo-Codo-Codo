const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const advertencias = document.querySelector(".advertencias")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    advertencias.innerHTML = ""
    let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (nombre.value.length < 3){
        advertencias.innerHTML += `<p class="nombre">No has escrito un nombre valido</p>`
        e.preventDefault()
    }
    if (!validaremail.test(email.value)){
        advertencias.innerHTML += `<p class="email">Escribe un mail valido</p>`
        e.preventDefault()
    }
    if (password.value.length < 8 || password.value.length > 30){
        advertencias.innerHTML += `<p class="contraseña">Escriba una contraseña acorde</p>`
        e.preventDefault()
    }
})



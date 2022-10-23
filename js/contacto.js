let $formulario = document.querySelector("#formulario_contacto")
let enviar = document.querySelector("#enviar")

$formulario.addEventListener("submit", event=>{
    event.preventDefault()
    const form = new FormData($formulario)
    enviar.setAttribute("href", `mailto:tidal@hotmail.com?subject=Nombre: ${form.get("name")} Email: ${form.get("email")}&body=${form.get("mensaje")}`)
    enviar.click()
})



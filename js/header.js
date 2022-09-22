let formulario = document.querySelector(".BusquedaCanciones");

let ClaseDelFormulario = document.querySelector(".input");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  if (ClaseDelFormulario.value == "") {
    alert("No escribiste que deseas buscar");
  } else if (ClaseDelFormulario.value.length < 3) {
    alert(
      "Debes escribir mas de 3 caracteres para que podamos realizar la busqueda"
    );
  } else {
    this.submit();
  }
});

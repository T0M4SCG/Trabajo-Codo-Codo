let header = document.querySelector("header")

header.innerHTML = `
<div class="bloqueLogo">
    <a href="./index.html"><img src="./img/logo.jpg" alt="" class="logo"></a>
</div>
<label for="menu" class="nav__label"><i class="fa-solid fa-bars"></i></label>
<input type="checkbox" id="menu" class="nav__input">

<div class="nav__menu">
    <div class="bloqueOpciones">
    <a href="./index.html" class="textoOpciones">HOME</a>
    <a href="./playlist.html" class="textoOpciones">PLAYLIST</a>
    <a href="./generos.html" class="textoOpciones">GENEROS</a>
</div>
<div class="bloque_sesiones">
    <a href="./Formulario.html" class="user"><i class="fa-solid fa-user"></i></a>
</div>
    <div class="bloque_busqueda linea">
    <form action="./resultado de busqueda.html" method="get" class="BusquedaCanciones">
        <button type="submit" class="boton_search">Enviar</button>
        <input class="input search" type="text" id="cancion" name="cancion" value="" placeholder=" ">
        <label class="Lupita" for="cancion"><i class="fa-solid fa-magnifying-glass"></i></label>
    </form>
</div>
</div>
`


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

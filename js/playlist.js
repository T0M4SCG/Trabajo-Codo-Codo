/*Obtenemos la información del local storage*/
let recuperoStorage = localStorage.getItem("favoritos");
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);
/*Capturamos el elemento al que se agregara el article*/
let section = document.querySelector(".lista");
let personajesFavoritos = "";
/*Se hace un condicional que determina si favoritos está vacío o no*/
if (favoritos == null || favoritos.length == 0) {
  /*Si favoritos está vacío se mostrará un texto que diga que la playlist está vacía*/
  section.innerHTML = "<p>No hay favoritos actualmente</p>";
} else {
  /*En caso que no lo esté se ejecuta un bucle para mostrar los elementos presentes en favoritos*/
  console.log(favoritos);
  for (let i = 0; i < favoritos.length; i++) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (cancion) {
        console.log(cancion);
        let contenedor4 = document.querySelector("#tutiodos");
        contenedor4.innerHTML += `<article class="articlecanc">
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${cancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      <h4>${cancion.title}</h4>
      <p>${cancion.artist.name}</p>
      </article>`;
      });
  }
}

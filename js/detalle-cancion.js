let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get("id");
console.log(id);
let urluno = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

let contenedor4 = document.querySelector("#tutiodos");
if (id !== null) {
  fetch(urluno)
    .then(function (response) {
      return response.json();
    })
    .then(function (cancion) {
      console.log(cancion);
      contenedor4.innerHTML += `<article class="articlecanc">
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${cancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      <h2>${cancion.title}</h2>
      <h3><a href="./detalle-artistas.html?id=${cancion.artist.id}">${cancion.artist.name}</a></h3>
      <h4><a href="./detalle-album.html?id=${cancion.album.id}">${cancion.album.title}</a></h4>
      <img src="${cancion.album.cover_small}" alt="" class="imgcancion">
      <a href="" class="fav" id="fav">Agregar a la playlist</a>
      </article>`;
    })
    .then(function () {
      let favoritos = [];

      let recuperoStorage = localStorage.getItem("favoritos");

      if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
      }

      let fav = document.getElementById("fav");
      console.log(fav);

      if (favoritos.includes(id)) {
        fav.innerText = "Quitar de favoritos";
      }

      fav.addEventListener("click", function (e) {
        e.preventDefault();
        if (favoritos.includes(id)) {
          let indice = favoritos.indexOf(id);
          favoritos.splice(indice, 1);
          fav.innerText = "Agregar a favoritos";
        } else {
          favoritos.push(id);
          fav.innerText = "Quitar de favoritos";
        }
        let favsJSON = JSON.stringify(favoritos);
        localStorage.setItem("favoritos", favsJSON);
      });
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
} else {
  window.location.href = "index.html";
}

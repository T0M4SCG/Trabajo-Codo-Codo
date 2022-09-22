let qs = location.search;

let qsto = new URLSearchParams(qs);

let id = qsto.get("id");

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;

let main = document.querySelector(".tutio3");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (datos) {
    console.log(datos);

    let pepe = datos.genres.data;
    let tutia = datos.tracks.data;
    main.innerHTML = `    <div class="Div-Titulo-Detalle-Album"><h1>Detalle del Album: ${datos.title}</h1></div>
<div class="Logo-Duketo div">
    <img class="duki-tranquilo" src="${datos.cover_big}" alt="Imagen del Duketo">
</div>

<article class="main-detalle-album">

<div id="div-detalle-album"><h2 class="h2-detalle">Artista: <a href="./detalle-artistas.html?id=${datos.artist.id}">${datos.artist.name}</a></h2></div>

<div class="imagen-duki"><img class="duki-tranquilo" src="${datos.artist.picture_medium}" alt="Duketo atr"></div>

<div id="div-detalle-album"><h2 class="h2-detalle messi">Genero: </h2></div>

<div id="div-detalle-album"><h2 class="h2-detalle">Fecha de Publicación: ${datos.release_date}</h2></div>

<div id="div-detalle-album"><h2 class="h2-detalle">Canciones que componen este disco:</h2></div>

<div>
    <ol class="h2-detalle ol D10S">
    </ol>
</div>
</article>
`;
    for (let i = 0; i < pepe.length; i++) {
      document.querySelector(".messi").innerText += " " + pepe[i].name + " ";
    }
    for (let i = 0; i < tutia.length; i++) {
      document.querySelector(
        ".D10S"
      ).innerHTML += `<li><a href="./detalle-cancion.html?id=${tutia[i].id}">${tutia[i].title}</a></li>`;
    }
  });

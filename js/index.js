let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart";

let contenedor = document.querySelector("#Div1");

let contenedor2 = document.querySelector(".section");

let contenedor3 = document.querySelector(".section2");

let contenedor4 = document.querySelector("#section3");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (datos) {
    console.log(datos);
    let albumes = datos.albums.data;
    let artistas = datos.artists.data;
    let canciones = datos.tracks.data;
    for (let i = 0; i < 5; i++) {
      contenedor.innerHTML += `
        <article class="articlecanc">
        <div class="algo"><a href="./detalle-album.html?id=${albumes[i].id}"> <img src="${albumes[i].cover}" alt="" class="algo image"></a></div>
        <div class="div_article"><a href="./detalle-album.html?id=${albumes[i].id}"><h4>${albumes[i].title}</h4></a>
        <a href="./detalle-album.html?id=${albumes[i].id}"><p>${albumes[i].artist.name}</p></a>
        <a href="./detalle-album.html?id=${albumes[i].id}" class="verMas">Ver más</a></div>
        </article>
    `;
      contenedor2.innerHTML += `            
            <article class="article">
            <div class="shadow"><a href="./detalle-artistas.html?id=${artistas[i].id}"> <img src="${artistas[i].picture_medium}" alt="" class="img shadow"></a></div>
            <a href="./detalle-artistas.html?id=${artistas[i].id}" ><p class="lorem">${artistas[i].name}</p></a>
            <a href="./detalle-artistas.html?id=${artistas[i].id}" class="verMas">Ver Más</a>
            </article>`;

      contenedor4.innerHTML += `           
      <article class="articlecanc">
      <div class="algo"><a href="./detalle-cancion.html?id=${canciones[i].id}"><img src="${canciones[i].album.cover_xl}" alt="" class="algo image"></a></div>
      <div class ="div_article"><a href="./detalle-cancion.html?id=${canciones[i].id}"><h4>${canciones[i].title}</h4></a>
      <a href="./detalle-cancion.html?id=${canciones[i].id}"><p>${canciones[i].artist.name}</p></a>
      <a href="./detalle-cancion.html?id=${canciones[i].id}" class="verMas">Ver más</a></div>
  </article>`;
    }
    for (let i = 5; i < 10; i++) {
      let artistas = datos.artists.data;
      contenedor3.innerHTML += `            
            <article class="article">
            <div class="shadow"><a href="./detalle-artistas.html?id=${artistas[i].id}"> <img src="${artistas[i].picture_medium}" alt="" class="img shadow"></a></div>
            <a href="./detalle-artistas.html?id=${artistas[i].id}" class="canciones"><p class="lorem">${artistas[i].name}</p></a>
            <a href="./detalle-artistas.html?id=${artistas[i].id}" class="verMas">Ver Más</a>
            </article>`;
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

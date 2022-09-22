let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get("id");
console.log(id);
if (id !== null) {
  let urluno = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;

  fetch(urluno)
    .then(function (response) {
      return response.json();
    })
    .then(function (genero) {
      console.log(genero);
      let contenedor4 = document.querySelector("#tutiodos");
      contenedor4.innerHTML += `<article class="articlecanc">
        <img src="${genero.picture_medium}" alt="" class="img">
        <p class="lorem">${genero.name}</p>
        </article>`;
    });
} else {
}

if (id !== null) {
  let urlo = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

  fetch(urlo)
    .then(function (response) {
      return response.json();
    })
    .then(function (artistas) {
      console.log(artistas);
      let contenedor4 = document.querySelector("#tutiotres");
      for (let i = 0; i < 5; i++) {
        contenedor4.innerHTML += `
        <article class="articlecanc">
        <img src="${artistas.data[i].picture_medium}" alt="" class="fotodiscos">
        <h4>${artistas.data[i].name}</h4>
        <a href="./detalle-artistas.html?id=${artistas.data[i].id}" class="verMas">Ver más</a>
    </article>`;
      }
    });
} else {
}

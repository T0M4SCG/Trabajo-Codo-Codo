let Section1 = document.querySelector(".Div1");

let Section2 = document.querySelector(".Div2");

let cosasguardada = location.search;

let objliteral = new URLSearchParams(cosasguardada);

let resultados = objliteral.get("cancion");
console.log(resultados);
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${resultados}`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (datos) {
    let imp = datos.data;

    console.log(imp);
    if (imp.length > 0) {
      Section1.innerHTML = `<h1 id="duki">Resultados de Busqueda para: ${resultados}</h1>`;
      for (let i = 0; i <= imp.length; i++) {
        Section2.innerHTML += `<a class="elgrillo" href="./detalle-cancion.html?id=${imp[i].id}">${imp[i].title}</a>`;
      }
    } else {
      Section1.innerHTML += `<h1 id="duki">No Encontramos Resultados de Busqueda para: ${resultados}</h1>`;
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

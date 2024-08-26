const pelis = require("./pelis.js");

// CODIGO ↡
const peliculas = pelis.mostrarTodasLasPeliculas();

function manejador() {
  const argumento = process.argv[2];
  const sinGuion = argumento.slice(2);
  const segundoArg = process.argv[3];

  if (!segundoArg) {
    console.log("NO HAY SEGUNDO ARGUMENTO");
  } else if (sinGuion == "sort") {
    return pelis.ordenarPelis(peliculas, segundoArg);
  } else if (sinGuion == "search") {
    return pelis.filtrarlasPorSearch(peliculas, segundoArg);
  } else if (sinGuion == "tag") {
    return pelis.filtrarlasPorTag(peliculas, segundoArg);
  }
}

function main() {
  if (process.argv[2]) {
    return manejador();
  } else {
    return peliculas;
  }
}

console.log(main());

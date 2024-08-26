const fs = require("fs");
const exportado = fs.readFileSync(__dirname + "/pelis.json");
const parseadas = JSON.parse(exportado);
exports.peliculas = parseadas;

// CODIGO ↡

function mostrarTodasLasPeliculas() {
  return parseadas;
}
// 👌👌👌👌👌👌

function ordenarPelis(pelis, prop) {
  if (prop == "rating") {
    return pelis.sort((a, b) => b[prop] - a[prop]);
    //MAS ALTO A MAS BAJO
  } else {
    ordenadoPorLetra = pelis.sort((a, b) =>
      a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1
    );
    return ordenadoPorLetra;
  }
}

function filtrarlasPorSearch(pelis, prop) {
  let filtradas = pelis.filter((i) =>
    i.title.toLowerCase().includes(prop.toLowerCase())
  );
  return filtradas;

  // let filtradasPorArgumento = [];
  // for (let i = 0; i < pelis.length; i++) {
  //   const element = pelis[i];
  //   const titulo = element.title;
  //   if (titulo.toLowerCase().includes(prop.toLowerCase())) {
  //     filtradasPorArgumento.push(element);
  //   }
  // }
  // return filtradasPorArgumento;
}

function filtrarlasPorTag(pelis, prop) {
  let filtradasPorTag = pelis.filter((i) =>
    i.tags.includes(prop.toLowerCase())
  );
  return filtradasPorTag;
}

module.exports = {
  mostrarTodasLasPeliculas,
  ordenarPelis,
  filtrarlasPorSearch,
  filtrarlasPorTag,
};

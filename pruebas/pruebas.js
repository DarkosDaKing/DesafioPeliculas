const num = [12, 98, 1212, 2, 1, 54];
const letr = [
  "c",
  "feo",
  "facil",
  "eaaa",
  "aklajsdfdaklm",
  "b",
  "c",
  "xaaa",
  "d",
];
const obj = [
  { nombre: "javier", edad: 12, tags: ["soñador", "sorete"] },
  { nombre: "anastasia", edad: 3, tags: ["amante", "mucama", "cancino"] },
  { nombre: "gabriela", edad: 7, tags: ["rociador", "jazmin", "oloroso"] },
  {
    nombre: "Roberto",
    edad: 56,
    tags: ["cancino", "ductil", "trabajador", "del rojo", "rosado"],
  },
  { nombre: "Eucalipto", edad: 1, tags: ["pelotudo"] },
];

let filtrando = obj.filter((valor) => valor.tags.includes("cancino"));
console.log(filtrando);

// let Numsorteado = num.sort((a, b) => a - b);
// let Numsorteado = num.sort((a, b) => (a < b ? -1 : 1));
// console.log(Numsorteado);

//LETRAS ORDENADAS POR ABECEDARIO (primer letra)
// let letSorteado = letr.sort((a, b) => (a < b ? -1 : 1));
// console.log(letSorteado);

//OBJETO ORDENADO POR NOMBRE
// const objPorNombre = obj.sort((a, b) =>
//   a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
// );
// console.log(objPorNombre);

//OBJETO ORDENADO POR EDAD
// const objPorEdad = obj.sort(
//   (a, b) => a.edad.toLowerCase() - b.edad.toLowerCase()
// );
// console.log(objPorEdad);

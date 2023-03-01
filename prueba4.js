// Crear funcion login que recibe usuario y contrasena, mostrar mensaje.

var nom = "Gonza";
var pass = "gonzalito";
var permisos = "internet";

function login(nom, pass, permisos) {
  var resultado = "puedes pasar";
  if (nom === "Gonza" && pass === "gonzalito") {
    resultado = "puedes pasar";
  } else {
    return "No pasas Karnal";
  }

  if (permisos === "television" || permisos === "internet") {
    resultado = "puedes pasar";
  } else {
    return "No pasas krnal";
  }

  return resultado;
}

console.log(login(nom, pass, permisos));

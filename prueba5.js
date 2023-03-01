// Crear funcion login que recibe usuario y contrasena, mostrar mensaje.

var nom = "Gonza";
var pass = "gonzalito de ";
var permisos = "internet";

function login(nom, pass, permisos) {
  if (nom !== "Gonza" || pass !== "gonzalito") {
    return false;
  }

  if (permisos !== "television" && permisos !== "internet") {
    return false;
  }

  return true;
}

var esUsuarioValido = login(nom, pass, permisos);

if (esUsuarioValido) {
  console.log("Usuario Valido");
} else {
  console.log("No puedes pasar");
}

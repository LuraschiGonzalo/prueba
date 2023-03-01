// Crear funcion login que recibe usuario y contrasena, mostrar mensaje.

/* var nom = "Gonzadds";
var pass = "gonzalito";
var permisos = "internet";

function esLoginExitoso(nom, pass, permisos) {
  return ((nom === "Gonza" && pass === "gonzalito") && (permisos === "television" || permisos === "internet"));
}

var esUsuarioValido = esLoginExitoso(nom, pass, permisos);

if (esUsuarioValido) {
  console.log("Usuario Valido");
} else {
  console.log("No puedes pasar");
}
 */

var nombre = "Gonza";
var array = [23, "Luraschi", true];
var err = [true, "Contrasenia incorrecta"];
//           0       1         2
/*  if (nombre.length === 6) {
  console.log("el length esta bien");
} else {
  console.log("El length esta mal")
} */

// array[1].length === 9 ? console.log("esta bien") : console.log("esta mal");

err[0] ? console.log(err[1]) : false;

err[0] && console.log(array[0]);

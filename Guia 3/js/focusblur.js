
var textoAyuda;

var arregloAyuda = [
 "Ingrese su nombre en este campo de texto",
 "Ingrese su apellido en este campo de texto",
 "Ingrese su dirección de correo en el formato usuario@dominio.com",
 "Ingrese su número de teléfono en el formato 9999-0000",
 "Ingrese una descripción breve en el campo área de texto",
 "Seleccione su profesión en este campo select",
 "Díganos cuál es su país de origen en este campo select",
 "Restablezca el formulario con este botón",
 "Envíe el formulario con este botón",
 ""
 ];

function inic(){
 textoAyuda = document.getElementById("textoAyuda");

 registrarEscuchas(document.getElementById("firstname"), 0);
 registrarEscuchas(document.getElementById("lastname"), 1);
 registrarEscuchas(document.getElementById("email"), 2);
 registrarEscuchas(document.getElementById("phone"), 3);
 registrarEscuchas(document.getElementById("describe"), 4);
 registrarEscuchas(document.getElementById("profesion"), 5);
 registrarEscuchas(document.getElementById("selpais"), 6);
 registrarEscuchas(document.getElementById("resetbtn"), 7);
 registrarEscuchas(document.getElementById("submitbtn"), 8);
}

function registrarEscuchas(objeto, numeroMensaje){

 objeto.addEventListener("focus", function(){
 textoAyuda.style.visibility = "visible";
 textoAyuda.innerHTML = arregloAyuda[numeroMensaje];
 }, false);
 objeto.addEventListener("blur", function(){
 textoAyuda.style.visibility = "hidden";
 textoAyuda.innerHTML = arregloAyuda[9];
 }, false);
}

window.addEventListener("load", inic, false);
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let sujeto = ["un niño", "mi hermano", "se gato", "mi perro"];
let accion = ["comer", "enojado", "aplasto", "roto"];
let momento = [
  "antes de salir",
  "justo después",
  "cuando empecé",
  "mientras comía",
  "mientras cocinaba"
];
function excuseFunction(sujeto, accion, momento) {
  var lengthSujeto = Math.floor(Math.random() * sujeto.length);
  var lengthAccion = Math.floor(Math.random() * accion.length);
  var lengthMomento = Math.floor(Math.random() * momento.length);
  return `${sujeto[lengthSujeto]} ${accion[lengthAccion]} ${momento[lengthMomento]}`;
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseFunction(sujeto, accion, momento);
};

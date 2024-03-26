/*
 
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

function juegoDelAhorcado(palabra) {  

}

const lanzarJuego = document.querySelector("#lanzarJuego");

lanzarJuego.addEventListener("click", () => juegoDelAhorcado("pekora"));


let palabraConstruida ="";
let intentos = 5;
let palabra = [];
var letra = prompt("Di una letra: " + " tienes " + intentos + " aún");
const palabraSecreta = "pekora";

// Recorremos la palabra secreta
for (let i = 0; i < palabraSecreta.length; i++) {
    // Almacenamos las letras de la palabra secreta en el array palabra
    palabra.push(palabraSecreta[i]);
    if (palabra){
        // Pintamos un guion cuando se encuentre algo dentro del array
        palabraConstruida += "_ ";
    }
 
}

console.log(letra);
console.log(palabra);
console.log(palabraConstruida);

var pintar = document.querySelector("#palabra");
pintar.innerHTML = palabraConstruida;


/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/
'use strict'

var ruta = "/home/"

function simplificarRuta(ruta){

    // Creamos una variable para almacenar las partes de una ruta
    let pila = [];

    // Dividimos la ruta en diferentes partes utilizando un separador
    var partes = ruta.split('/'); // Usamos split para dividir el string cuando encuentre un "/"

    // Recorremos cada parte
    for(const parte of partes){
        // Si la parte es .. quito el ultimo elemento
        if(parte === ".."){
            pila.pop(); // Usamos el elemento pop porque lo que queremos es eliminar el elemento anterior
        }
        // Si es un "." o " " no lo agrego a mi pila pero si es una palabra o cualquier otra cosa valida si la agrego
        else if(parte !== "." && parte !== ""){
            pila.push(parte);
        }
    }

    // Unimos todos los elementos del array en una cadena de texto que sea valida para un sistema Unix
    return '/' + pila.join("/");


}

console.log(simplificarRuta("/home/"));             // Salida: /home
console.log(simplificarRuta("/x/./y/../../z/"));    // Salida: /z
console.log(simplificarRuta("/../"));               // Salida: /
console.log(simplificarRuta("/home//pruebas/"));    // Salida: /home/pruebas
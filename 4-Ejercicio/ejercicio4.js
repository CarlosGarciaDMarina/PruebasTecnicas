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
// Creamos la variable donde vamos a seleccionar la id del boton que esta en el HTML
const lanzarJuego = document.querySelector("#lanzarJuego");
// Le decimos que, cuando se haga click en el boton, se inicie el juego del ahorcado
lanzarJuego.addEventListener("click", () => juegoDelAhorcado("pekoraeslamejor"));

function juegoDelAhorcado(palabraSecreta) {  
    // Crear variable palabra oculta con guiones bajos
    let palabraOculta ="_".repeat(palabraSecreta.length);
    // Variable con el numero de intentos
    let intentos = 5;

    // Bucle para pedir letras, si quedan intentos y no se han descubierto todas las letras, se ejecutara
    while((intentos > 0) && (palabraOculta !== palabraSecreta)){
        // Hacemos un prompt
        let letra = prompt("Dame una letra y adivina la palabra secreta:");

        // Comprobamos si la letra esta en la palabra para actualizar la palabraOculta. El método .includes busca dentro de la palabraSecreta la letra que le pasamos
        if(palabraSecreta.includes(letra)){
            // Actualizamos la variable palabraOculta y metemos en la posicion correcta la letra
            // Recorremos todas las letras de la palabra secreta
            for(let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++){

                // Como palabraOculta y palabraSecreta tienen la misma longitud, solo tenemos que buscar el indice de la letra que hemos acertado 
                if(letra === palabraSecreta[contadorLetras]){
                    // Si la letra es igual al indice que le pasamos, convertimos la palabra en un array para actualizar ese índice
                    let palabraOcultaArray = Array.from(palabraOculta)

                    // Seleccionamos la posicion del indice y cambiamos el guion bajo "_" por la letra que hemos introducido en el prompt
                    palabraOcultaArray[contadorLetras] = letra;

                    // Unimos el array en un nuevo string sin ningun tipo de separaciones y actualizamos la palabra habiendo descubierto una de las letras
                    palabraOculta = palabraOcultaArray.join("");
                }
            }// End for
        }else{
            // Si no has acertado resta un intento
            intentos --;
        }
        // Mostramos el estado actual de la palabra oculta
        console.log(`La palabra es: ${palabraOculta}`);

        // Mostrar cuantos intentos quedan
        console.log(`Te queda un total de ${intentos} intentos.`);
        
    }// End While

    //Mostrar msj ed victoria o de derrota
    if(palabraOculta == palabraSecreta){
        console.log(`Felicidades, has ganado la partida, la palabra era: ${palabraSecreta}`);
    } else {
        console.log(`Lo siento, has perdido la partida, otra vez será. La palabra era: ${palabraSecreta}`)
    }
}
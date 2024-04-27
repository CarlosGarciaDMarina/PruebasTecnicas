/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/
var array = [2, 13, 6, 15];

// Funcion que suma los numeros pares que haya dentro de un array 
function sumarPares(array) {
    // Definimos las variables que vamos a necesitar
    var resultado = 0;

    // creamos un bucle que lea el array al completo
    for (let i = 0; i < array.length; i++) {

        // Creamos un condicional que, cuando un elemento del array sea par, se sume a la variable resultado
        if((array[i] % 2) == 0){
            resultado += array[i];
        }
    }
    // Devolvemos el resultado final
    return resultado;   
}

// Mostramos el resultado
console.log(`Resultado: ${sumarPares(array)}`);
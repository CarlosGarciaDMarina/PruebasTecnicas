/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(array){
    // Lo primero es ordenar el array de menor a mayor por si los números están desordenados
    array.sort((menor, mayor) => menor - mayor);

    // Inicializamos las variables que necesitamos
    let permutados = [];

    // Recorremos el array 
    for (let i = 0; i < array.length; i++) {
        // Almacenamos el array en una constante
        const numeros_i = array[i];
        let numero_que_falta = array[i]+1; 

        // Establecemos la condicion
        if (numeros_i !== numero_que_falta) {
            // Si el numero actual es distinto que el siguiente lo añadimos al array
            permutados.push(numero_que_falta);
        }
    }
    // Sacamos el último elemento del array
    permutados.pop();

    //Devolvemos el array con el número faltante más grande
    return permutados[permutados.length - 1];
}

console.log("Array completo : " + permutacion([1, 2, 3, 4, 5]));
console.log("Array incompleto : " + permutacion([1, 3, 5]));
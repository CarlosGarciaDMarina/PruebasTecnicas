/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/
// Función que transforma un numero entero a romano
function enteroARomano(numero) {
    // Creamos un diccionario
    let numerosRomanos = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };

    // Creamos una variable para almacenar el resultado
    let resultado = '';

    /* Object.keys() es un método en JavaScript que devuelve un array de las propiedades enumerables de un objeto, solo devuelve las claves de las propiedades enumerables del objeto */
    // Iteramos sobre las claves del diccionario en orden descendente
    Object.keys(numerosRomanos).reverse().forEach(function(romano) {
        // Mientras el numero romano sea mayor o igual al valor actual seguira en el bucle
        while (numero >= numerosRomanos[romano]) {
            // Agregamos el valor romano al resultado y restamos el valor al numero entero
            resultado += romano;
            numero -= numerosRomanos[romano];
        }
    });
    // Devolvemos el resultado
    return resultado;
}
//Mostramos el resultado por pantalla
console.log(enteroARomano(765));
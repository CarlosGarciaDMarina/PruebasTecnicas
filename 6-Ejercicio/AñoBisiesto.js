/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
*/
// Año que vamos a pasar a la funcion
var año = 2023;

// Esta función te muestra los años bisiestos que habrá en los próximos 30 años
function añoBisiesto(año){
    // Creamos la variable para el año límite que tenemos que mostrar
    var añoLimite = año + 30;

    // Hacemos un for que recorra desde el año que le pasamos hasta el año límite
    for (let i = año; i < añoLimite; i++) {
        // Si el año es multiplo de 4 es que es un año bisiesto asique lo mostramos por pantalla
        if (i % 4 == 0) {
            // Imprimimos por pantalla
            console.log(i);
        }
    }
}

// Llamamos a la funcion
añoBisiesto(2023);
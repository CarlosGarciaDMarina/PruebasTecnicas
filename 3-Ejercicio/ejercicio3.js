/*
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

'use strict'

//Funcion que recibe 2 fechas y te da la diferencia de dias entre ambas
function diferenciaDeDias(fecha1, fecha2){

    // Le damos el formato a las fechas ( La interrogacion es una ternaria y sirve para saber si una variable es de un tipo, los dos puntos es por si no lo es que lo transforme)
    fecha1 = fecha1 instanceof Date ? fecha1 :new Date(fecha1);
    fecha2 = fecha2 instanceof Date ? fecha2 :new Date(fecha2);

    // Obtenemos la diferencia en milisegindos entre las dos fechas
    const diferenciaMiliseg = Math.abs(fecha1.getTime() - fecha2.getTime());

    // Ahora dividimos la diferencia de milisegundos que tiene un dia entre el numero de milisegundos que tiene el numero y luego la redondeamos
    const dias = Math.floor(diferenciaMiliseg / (1000 * 60 * 60 * 24));

    // Creamos un condicional para gestionar posibles errores
    if(isNaN(dias)){
        // Si devuelve NaN es porque el formato es incorrecto
        return "El formato de fecha que has introducido es correcto, por favor utiliza un formato correcto (Formato americano)";
    } else {
        // Imprimimos por pantalla
        return "La diferencia son " + dias + " días";
    }
}

// Imprimimos por pantalla
console.log(diferenciaDeDias("Dic, 1", "23-12-24"));
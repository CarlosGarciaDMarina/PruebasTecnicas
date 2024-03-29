/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

function ordenarPorApellidos(personas) {
    // Utilizamos el método sort para ordenar el array
    personas.sort((a, b) => {
        // Dividimos los nombres completos en partes (nombre y apellido) para despues compararlos
        const apellidoA = a.split(" ")[1];
        const apellidoB = b.split(" ")[1];
        // Comparamos los apellidos y devolvemos el resultado de la comparación 
        // localeCompare devuelve un número negativo si la primera cadena (apellidoA) debe ir antes que la segunda (apellidoB), 
        // un número positivo si la primera cadena debe ir después, y 0 si son iguales.
        return apellidoA.localeCompare(apellidoB);
    });

    // Devolvemos el array ordenado
    return personas;
}

// Ejemplo de uso
console.log(ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]));



/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/
"use strict"

// Creamos un array de objetos de superheroes de marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};
// Función para mostrar el nombre de un superheroe
function mostrarInfo(nombre) {
    // Comprobamos si existe el superheroe
    if(nombre in infoSuperheroes){
        // Mostramos el nombre del superheroe
        console.log(`|---------- ${nombre} ----------|`);

        // Accedemos a su informacion dentro del array de objetos
        const informacion = infoSuperheroes[nombre];

        //Imprimimos por pantalla
        console.log(`Nombre real: ${informacion.nombreReal}`);
        console.log(`Poderes: ${informacion.poderes.join(", ")}`);
        console.log(`Equipo: ${informacion.equipo}`);
        console.log(` `);

    } else {
        // En caso de que no exista imprimimos lo siguiente
        console.log(`|---------- ${nombre} ----------|`);
        console.log(`${nombre} no existe en nuestra base de datos.`);
        console.log(` `);

    }
}
// Función para mostrar el nombre de todos los superheroes
const mostrarInformacionSuperheroe = (nombres) => {
    // Primero recorremos los nombres que tengamos
    nombres.forEach(nombre => {

        // Reutilizar la funcion anterior
        mostrarInfo(nombre);

    });
}
// Mostramos la primera función
mostrarInfo("Capitán América");

// Mostramos la segunda función
mostrarInformacionSuperheroe(["Iron Man", "Hulk", "Spider-Man", "Super Man"])
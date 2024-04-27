'''
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
'''

array_a = [1, 2, 3, 4, 5]
array_b = [1, 3, 5]

def permutacion(array):
    # Lo primero que tenemos que hacer es ordenar el array
    array.sort()

    # Inicializamos el array para almacenar los permutados
    permutados = []

    # Recorremos el array
    for i in array:
        numeros_i = i
        numero_que_falta = i+1

        # Establecemos la condicion 
        if numeros_i != numero_que_falta:
            permutados.append(numero_que_falta)
    
    # Sacamos el último elemento del array
    permutados.pop()

    # Devolvemos el array con el número faltante más grande
    return permutados[-1]

print(f"Array completo: {permutacion(array_a)}")
print(f"Array incompleto: {permutacion(array_b)}")
'''
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en inglés.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación.
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones válidas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array.
 
Ejemplos:
sumarPares([2, 13, 6, 15])  # Resultado: 8
'''
# Creamos una lista
array = [2, 13, 6, 15]

# Funcion que suma los numeros pares que hya dentro de una lista
def sumar_pares(array):
    # Definimos las variables que vamos a necesitar
    resultado = 0

    # Creamos un bucle que lea el array al completo
    for i in array:

        # Comprobamos si el elemento es par
        if i % 2 == 0:
            resultado += i

    # Devolvemos el resultado
    return resultado

# Imprimimos por pantalla
print(F"Resultado: {sumar_pares(array)}")
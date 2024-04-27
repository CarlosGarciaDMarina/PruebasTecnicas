'''
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
'''

def anio_bisiesto(anio):

    # Recorremos los años que pide el ejercicio usando el método range que sirve para generar una secuencia de números enteros dentro de un rango especificado.
    for i in range(anio, anio+30):
        # Si el número es multiplo de 4 significa que es bisiesto asique lo mostramos por pantalla
        if i % 4 == 0:
            # Imprimimos
            print(i)
            
# Mostramos el resultado 
anio_bisiesto(2023)
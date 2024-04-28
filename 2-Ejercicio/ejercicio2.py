'''
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
'''
def simplificar_rutas(ruta):
    # Creamos una variable para almacenar las partes de una ruta
    contenedor = []

    # Dividimos la ruta en diferentes partes utilizando un separador
    partes = ruta.split("/") # Usamos split para dividir el string cuando encuentre un "/"

    # Recorremos cada parte
    for parte in partes:
        # Si la parte es .. quita el último elemento
        if parte == "..":
            # Comprobamos si contenedor no está vacio
            if contenedor:
                contenedor.pop() # Usamos el elemento pop porque lo que queremos es eliminar el elemento anterior

        #Si es un "." o " " no lo agrego a mi pila pero si es una palabra o cualquier otra cosa valida si la agrego
        elif parte != "." and parte != "":
            contenedor.append(parte)
    # Unimos todos los elementos del array en una cadena de texto que sea valida para un sistema Unix
    return '/' + '/'.join(contenedor)

print(simplificar_rutas("/home/"));             # Salida: /home
print(simplificar_rutas("/x/./y/../../z/"));    # Salida: /z
print(simplificar_rutas("/../"));               # Salida: /
print(simplificar_rutas("/home//pruebas/"));    # Salida: /home/pruebas
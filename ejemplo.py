generos_aceptados = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,
    'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 
    'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']

nueva_lista = []

for elementos in generos_aceptados:
    if len(elementos) <= 4:
        nueva_lista.append(elementos)


print(nueva_lista)

def menores_a_cuatro(lista):
    if number <= 4:
        return True
    return False


nueva_lista_2 = filter(lambda elemento: elemento <=4, generos_aceptados)

nombre = "Santiago UWU"
cuser = {
    #Clave     #Valor
    'nombre': nombre,
    'Apellido':   'Perez',
    'Edad':        17,
    'Pasatiempos': ['Escuchar Musica', 'Tocar Guitarra', 
                'Jugar Videojuegos', 'Ver anime'],
    'Contact':    {
                'Correo': 'Arek3071@gmail.com',
                'Numero': +5770377746603
                    },

}

print(cuser['nombre'])
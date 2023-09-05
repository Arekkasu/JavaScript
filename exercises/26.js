/* 

! 27) Programa una clase llamada Pelicula.

? La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
TOdo id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
*  - Todos los datos del objeto son obligatorios.
?  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
?     7 restantes números.
?  - Valida que el título no rebase los 100 caracteres.
?  - Valida que el director no rebase los 50 caracteres.
?  - Valida que el año de estreno sea un número entero de 4 dígitos.
?  - Valida que el país o paises sea introducidos en forma de arreglo.
?  - Valida que los géneros sean introducidos en forma de arreglo.
?  - Valida que los géneros introducidos esten dentro de los géneros aceptados.
?  - Crea un método estático que devuelva los géneros aceptados*.
?  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
?  - Crea un método que devuelva toda la ficha técnica de la película.
*  - Apartir de un arreglo con la información de 3 películas genera 3 
*    instancias de la clase de forma automatizada e imprime la ficha técnica 
*    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */





class Pelicula {

    static generos_aceptados = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,
    'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 
    'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']


    constructor(id,title,director,year,country,genre, rating){
        
        if (!id || !title || !director || !year || !country || !genre || !rating){
            throw new Error('Ingresa todos los valores');
        }

        if (!(/ev\d{7}\/\d{4}(-\d)?|(ch|co|ev|nm|tt)\d{7}/.test(id))){
            throw new Error('El id IMDB debe tener 9 caracteres: 2 letras seguidas de 7 números.');
        }

        if (title.length > 100){
            throw new Error('El titulo debe tener como maximo 100 caracteres');
        }

        if (title.director > 50){
            throw new Error('El director debe tener como maximo 50 caracteres');
        }

        if (title.length > 100){
            throw new Error('El titulo debe tener como maximo 100 caracteres');
        }

        if (!/^(?!0000)\d{4}$/.test(year)){
            throw new Error('El anio no valido');
        }

        if (!(country instanceof Array)){
            throw new Error('El pais o paises no es un Array')
        }
                                                        //SE HACE LA NEGACION DEBIDO A QUE  SI ES TRUE
                                                        // LANZARIA ERROR
        if (genre instanceof Array && genre.every(value => !Pelicula.generos_aceptados.includes(value) )){

            throw new Error("Los generos no son de los aceptados")

        }
        
        if ( isNaN(rating) || rating < 0 || rating > 10) {


            throw new Error("La calificacion de la pelicula tiene que ser entre 0 y 10")

        
        }  



        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.rating = parseFloat(rating).toFixed(1);
        



    }

    static llamar_GenerosAceptados(){
        console.log(`Los generos aceprados son los siguientes: ${Pelicula.generos_aceptados.join(",")}`)
    }

    ficha_tecnica(){

        console.info(`Ficha Tecnica:\nTitulo:"${this.title}"\nDirector:"${this.director}"\nYear:"${this.year}"\n\
Pais:"${this.country.join("-")}"\nGeneros:"${this.genre.join(", ")}"\nCalificaion:"${this.rating}"\n`)

    }

}


//Automatizacion

const hola = new Pelicula("tt1234567",2,2,2020,["COLOMBIA"],["Action"],"1")



hola.ficha_tecnica()
const obtenerTodosLosPaises = () => {
    const API_URL = 'https://restcountries.com/v3.1/all';

    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .then(info => {
            info.forEach(pais => {
                console.log(pais.name.common)
            });
        })
}

const buscadorPaises = (query) => {
    const API_URL = `https://restcountries.com/v3.1/name/${query}`

    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .then(info => info.forEach(pais => console.log(pais.name.common)))

}

// obtenerTodosLosPaises()
buscadorPaises('arg')

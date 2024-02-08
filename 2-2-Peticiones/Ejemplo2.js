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
    const contenedor = document.querySelector('#contenedor-resultados')

    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .then(info => info.forEach(pais => {
            // console.log(pais.name.common);

            // Mostrar los elementos en el HTML

            // Crear un elemento tipo párrafo por cada país
            let parrafoPais = document.createElement('p');
            parrafoPais.innerText = pais.name.common;

            // cada párrafo se inserta dentro del div #contenedor-resultados
            contenedor.append(parrafoPais);

            // CHALLENGE: Mostrar por cada país, su nombre y su bandera

        }))

}

// obtenerTodosLosPaises()
// buscadorPaises('arg')

// Añadir evento a nuestro botón Search
let searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    // Obtener texto del input de búsqueda
    let querySearch = document.querySelector('#query').value
    // Mandamos llamar la función buscadorPaises() con el query obtenido de el input
    buscadorPaises(querySearch)
})


const obtenerPaises = () => {
    const API_URL = 'https://restcountries.com/v3.1/all';

    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .then(info => console.log(info.length))
}

obtenerPaises()
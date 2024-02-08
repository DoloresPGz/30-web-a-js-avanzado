const getPersonaje = (id) => {
    // Hacer una petición get al endpoint https://swapi.dev/api/people/6 
    // Y mostrarme el nombre del personaje en la consola

    // Fetch nos retorna una promesa

    // GET
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(data => data.json())
        .then(dataPersonaje => {
            // Validar si encontramos un personaje con el id ingresado
            if(dataPersonaje.name) {
                console.log(dataPersonaje.name)
            } else {
                console.log('404 NOT FOUND')
            }
        })
        .catch(error => console.log(error))
}

getPersonaje(4)

// request
// axios
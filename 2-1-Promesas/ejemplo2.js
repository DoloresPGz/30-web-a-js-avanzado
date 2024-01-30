//Simulación de una solicitud para obtener datos de un usuario
//a un servicio externo

//Paso 1. Declaro la promesa
const userData = (userId) =>{ 
    return new Promise((resolve, reject)=> {
        //Simulamos el tiempo de espera de la búsqueda del usuario en el servicio externo
        setTimeout(() => {
            //Lista de usuarios existentes
            const userList = {
                1: {name: 'Joel', age:22},
                2: {name: 'Ari', age:30},
                3: {name: 'Antonio', age: 31}
            }

            let user = userList[userId] //Solicito el usuario con el id userId
            
            if(user){
                resolve(user)
            }else{
                reject(new Error('Usuario con el id '+ userId +' no fue encontrado'))
            }

        }, 2000);

    })
}

//Paso 2. Ejecutamos nuestra promesa
userData(5)
    .then(
        //La definición de mi callback resolve
        (user) => { console.log("Datos del usuario:" + user.name + ' ' + user.age)}
    )
    .catch(
        //La definición de mi callback reject
        (error) => {console.log(error)}
    )

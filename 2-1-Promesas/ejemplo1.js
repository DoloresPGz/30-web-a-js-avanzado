//DECLARACIÓN de la promesa
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) //Genero un numero aleatorio del 0 al 10

    setTimeout(() => {
        number  > 5
        ? resolve(number) //ejecuto mi callback resolve
        : reject('Menor a 5') //ejecuto mi callback reject
    }, 3000);
} )

//EJECUCIÓN de la promesa
console.log(promise.then(
    //Defino la función (callback) de mi resolve
        (numero) => { console.log("Promesa exitosa:" + numero)}
    ).catch(
    //Defino la función (callback) de mi reject
        (error) => {console.log(error)}
    )
)
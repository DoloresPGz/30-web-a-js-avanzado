//Concatenación de varias promesas

function operacion1(numero) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Proceso 1 cumplido");
            resolve(numero)
        }, 1000);
    })
}

function operacion2(resultado) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Proceso 2 cumplido");
            resolve(resultado + 2)
        }, 2000);
    })
}

function operacion3(resultado) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Proceso 3 cumplido");
            resolve(resultado * 3)
        }, 1500);
    })
}

operacion1(5).then(
    resultado => {
        return operacion2(resultado)
    } 
).then(
    resultado2 => operacion3(resultado2)
).then(
    resultado3 => console.log("El resultado final es: " + resultado3)
)


import APIKEY from "./apikey.js"

const apiURL = `https://crudcrud.com/api/${APIKEY}/users`
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")


//CONSULTA DE LOS USUARIOS
function loadUsuers() {
    //Consultar la API para que me devuelva los usuarios que tengo registrados
    fetch(apiURL)
    .then(response => response.json())
    .then(data => { //Devuelve un arreglo de información de los usuarios que tengo registrados
        data.forEach(user => {
            console.log(user);
        });
    })
}

//ALTA DE USUARIOS
crudForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newUser = {
        name: nameInput.value,
        email: emailInput.value
    }

    fetch(apiURL,{
        method: "POST",
        body:JSON.stringify(
            //Aquí va la información que queremos dar de alta en formato JSON
            newUser
        ),
        headers:{
            "Content-type" : "application/json"
        }
    })
    .then(() => {
        nameInput.value = ""
        emailInput.value = ""
        loadUsuers()
    })
})

//EDICIÓN DE USUARIOS

//BAJA DE USUARIOS



document.addEventListener("DOMContentLoaded", function () {
    //loadUsuers()
})
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
        userList.innerHTML = ""
        data.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = `
                <strong>${user.name}</strong> <p>${user.email}</p>
                <button data-id="${user._id}" class = "btn btn-edit"> Editar </button>
                <button data-id="${user._id}" class = "btn btn-delete"> Eliminar </button>
            `
            userList.appendChild(li)
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
userList.addEventListener("click", function (event) {
    if(event.target.classList.contains("btn-edit")){
        const userId = event.target.getAttribute("data-id") //id del usuario que se va a editar
        const newName = prompt("Editar nombre:")
        if (newName) {

            const name = {
                name: newName,
                email: event.target.parentElement.querySelector('p').textContent
            }
            fetch(`${apiURL}/${userId}`,
                {
                    method: "PUT",
                    body:JSON.stringify(
                        //Aquí va la información que queremos dar de alta en formato JSON
                        name
                    ),
                    headers:{
                        "Content-type" : "application/json"
                    }
                }
            ).then(() => loadUsuers())
        }
    }
})

//BAJA DE USUARIOS



document.addEventListener("DOMContentLoaded", function () {
    loadUsuers()
})
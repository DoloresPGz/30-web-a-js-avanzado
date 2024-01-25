//Importamos el objeto pc de picocolors usando la sintaxis de ECM
import pc from "picocolors"
//Paso 2. Importar mi elemento en el archivo donde lo necesito
import nombre from "./nombre.js"
import {PI, suma, resta} from "./operaciones.js"

console.log('Hola mundo!');
console.log(pc.red('Saludos a todos'))
console.log("Hola " + nombre);

console.log(suma(PI, 5));
console.log(resta(10, 5));
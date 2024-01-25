//Importamos picocolors usando la sintaxis de common js (CJS)
const pc = require('picocolors')

console.log("Hola mundo!")

console.log(
    pc.bgYellow(pc.blue(`How are ${pc.underline(`you`)} doing?`))
)

//Ciclo infinito! Lo detengo usando ctl + c
// while(true){
//     console.log("Estoy loco")
// }
function soyCien() {
    return 100
}

function soyDoscientos() {
    return 200
}

function sumaDosFunciones(functionOne, functionTwo) {
    const suma = functionOne() + functionTwo()
    return suma
}

console.log(sumaDosFunciones(soyCien, soyDoscientos));
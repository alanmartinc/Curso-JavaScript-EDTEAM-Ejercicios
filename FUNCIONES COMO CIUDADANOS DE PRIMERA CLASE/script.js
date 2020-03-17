// Funciones de Primera Clase

/*
const c = console.log
const multiplicar = (a,b) => a * b

c(multiplicar(3,4))
*/

/*
const c = console.log
const multiplicar = (a,b) => a * b

let edad = multiplicar (5,4)
let edad2 = multiplicar(multiplicar(5,4),2)
c(edad2)
*/

const c = console.log

const sumar = x => y => x + y

c(sumar(10)(20))

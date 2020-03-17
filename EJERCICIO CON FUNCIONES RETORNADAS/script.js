// Funciones Retornadas

const c = console.log

const doSomething = x => y => x * y

const a = doSomething(2)(2)
const b = doSomething(3)

c(doSomething(a)(b(3)))

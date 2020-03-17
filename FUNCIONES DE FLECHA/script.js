// Funciones de Flecha

const saludar = (persona,sexo) => {
    let saludo = sexo === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a EDteam, ${persona}`
}

console.log(saludar('Alan', 'm'))
console.log(saludar('Julieta', 'f'))
console.log(saludar('Mauricio', 'm'))

const sumar = (a,b) => a + b

console.log(sumar(1,4))
console.log(sumar(3,9))
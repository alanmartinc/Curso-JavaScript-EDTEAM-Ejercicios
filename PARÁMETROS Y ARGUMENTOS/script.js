// Parámetros y Argumentos

const saludar = (persona = 'visitante',sexo = 'm') => {
    let saludo = sexo === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a EDteam, ${persona}`
}

console.log(saludar('Alan',))
console.log(saludar('Julieta', 'f'))
console.log(saludar('Mauricio',))
console.log(saludar())

const sumar = (a,b) => a + b

console.log(sumar(1,4))
console.log(sumar(3,9))
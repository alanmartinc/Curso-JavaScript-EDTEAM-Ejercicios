// Funcion

function saludar(persona,sexo) {
    let saludo = sexo === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a EDteam, ${persona}`
}

console.log(saludar('Alan', 'm'))
console.log(saludar('Julieta', 'f'))
console.log(saludar('Mauricio', 'm'))


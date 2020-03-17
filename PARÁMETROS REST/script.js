// Parámetros rest

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

const sumarTodos = (...numeros) => {
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    return resultado
}

console.log(sumarTodos(1,2,3,4,5,6,7))
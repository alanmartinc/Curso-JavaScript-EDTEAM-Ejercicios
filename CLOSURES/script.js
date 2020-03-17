// Closures

function aumentar() {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}

const incrementar = aumentar()

incrementar()
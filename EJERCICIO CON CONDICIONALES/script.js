// Condicionales

let age = parseInt(prompt('Dime tu edad'),10)

if(age) {
    if(age >= 18) {
        alert('Eres mayor de edad')
    } else {
        alert('Te faltan años')
    }
} else {
    age = parseInt(prompt('Tu edad debe ser un número'),10)
}



// Operador in y ciclo for in

let user = { nombre: 'Jorge', edad: '40', sexo: 'Masculino' }
undefined

user
{nombre: "Jorge", edad: "40", sexo: "Masculino"}

'sexo' in user
true

for(let property in user) { 
    console.log(property) 
}
nombre
edad
sexo
undefined

Object.prototype.piernas = 2
2

user.piernas
2

for(let property in user) { 
    console.log(property) 
}

nombre
edad
sexo
piernas
undefined

for(let property in user) { 
    if(user.hasOwnProperty(property)) 
    console.log(property) 
}

nombre
edad
sexo
undefined
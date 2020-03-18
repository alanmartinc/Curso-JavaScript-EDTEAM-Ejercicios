// Agregar y quitar propiedades de un objeto

let user = { nombre: 'Jorge', edad: '40', sexo: 'Masculino' }
undefined

user
{nombre: "Jorge", edad: "40", sexo: "Masculino"}

delete user.edad
true

user
{nombre: "Jorge", sexo: "Masculino"}

user.edad = 40
40

user
{nombre: "Jorge", sexo: "Masculino", edad: 40}
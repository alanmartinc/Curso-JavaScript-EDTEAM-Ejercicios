// Mutabilidad y copiado de objetos

user
{nombre: "Jorge", edad: "40", sexo: "Masculino"}

let otroUser = user
undefined

otroUser
{nombre: "Jorge", edad: "40", sexo: "Masculino"}

otroUser.piernas = 3
3

user
{nombre: "Jorge", edad: "40", sexo: "Masculino", piernas: 3}

otroUser
{nombre: "Jorge", edad: "40", sexo: "Masculino", piernas: 3}

let user2 = Object.assign({},user)
undefined

user2
{nombre: "Jorge", edad: "40", sexo: "Masculino", piernas: 3}

user2.brazos = 2
2

user
{nombre: "Jorge", edad: "40", sexo: "Masculino", piernas: 3}

user2
{nombre: "Jorge", edad: "40", sexo: "Masculino", piernas: 3, brazos: 2}
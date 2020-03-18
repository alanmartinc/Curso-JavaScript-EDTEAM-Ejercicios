// Método .some() y .every()

let teachers = ['Alexys', 'Beto', 'Daniel', 'Join', 'José', 'Manu']
undefined

for(let teacher of teachers) { console.log(teacher)}
Alexys
Beto
Daniel
Join
José
Manu
undefined

teachers
(6) ["Alexys", "Beto", "Daniel", "Join", "José", "Manu"]

teachers.some( el => el === 'Alexys' )
true

teachers.some( el => el === 'Jeronimo' )
false

teachers.some( el => el.includes('a') )
true

teachers.every( el => el.includes('a') )
false

teachers.every( el => el.length >= 3 )
true

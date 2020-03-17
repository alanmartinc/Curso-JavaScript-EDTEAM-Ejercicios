// Agregar y quitar valores de un array

let arr = [1,2,3,4]
undefined

arr.push(5)
5

arr
(5) [1, 2, 3, 4, 5]

arr.pop()
5

arr
(4) [1, 2, 3, 4]

arr.unshift('Nuevo')
5

arr
(5) ["Nuevo", 1, 2, 3, 4]

arr.shift()
"Nuevo"

arr
(4) [1, 2, 3, 4]

arr = ['Peru', 'Colombia', 'Mexico', 'Bolivia']
(4) ["Peru", "Colombia", "Mexico", "Bolivia"]

arr.splice(2,0,'Chile', 'Ecuador')
[]

arr
(6) ["Peru", "Colombia", "Chile", "Ecuador", "Mexico", "Bolivia"]

arr.splice(4,1,'Costa Rica')
["Mexico"]

arr
["Peru", "Colombia", "Chile", "Ecuador", "Costa Rica", "Bolivia"]


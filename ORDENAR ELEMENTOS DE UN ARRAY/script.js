// Ordenar elementos de un array

'Hola mama'.split('')
(9) ["H", "o", "l", "a", " ", "m", "a", "m", "a"]

'Hola mama'.split('').reverse()
(9) ["a", "m", "a", "m", " ", "a", "l", "o", "H"]

'Hola mama'.split('').reverse().join('')
"amam aloH"

const reverseText = string => string.split('').reverse().join('')
undefined

reverseText('EDteam')
"maetDE"

let saludo = reverseText('Hola cómo estás')
undefined

saludo
"sátse omóc aloH"

reverseText(saludo)
"Hola cómo estás"

let arr2 = ['B', 'A', 'Z', 'F']
undefined

arr2.sort()
(4) ["A", "B", "F", "Z"]

arr2.sort().reverse()
(4) ["Z", "F", "B", "A"]

let numbers = [10, 100, 2, 20]
undefined

numbers.sort((a,b) => a - b)
(4) [2, 10, 20, 100]
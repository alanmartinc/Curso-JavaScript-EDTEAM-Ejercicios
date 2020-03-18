// Método .map() .filter() .reduce()

let numbers = [5,6,9,4,3]
undefined

numbers
(5) [5, 6, 9, 4, 3]

numbers.map(el => el * el)
(5) [25, 36, 81, 16, 9]

let newArray = numbers.map( el => el * el)
undefined

newArray
(5) [25, 36, 81, 16, 9]

let otherArray = numbers.filter(el => el > 5)
undefined

otherArray
(2) [6, 9]

let sum = numbers.reduce( (a,b) => a + b)
undefined

sum
27

numbers
(5) [5, 6, 9, 4, 3]
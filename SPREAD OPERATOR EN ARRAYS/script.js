// Spread operator en arrays

let numbers = [10, 100, 2, 20, 200, 300]
undefined

new Set(numbers)
Set(6) {10, 100, 2, 20, 200, …}

[...new Set(numbers)]
(6) [10, 100, 2, 20, 200, 300]

const removeDuplicates = arr => [...new Set(arr)]
undefined

removeDuplicates(['a','b','a'])
(2) ["a", "b"]

Math.min(10,20,30,1)
1

Math.max(10,20,30,1)
30

let numbers = [10, 20, 30, 1]
undefined

Math.min(...numbers)
1

Math.max(...numbers)
30
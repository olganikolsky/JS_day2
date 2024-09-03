let x = 8
let y = 4
console.log(x + y, x - y, x * y, x / y)

let counter = 10
counter++
console.log(counter)
counter--
console.log(counter)

let num = 5
num+=3
console.log(num)
num-=2
console.log(num)

let price = 19.99
console.log(Math.round(price))

let base = 3 
let exponent = 4
let pow = Math.pow(base, exponent)
console.log(pow)

let a = 3
let b = 99
let c = 108
console.log(Math.min(a, b, c), Math.max(a, b, c))

a = 10
b = 20
console.log(a >= b)

let firstName = 'John'
let lastName = 'John'
console.log(firstName === lastName)

let num1 = 0
let num2 = null
console.log(num1 == num2)
//В num есть значение 0, а null подразумевает отсутствие значения на данный момент. Так как при == сравниваются только значения, выходит такой результат.

let age = 18
console.log(age != 21)

let isAdult = true 
let hasID = false
console.log(isAdult && hasID)

let isMember = false
let isGuest = true
console.log(isMember || isGuest)

isOnline = true
console.log(!isOnline)
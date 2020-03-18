// Prototipos

let amigo = 'Emanuel'
undefined

amigo
"Emanuel"

typeof amigo
"string"

Object.getPrototypeOf(amigo)
String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

String
ƒ String() { [native code] }

Number
ƒ Number() { [native code] }

Boolean
ƒ Boolean() { [native code] }

Object
ƒ Object() { [native code] }

let amigo2 = new String('Lucas')
undefined

amigo2
String {"Lucas"}

typeof amigo2
"object"
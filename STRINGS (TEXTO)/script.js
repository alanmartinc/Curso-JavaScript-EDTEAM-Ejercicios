/* 

Example 1 (Propiedades): característica que tiene el dato

    'Alan'.length (Cantidad de caracteres)
    4

Example 2 (Métodos): Algo que puede hacer

    '       hola        '
    "       hola        "
    '       hola        '.trim() (Quita los espacios en blanco)
    "hola"           

    'hola'.toUpperCase() (Convierte en mayúsculas)    
    "HOLA"

    'HOLA'.toLowerCase() (Convierte en minuscula)
    "hola"

*/

let answer = prompt('¿Cuál es la capital del Perú?').toUpperCase().trim()

let message = answer === 'LIMA'
                ? '¡Correcto!'
                : '¡Te equivocaste! La respuesta es Lima'

alert(message)





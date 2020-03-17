// Switch

let answer = prompt(`La capital de Colombia es:
a. Bogotá
b. Lima
c. Madrid
d. México
e. La Paz
`).toUpperCase().trim()

switch (answer) {
    case 'A':
        alert('¡Correcto!')
        break;
    case 'B':
        alert('Te equivocaste.')
        break;
    default:
        alert('No has escrito una opción valida')
        break;
}
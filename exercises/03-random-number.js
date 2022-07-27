// Crear función que recibe como parámetro dos números y usar el objeto Math para generar un número aleatorio entre estos dos números.

function randomNumber(number1, number2) {
    return Math.floor(Math.random() * (number1 - number2) + number2);
}

console.log(randomNumber(10, 12));
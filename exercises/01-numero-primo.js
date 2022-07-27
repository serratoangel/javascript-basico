// Escribir una función que determine si un número es primo o no.

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(7));
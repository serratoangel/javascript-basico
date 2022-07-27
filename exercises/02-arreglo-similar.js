// Escribir una función que determine si dos arreglos son iguales o no.

function igual(uno, dos) {
    if (uno.length !== dos.length) {
        return "Los arreglos no tienen el mismo length.";
    }
    for (let i = 0; i <= uno.length; i++) {
        if (uno[i] !== dos[i]) {
            return "Los arreglos no son iguales.";
        }
    }
    return "Los arreglos son iguales.";
}

let data = [1, 2, 8, 4, 5];
let dato = [1, 2, 3, 4, 5];
console.log(igual(data, dato));
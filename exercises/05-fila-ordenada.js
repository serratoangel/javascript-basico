// Crear funcion que recibe como parametro un numero el cual se insertara en un arreglo
// Recibe numeros positivos mayores que cero, se deben ordenar de manera ascendente

function ordenar(numero) {
    // sort recibe una funcion que compara en este caso dos numeros
    console.log(numero.sort((a, b) => a > b ? 1 : -1));
}

let arreglo = new Array(100, 220, 330, 440, 50, 60, 7000, 80, 90, 100);
// let numero = new Array[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

ordenar(arreglo);
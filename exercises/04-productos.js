// Crear un array de productos que contenga información sobre el ID, nombre del producto, marca del producto y fecha de expiración.

const listaProductos = [
    {
        id: 1,
        nombreProducto: "mantequilla",
        marca: "hola",
        fechaExpiracion: "2022-04-20"
    },
    {
        id: 2,
        nombreProducto: "leche",
        marca: "oso",
        fechaExpiracion: "2022-04-13"
    },
    {
        id: 3,
        nombreProducto: "almond",
        marca: "alo",
        fechaExpiracion: "2022-04-18"
    },
    {
        id: 4,
        nombreProducto: "jamon",
        marca: "bimbo",
        fechaExpiracion: "2022-04-01"
    },
    {
        id: 5,
        nombreProducto: "arroz",
        marca: "casanare",
        fechaExpiracion: "2022-04-03"
    }
]

function buscarProducto(id) {
    return listaProductos.filter((producto) => producto.id === id);
}

console.log(buscarProducto(3));

// function buscarFecha(fecha) {
//     return listaProductos.filter((producto) => producto.fechaExpiracion === fecha);
// }

// console.log(buscarFecha("2022-04-18"));

function buscarFecha(fechaA, fechaB) {
    fechaA = new Date(fechaA);
    fechaB = new Date(fechaB);
    return listaProductos.filter((producto) => {
        const fechaExpiracion = new Date(producto.fechaExpiracion);
        return fechaExpiracion <= fechaA && fechaExpiracion >= fechaB;
    });
}

console.log(buscarFecha("2022-04-30", "2022-04-15"));
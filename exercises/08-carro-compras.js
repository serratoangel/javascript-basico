// escribir clase que almacena informacion sobre un producto de supermercado
// crear funcion que sirve como carrito de compras
// la funcion calcula el valor total de la compra
// tambien verifica que los productos no se hayan vencido

class Producto {
    _nombre;
    _precio;
    _fechaVencimiento;

    constructor(nombre, precio, fechaVencimiento) {
        this.nombre = nombre;
        this.precio = precio;
        this.fechaVencimiento = new Date(fechaVencimiento);
    }
}

function carritoCompra(productos) {
    const hoy = new Date();
    const productosValidos = productos.filter((producto) => producto._fechaVencimiento > hoy);
    return productosValidos.reduce((acumulador, producto) => acumulador += producto._precio, 0);
}

const resultado = carritoCompra([
    new Producto(`leche`, 4, `2022-03-15`),
    new Producto(`pan`, 4, `2022-03-14`),
])
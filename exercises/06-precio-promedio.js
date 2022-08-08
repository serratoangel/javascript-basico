// objetos de casa id numero habitaciones localidad precio de venta
// recorrer el arreglo que contienen los objetos

const casas = [
    {
        id: 1,
        habitaciones: 1,
        tamano: 10,
        localidad: "uno",
        precio: 1000
    },
    {
        id: 2,
        habitaciones: 2,
        tamano: 20,
        localidad: "dos",
        precio: 2000
    },
    {
        id: 3,
        habitaciones: 5,
        tamano: 60,
        localidad: "tres",
        precio: 3000
    },
    {
        id: 4,
        habitaciones: 5,
        tamano: 60,
        localidad: "cuatro",
        precio: 4000
    },
    {
        id: 5,
        habitaciones: 5,
        tamano: 60,
        localidad: "uno",
        precio: 5000
    },
    {
        id: 6,
        habitaciones: 5,
        tamano: 60,
        localidad: "dos",
        precio: 6000
    },
    {
        id: 7,
        habitaciones: 5,
        tamano: 60,
        localidad: "tres",
        precio: 7000
    },
    {
        id: 8,
        habitaciones: 5,
        tamano: 60,
        localidad: "cuatro",
        precio: 8000
    },
    {
        id: 9,
        habitaciones: 5,
        tamano: 60,
        localidad: "uno",
        precio: 9000
    },
    {
        id: 10,
        habitaciones: 5,
        tamano: 60,
        localidad: "dos",
        precio: 10000
    },
    {
        id: 11,
        habitaciones: 5,
        tamano: 60,
        localidad: "tres",
        precio: 1000
    },
    {
        id: 12,
        habitaciones: 5,
        tamano: 60,
        localidad: "cuatro",
        precio: 2000
    },
    {
        id: 13,
        habitaciones: 5,
        tamano: 60,
        localidad: "uno",
        precio: 3000
    },
    {
        id: 14,
        habitaciones: 5,
        tamano: 60,
        localidad: "dos",
        precio: 4000
    },
    {
        id: 15,
        habitaciones: 5,
        tamano: 60,
        localidad: "tres",
        precio: 6000
    },
    {
        id: 16,
        habitaciones: 5,
        tamano: 60,
        localidad: "cuatro",
        precio: 5000
    },
    {
        id: 17,
        habitaciones: 5,
        tamano: 60,
        localidad: "uno",
        precio: 7000
    },
    {
        id: 18,
        habitaciones: 5,
        tamano: 60,
        localidad: "dos",
        precio: 8000
    },
    {
        id: 19,
        habitaciones: 5,
        tamano: 60,
        localidad: "tres",
        precio: 9000
    },
    {
        id: 20,
        habitaciones: 5,
        tamano: 60,
        localidad: "cuatro",
        precio: 10000
    }
]

// esto va a ser un objeto para agregar los precios de las casas
const acumulado = {};

// para recorrer el arreglo de las casas 
// sumo los precios de las casas por localidad y a su vez cuento la cantidad de casas por localidad

for (const casa of casas) {
    if (!acumulado[casa.localidad]) {
        acumulado[casa.localidad] = { acumuladoPrecio: 0, contador: 0 };
    }
    acumulado[casa.localidad].acumuladoPrecio += casa.precio;
    acumulado[casa.localidad].contador += 1;
}

console.log(acumulado);

// devuelve un arreglo que contiene la lista de keys de un objeto
const localidades = Object.keys(acumulado);

for (const localidad of localidades) {
    console.log(localidad + ` ` + Math.floor(acumulado[localidad].acumuladoPrecio / acumulado[localidad].contador));
}
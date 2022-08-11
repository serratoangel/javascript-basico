const nombres = [
    "Samantha Chitiva",
    "Brian Vargas",
    "Paola Cubillos",
    "Paola Arias",
    "Angel Serrato",
    "Eduardo Peña",
    "Aurora Portilla",
    "Nelson Portilla",
    "Luis Serrato",
    "Alexander Cardenas",
    "Flor Arias",
    "Amparo González",
    "Lea Salazar",
    "Sandra Vega",
    "Sebastian Rodriguez",
    "Carlos Sanchez",
    "Johan Cubillos",
    "Diego Franco",
    "Miguel Zapata",
    "Milena Paez",
    "Cindy Ramirez",
    "Walter Junior",
    "Will Smith",
    "Edilia Serrato",
    "Harry Potter"
];

// Ordenar nombres alfabeticamente

const ordenados = nombres.sort((a, b) => {
    const nombresA = a.split(` `)[0];
    const nombresB = b.split(` `)[0];
    return nombresA < nombresB ? -1 : nombresA > nombresB ? 1 : 0;
});

console.log(ordenados);

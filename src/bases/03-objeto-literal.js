const persona = {
    nombre: 'Bryan',
    apellido: 'Anton',
    edad: 22,
    direccion: {
        ciudad: 'Fish City',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';
persona2.direccion.ciudad = "Bellavista";


console.log( persona );
console.log( persona2 )

//Variables y constantes

const nombre = "Bryan";
let apellido = "Anton";

let valorDado = 5;
valorDado = 3;

console.log(nombre,apellido,valorDado);

//No se debe usar el var
if (true) {
    const nombre = 'Peter';
    let valorDado = 1;
    console.log(valorDado);
}

console.log(valorDado);
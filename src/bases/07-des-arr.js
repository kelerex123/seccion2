const personajes = ['Pepe','Ajio','Gaa'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamarĂ¡ nombre
// 2. se llamarĂ¡ setNombre
const uState = (valor) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [nombre, setNombre ] = uState('Goku');

console.log(nombre);
setNombre();





const animales = ['chanchos', 'cabras', 'ovejas'];

animales.push('gallinas', 'gatos', 'perros');
console.log(animales);
// Respuesta esperada: Array ["chanchos", "cabras", "ovejas", "vacas", "gallinas", "gatos", "perro]

const total = animales.push('vacas');
console.log(total);
// Respuesta esperada: 7
console.log(animales);
// Respuesta esperada: ["chanchos", "cabras", "ovejas", "vacas", "gallinas", "gatos", "perro]

const encontrado1 = animales.find(elemento => elemento === 'vacas'); //Encuentra "vacas"
const encontrado2 = animales.find(elemento => elemento === 'unicornio');//No existe

const filter = animales.filter(palabra => palabra.length > 7);
const filter1 = animales.filter(palabra => palabra.length < 7);

const longitud = animales.map(palabra => palabra.length);

class Menu {

    constructor(comida, precio, porcion) {
        this.comida = comida.toUpperCase();
        this.precio = parseFloat(precio);
        this.porcion = porcion;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

/*-----------------------------------------------------------------*/

const pollo = new Menu('Pollo al espiedo', 1700, '3 personas');
const tarta = new Menu('Tarta de verdura', 1100, '2 personas');
const empanada = new Menu('Empanada de carne', 160, '1 persona');
const guiso = new Menu('Guiso de lentejas', 850, '1 persona');
const budin = new Menu('Budin de pan', 600, '2 personas');
const lasagna = new Menu('Lasagna', 2200, '3 personas');
const pizzaneza = new Menu('Pizzaneza', 2450, '4 personas');
const pizzaMuzza = new Menu('Pizza muzzarella', 1100, '3 personas');
const omelet = new Menu('Omelet de jamón y queso', 900, '1 persona');
const ravioles = new Menu('Ravioles', 800, '1 persona');
const chocotorta = new Menu('Chocotorta', 500, '2 personas');
const pizzaEsp = new Menu('Pizza especial', 1500, '3 personas');
const pizzaNapo = new Menu('Pizza napolitana', 1500, '3 personas');
const pizzaRoque = new Menu('Pizza roquefort', 1800, '3 personas');
const pizzaCala = new Menu('Pizza calabreza', 1900, '3 personas');

/*-------------------------------------------------------------------*/

const especialidades = [pollo, guiso, omelet];
const minutas = [tarta, empanada, pizzaneza];
const pastas = [lasagna, ravioles];
const pizzas = [pizzaMuzza, pizzaEsp];
const postres = [budin, chocotorta];

/*---------------------------------------------------------------------*/

omelet.sumarIva();
console.log(`El precio de ${omelet.comida} es ${omelet.precio}` );

pizzas.push(pizzaNapo, pizzaRoque);
console.log(pizzas);

pizzas.unshift(pizzaCala);
console.log(pizzas, pizzas.length);

pastas.join(" ,");
console.log(pastas);

// /*------------------------------------------------------------------*/

const encontrado = minutas.find((minutas)=> minutas.precio < 500);
console.log(encontrado);

const filtrado = pizzas.filter((pizzas)=> pizzas.precio > 1000);
console.log(filtrado);

const buscaPostre = postres.some((postres)=> postres.precio < 600);
console.log(buscaPostre);

const descuento = especialidades.map((especialidades)=>{
    return{
        comida: especialidades.comida,
        precio: especialidades.precio*.90
    }
})

console.log(descuento);

/*-----------------------------------------------------------------*/

const container = document.querySelector('#muestra');

let input = document.querySelector('#input');
let button = document.querySelector('#button');

const handleClick = () => {
    
    let item = document.createElement('p');
    item.innerText = input.value;

    container.appendChild(item)
    input.value = '';
}

button.addEventListener('click', handleClick)

// const  buscar  =  documento . getElementById ( "main" )
// let nuevoDiv = document.createElement(`div`);
// nuevoDiv.innerHTML = `<h1> Bienvenido a Don Marino </h1> `;
// nuevoDiv.className = `divJs`
// console.log(nuevoDiv);

/*-----------------------------------------------------------------*/

// let saludo = prompt(`Bienvenido a Don Marino. ¿Qué menú deseas ver el día de hoy?
// \n Por favor, ingresá la opción correspondiente:
// \n 1- ESPECIALIDADES, 2- MINUTAS, 3- PASTAS, 4- PIZZAS , 5-POSTRES`);

// saludo = parseInt(saludo);

// if (saludo == 1) {
//     especialidades.forEach(element => {
//         console.log(element)
//     });

// } else if (saludo == 2) {
//     minutas.forEach(element => {
//         console.log(element)
//     });
// } else if (saludo == 3) {
//     pastas.forEach(element => {
//         console.log(element)
//     });
// } else if (saludo == 4) {
//     pizzas.forEach(element => {
//         console.log(element)
//     });
// } else if (saludo == 5) {
//     postres.forEach(element => {
//         console.log(element)
//     });
// } else {
//     console.log('Lo siento, no ingresaste el dato correspondiente');
// }

/*-----------------------------------------------------------------*/


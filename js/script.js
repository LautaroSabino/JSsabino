class Menu {

    constructor(comida, precio, porcion, categoria) {
        this.comida = comida.toUpperCase();
        this.precio = parseFloat(precio);
        this.porcion = porcion;
        this.categoria = categoria;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

/*-----------------------------------------------------------------*/

const pollo = new Menu('Pollo al espiedo', 1700, '3 personas', 'especialidades');
const tarta = new Menu('Tarta de verdura', 1100, '2 personas', 'minutas');
const empanada = new Menu('Empanada de carne', 160, '1 persona', 'minutas');
const guiso = new Menu('Guiso de lentejas', 850, '1 persona', 'especialidades');
const budin = new Menu('Budin de pan', 600, '2 personas', 'postres');
const lasagna = new Menu('Lasagna', 2200, '3 personas', 'pastas');
const pizzaneza = new Menu('Pizzaneza', 2450, '4 personas', 'minutas');
const pizzaMuzza = new Menu('Pizza muzzarella', 1100, '3 personas', 'pizzas');
const omelet = new Menu('Omelet de jamón y queso', 900, '1 persona', 'especialidades');
const ravioles = new Menu('Ravioles', 800, '1 persona', 'pastas');
const chocotorta = new Menu('Chocotorta', 500, '2 personas', 'postres');
const pizzaEsp = new Menu('Pizza especial', 1500, '3 personas', 'pizzas');
const pizzaNapo = new Menu('Pizza napolitana', 1500, '3 personas', 'pizzas');
const pizzaRoque = new Menu('Pizza roquefort', 1800, '3 personas', 'pizzas');
const pizzaCala = new Menu('Pizza calabreza', 1900, '3 personas', 'pizzas');

/*-------------------------------------------------------------------*/

const especialidades = [pollo, guiso, omelet];
const minutas = [tarta, empanada, pizzaneza];
const pastas = [lasagna, ravioles];
const pizzas = [pizzaMuzza, pizzaEsp];
const postres = [budin, chocotorta];

const menuTotal = [pollo, guiso, omelet, tarta, empanada, pizzaneza, lasagna, ravioles, pizzaMuzza, pizzaEsp, budin, chocotorta];


console.log(menuTotal);

let selectorOpciones = document.querySelector('#opcionesMenu');
let elegir = document.querySelector('#elegir');
let listaResultados = document.getElementById('resultado');

const filtrar = (array, categoria) => { return array.filter(item => item.categoria == categoria) }


const handleClick = (array, select) => {
    return filtrar(array, select.value);
}

const mostrarHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(plato => {
        let li = `<li>${plato.comida}, porción para ${plato.porcion} $ ${plato.precio}</li>`
        lista.innerHTML += li;
    })
}

elegir.onclick = () => {
    mostrarHTML(handleClick(menuTotal, selectorOpciones), listaResultados);
}

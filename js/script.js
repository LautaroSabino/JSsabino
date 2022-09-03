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
const carne = new Menu('Cuadril mechado al verdeo', 3850, '4 persona', 'especialidades');
const budin = new Menu('Budin de pan', 600, '2 personas', 'postres');
const lasagna = new Menu('Lasagna', 2200, '3 personas', 'pastas');
const noquis = new Menu('Noquis', 900, '1 persona', 'pastas');
const pizzaneza = new Menu('Pizzaneza', 2450, '4 personas', 'minutas');
const pizzaMuzza = new Menu('Pizza muzzarella', 1100, '3 personas', 'pizzas');
const omelet = new Menu('Omelet de jamón y queso', 900, '1 persona', 'especialidades');
const ravioles = new Menu('Ravioles', 800, '1 persona', 'pastas');
const chocotorta = new Menu('Chocotorta', 500, '2 personas', 'postres');
const pizzaEsp = new Menu('Pizza especial', 1500, '3 personas', 'pizzas');
const pizzaNapo = new Menu('Pizza napolitana', 1500, '3 personas', 'pizzas');
const pizzaRoque = new Menu('Pizza roquefort', 1800, '3 personas', 'pizzas');
const pizzaCala = new Menu('Pizza calabreza', 1900, '3 personas', 'pizzas');
const pastel = new Menu('Pastel de papas', 900, '1 persona', 'especialidades');
const fideos = new Menu('Tallarines a la bolognesa', 850, '1 persona', 'pastas');
const oreo = new Menu('Torta oreo', 550, '2 persona', 'postres');

/*-------------------------------------------------------------------*/

const especialidades = [pollo, guiso, carne, omelet, pastel];
const minutas = [tarta, empanada, pizzaneza];
const pastas = [lasagna, fideos, ravioles, noquis];
const pizzas = [pizzaMuzza, pizzaEsp, pizzaRoque, pizzaCala];
const postres = [budin, oreo, chocotorta];

const menuTotal = [...especialidades, ...minutas, ...pastas, ...pizzas, ...postres]

/*--------------------------------------------------------------------------------------------------------*/


let selectorOpciones = document.querySelector('#opcionesMenu');
let elegir = document.querySelector('#elegir');
let listaResultados = document.getElementById('resultado');

const filtrarCategoria = (array, {value}) => array.filter(item => item.categoria == value);

const mostrarHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(plato => {
        let li = `<li>${plato.comida}, porción para ${plato.porcion} $ ${plato.precio}</li>`
        lista.innerHTML += li;
    })
}

elegir.addEventListener('click', () => mostrarHTML(filtrarCategoria(menuTotal, selectorOpciones), listaResultados));

/*--------------------------------------------------------------------------------------------------------*/

Toastify({
    text: "Visitanos en Google",
    duration: 4000,
    destination: "https://www.google.com/search?q=don+marino&sxsrf=ALiCzsa0YV8UqI6o6LxJE9P3f-w7UJML7A%3A1661871942972&source=hp&ei=RicOY6-ZOcXn1sQPtNmXoAc&iflsig=AJiK0e8AAAAAYw41VhIQ-HV_XKl7vdpcDFmamjzy3Uka&gs_ssp=eJzj4tVP1zc0TDKLTytOL8swYLRSNaiwNE0yT0xKNjZISzNJMbMwtzKoSLE0NTE0sUgzszQ1SzM2MfPiSsnPU8hNLMrMywcAd1MTKA&oq=don+m&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMhEILhCABBCxAxDHARCvARDUAjIICAAQgAQQsQMyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgsILhCABBDHARCvAToHCCMQ6gIQJzoNCC4QxwEQ0QMQ6gIQJzoHCC4Q6gIQJzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoKCAAQsQMQgwEQQzoICC4QsQMQgwE6CAguEIAEELEDUKcEWOsJYKEZaAFwAHgAgAHHBIgB5BCSAQkyLTEuMS4xLjKYAQCgAQGwAQo&sclient=gws-wiz",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}
}).showToast();

/*--------------------------------------------------------------------------------------------------------*/

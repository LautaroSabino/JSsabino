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

const pollo = new Menu('Pollo al espiedo', 1700, '3 personas');
const tarta = new Menu('Tarta de verdura', 1100, '2 personas');
const empanada = new Menu('Empanada de carne', 160, '1 persona');
const guiso = new Menu('Guiso de lentejas', 850, '1 persona');
const budin = new Menu('Budin de pan', 600, '2 personas');
const lasagna = new Menu('Lasagna', 2200, '3 personas');
const pizzaneza = new Menu('Pizzaneza', 2450, '4 personas');
const pizza = new Menu('Pizza muzzarella', 1100, '3 personas');

console.log(pollo.comida);
console.log(tarta.precio);
console.log(budin.porcion);

pizza.sumarIva();
console.log("El precio de " + pizza.comida + " es " + pizza.precio );



const especialidades = [pollo, guiso]
const minutas = [tarta, empanada, pizzaneza, pizza]
const pastas = [lasagna]
const postres = [budin]

for (const i of minutas) {
    console.log(i);
}
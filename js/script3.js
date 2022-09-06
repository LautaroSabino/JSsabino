const botonTarjeta1 = document.querySelector('#btnTarjeta1');
const botonTarjeta2 = document.querySelector('#btnTarjeta2');
const botonTarjeta3 = document.querySelector('#btnTarjeta3');
const botonTarjeta4 = document.querySelector('#btnTarjeta4');
const botonTarjeta5 = document.querySelector('#btnTarjeta5');
const botonTarjeta6 = document.querySelector('#btnTarjeta6');

const muestraTarjeta1 = document.getElementById('#tarjeta1');
const muestraTarjeta2 = document.querySelector('.tarjeta2');
const muestraTarjeta3 = document.querySelector('.tarjeta3');
const muestraTarjeta4 = document.querySelector('.tarjeta4');
const muestraTarjeta5 = document.querySelector('.tarjeta5');
const muestraTarjeta6 = document.querySelector('.tarjeta6');

botonTarjeta1.addEventListener('click', ()=>{
    muestraTarjeta1.classList.remove('.invisible')
})
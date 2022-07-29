console.log('Buenos días, viajero/a. Hoy vas a ingresar a un nuevo mundo de aventuras. Mi nombre es Jhon Montalto y mi misión es ayudarte en este viaje.');

let nombre = prompt('Por favor, ingresá el nombre de tu personaje: ');

const saludar = () => {
    console.log("¡Bienvenido/a " + nombre + " a este nuevo mundo!")
}

saludar();


console.log('Ahora, necesito que me digas si tu personaje es hombre, mujer o sin género: ');

let genero = prompt('Ingresa h si tu personaje es hombre, m si tu personaje es mujer, o x si tu personaje no tiene género: ');

if (genero == 'h') {
    console.log('Perfecto, tu personaje es un hombre');
} else if (genero == 'm') {
    console.log('Perfecto, tu personaje es una mujer');
} else if (genero == 'x') {
    console.log('Perfecto, tu personaje no tiene genero');
} else {
    console.log('No ingresaste bien el género de tu personaje');
}

alert('En apenas diez segundos, comenzamos la aventura');

let cuentaRegresiva = 10
while (cuentaRegresiva < 11) {
    cuentaRegresiva--;
    console.log(cuentaRegresiva);
    if (cuentaRegresiva == 0) {
        console.log('¡Comenzamos!');
        break;
    }
}

const felicitar = (nombre) => {
    console.log("¡Felicitaciones " + nombre + "!")
}

felicitar(nombre);
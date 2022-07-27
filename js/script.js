alert("Buenos días, viajero/a. Hoy vas a ingresar a un nuevo mundo de aventuras. Mi nombre es Jhon Montalto y mi misión es ayudarte en este viaje. ¿Cómo es tu nombre? ");

let nombre = prompt("Por favor, ingresá tu nombre: ");

function saludar(){
    alert("Bienvenido/a " + nombre + " a este nuevo mundo!");
}

saludar();

alert("Ahora, necesito que me digas un número del 1 al 10, el que más te guste: ");

let numero = parseInt(prompt("Ingresa un número del 1 al 10"));

alert("Excelente, tú oro inicial será de:  " + numero + "  monedas.");
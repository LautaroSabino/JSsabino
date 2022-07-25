// ANDRE ESTA PAGINA JS SERIA EL PRIMER ENTREGABLE NO OBLIGATORIO. 


// //Ciclo por conteo.

for (let a = 1; a < 10; a++) {
    console.log("el valor de la variable a es: " + a);
}

for (let b = 1; b < 33; b++) {
    console.log("el valor de la variable b es: " + b * 2);
}


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

// //Estructura Switch.

let color = prompt("Escriba un color primario: ");

switch (color) {
    case "azul":
        alert("Usted ha seleccionado el color AZUL");
        break;
    case "rojo":
        alert("Usted ha seleccionado el color ROJO");
        break;
    case "verde":
        alert("Usted ha seleccionado el color VERDE");
        break;

    default:
        alert("Usted no ingresó un color primario, no sabe jugar");
        break;
}
// ESTA PAGINA NO ES, SOLO ME LA DEJO PARA LOS EJEMPLOS DADOS EN CLASE. ME SIRVE PARA REPASAR CONCEPTOS :)

//esta es la forma de comentar, con las dos barras, en una sola línea.

/*esta es la forma de comentar
en varias líneas*/

//PRUEBA DE ALGORITMO SIMPLE

/*let username = prompt("Ingrese su nombre: ");
let userLastname = prompt("Ingrese su apellido: ");
let userAge = parseInt(prompt("Ingrese su edad: ")); 

let resultado = username + " " + userLastname + " " + userAge;

alert(resultado); */

//PRUEBA DE CONDICIONAL SIMPLE, BÁSICA

// let edad = parseInt(prompt("Ingrese su edad: "));

// if (edad >= 18) {
//     alert("Usted puede ingresar y hacerse una cuenta");

// } else if(edad >= 13){
//     alert("Usted puede crearse una cuenta con restricciones");
// } else{
//     alert("Usted de ninguna manera puede hacerse una cuenta, váyase");
// }

// ejepmplo de funciones

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, 5, "*"));


// while(optionEnNum != 5) {
//     switch (optionEnNum) {
//         case 1: 
//             createProduct();
//             alert("Producto creado");
//             break;
//         case 2:
//             showToName();
//             break;
//         case 3:
//             showToCantidad();
//             break;
//         case 4:
//             showToPrice();
//             break;
//         default:
//             break;
//     }
//     option = prompt(`Ingrese una opcion:
//                         \n1. Ingresar producto.
//                         \n2. Mostrar nombre del producto agregado.
//                         \n3. Mostrar cantidad disponible del producto agregado.
//                         \n4. Mostrar precio del producto agregado.
//                         \n5. Salir del menu.`
//                     )
//     optionEnNum = parseInt(option)             
// }

// const suma  = (a,b) => a + b
// const resta = (a,b) => a - b
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = x => x * 0.21
// let precioProducto  = 500
// let descuento = 50 
// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
// //                 resta (       (500 +          500*0.21)     -       50)

// console.log(nuevoPrecio)

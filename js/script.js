// let nombre = prompt(`Buenos días, viajero/a. Hoy vas a ingresar a un nuevo mundo de aventuras. Mi nombre es Jhon Montalto y mi misión es ayudarte en este viaje.
// \n Por favor, ingresá el nombre de tu personaje: `);

// const saludar = (nombre) => {
//     console.log("¡Bienvenido/a " + nombre + " a este nuevo mundo!");
// }

// saludar(nombre);


// let genero = prompt(`Ahora, necesito que me digas si tu personaje es hombre, mujer o sin género: 
// \n Ingresa h si tu personaje es hombre, m si tu personaje es mujer, o x si tu personaje no tiene género: `);

// if (genero == 'h') {
//     console.log('Perfecto, tu personaje es un hombre');
// } else if (genero == 'm') {
//     console.log('Perfecto, tu personaje es una mujer');
// } else if (genero == 'x') {
//     console.log('Perfecto, tu personaje no tiene genero');
// } else {
//     console.log('No ingresaste bien el género de tu personaje. No te preocupes, luego podrás volver a hacerlo');
// }

// alert('En apenas diez segundos, comenzamos la aventura');

// for (let i = 0; i <= 10; i++) {
//     alert(i);

//     if (i == 10){
//         alert("¡Comienza tu aventura!");
//     }
// }

let persona1 = {
    nombre: 'Jhon',
    apellido: 'Montalto',
    rol: 'ayudante',
    edad: 42,
    hablar: function () {
        document.write("Hola viajero, mi misión es ayudarte")
    }
}

class Persona {

    constructor(nombre, apellido, rol, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.edad = edad;
    }

    hablar(){
        document.write("Hola viajero, mi misión es ayudarte")
    }      
}



function Persona(nombre, apellido, rol, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.rol = rol;
    this.edad = edad;

    }


const persona2 = new Persona('Pablo', 'Perez', 'mozo', 56);


document.write(persona2.rol + "<br>");
document.write(persona2.edad + "<br>");
document.write(persona1.apellido + "<br>");

let palabra = 'javascript'
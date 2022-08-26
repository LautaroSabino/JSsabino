const infoForm = document.querySelector('#formulario');
let recordar = document.querySelector('#rememberMe');

function handleSubmit(event) {
    event.preventDefault();
    let name = document.querySelector('#nombre').value
    let firstName = document.querySelector('#apellido').value
    let number = document.querySelector('#numero').value
    let mensaje = document.querySelector('#mensaje').value

    const person = {

        name,

        firstName,

        number,

        mensaje

    }


    localStorage.setItem('data', JSON.stringify(person));

    const traerInfo = JSON.parse(localStorage.getItem('data'))

    console.log(traerInfo);

}

function guardarDatos() {
    let username = document.querySelector('#nombre').value
    let userFname = document.querySelector('#apellido').value

    const usuario = {
        name: username,
        fName: userFname
    }

    localStorage.setItem('user', JSON.stringify(usuario));
}

infoForm.addEventListener('submit', handleSubmit);
recordar.addEventListener('click',  guardarDatos);


/*------------------------------------------------------------------------------------------------*/

let limite = 30;
const miTexto = document.getElementById('mi_texto');
const resultado = document.getElementById('resul');
resultado.textContent = `o/${limite}`;

function cambiarClases(elemento, claseA, claseB){
    elemento.classList.add(claseA);
    elemento.classList.remove(claseB);

}

function textArea (cajaTexto, cajaLimite, claseA, claseB){
    const textLength = miTexto.value.length;
    cajaLimite.textContent = `${textLength}/${limite}`

    textLength > limite ? cambiarClases(cajaTexto, claseA, claseB) : cambiarClases(cajaTexto, claseB, claseA);

}


miTexto.addEventListener('input', ()=>{
    textArea(miTexto, resultado, 'sobrepasa', 'noSobrepasa');
})


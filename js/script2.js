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

    name.value = '';
    firstName.value = '';
    number.value = '';
    mensaje = '';
}

function guardarDatos() {
    let username = document.querySelector('#nombre').value
    let userFname = document.querySelector('#apellido').value

    const usuario = {
        'name': username,
        'Fname': userFname
    }

    localStorage.setItem('user', JSON.stringify(usuario));
}

infoForm.addEventListener('submit', handleSubmit);


recordar.addEventListener('click', ()=>{
    
        guardarDatos();   
})


/*------------------------------------------------------------------------------------------------*/